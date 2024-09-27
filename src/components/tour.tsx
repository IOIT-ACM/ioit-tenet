/* eslint-disable @typescript-eslint/no-unsafe-call */
'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { EffectComposer } from 'three-stdlib';
import { RenderPass } from 'three-stdlib';
import { UnrealBloomPass } from 'three-stdlib';

gsap.registerPlugin(ScrollTrigger);

const SpaceTunnel: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollTargetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const Mathutils = {
      normalize: (value: number, min: number, max: number) =>
        (value - min) / (max - min),
      interpolate: (normValue: number, min: number, max: number) =>
        min + (max - min) * normValue,
      map: (
        value: number,
        min1: number,
        max1: number,
        min2: number,
        max2: number,
      ) => {
        const normValue = Mathutils.normalize(
          Math.min(Math.max(value, min1), max1),
          min1,
          max1,
        );
        return Mathutils.interpolate(normValue, min2, max2);
      },
    };

    const ww = window.innerWidth;
    const wh = window.innerHeight;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setSize(ww, wh);

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x194794, 0, 100);

    const camera = new THREE.PerspectiveCamera(45, ww / wh, 0.001, 200);
    const cameraGroup = new THREE.Group();
    cameraGroup.position.z = 400;
    cameraGroup.add(camera);
    scene.add(cameraGroup);

    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(ww, wh),
      1.5,
      0.4,
      0.85,
    );
    bloomPass.threshold = 0;
    bloomPass.strength = 0.9;
    bloomPass.radius = 0;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // Create tube geometry
    const points = [
      [10, 89, 0],
      [50, 88, 10],
      [76, 139, 20],
      [126, 141, 12],
      [150, 112, 8],
      [157, 73, 0],
      [180, 44, 5],
      [207, 35, 10],
      [232, 36, 0],
    ].map(([x, y, z]) => new THREE.Vector3(x, z, y));

    const path = new THREE.CatmullRomCurve3(points);
    path.tension = 0.5;

    const tubeGeometry = new THREE.TubeGeometry(path, 300, 4, 32, false);

    const mapHeight = new THREE.TextureLoader().load(
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/waveform-bump3.jpg',
      (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set(0, 0);
        texture.repeat.set(15, 2);
      },
    );

    const material = new THREE.MeshPhongMaterial({
      side: THREE.BackSide,
      shininess: 20,
      bumpMap: mapHeight,
      bumpScale: -0.03,
      specular: 0x0b2349,
    });

    const tube = new THREE.Mesh(tubeGeometry, material);
    scene.add(tube);

    // Inner tube
    const innerTubeGeometry = new THREE.TubeGeometry(path, 150, 3.4, 32, false);
    const edgesGeometry = new THREE.EdgesGeometry(innerTubeGeometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({
      linewidth: 2,
      opacity: 0.2,
      transparent: true,
    });
    const wireframe = new THREE.LineSegments(edgesGeometry, wireframeMaterial);
    scene.add(wireframe);

    // Light
    const light = new THREE.PointLight(0xffffff, 0.35, 4, 0);
    light.castShadow = true;
    scene.add(light);

    // Particle systems
    const particleCount = 6800;
    const particleGeometries = [
      new THREE.BufferGeometry(),
      new THREE.BufferGeometry(),
      new THREE.BufferGeometry(),
    ];
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,
      map: new THREE.TextureLoader().load(
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/spikey.png',
      ),
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    particleGeometries.forEach((geometry, index) => {
      const positions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] = Math.random() * 500 - 250;
        positions[i3 + 1] =
          Math.random() * (index === 0 ? 50 : 10) - (index === 0 ? 25 : 5);
        positions[i3 + 2] = Math.random() * 500 - 250;
      }
      geometry.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3),
      );
      const particleSystem = new THREE.Points(geometry, particleMaterial);
      scene.add(particleSystem);
    });

    let currentCameraPercentage = 0;

    const updateCameraPosition = (percentage: number) => {
      const p1 = path.getPointAt(percentage % 1);
      const p2 = path.getPointAt((percentage + 0.03) % 1);
      cameraGroup.position.set(p1.x, p1.y, p1.z);
      cameraGroup.lookAt(p2);
      light.position.set(p2.x, p2.y, p2.z);
    };

    const render = () => {
      updateCameraPosition(currentCameraPercentage);
      composer.render();
      requestAnimationFrame(render);
    };

    render();

    // GSAP animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollTargetRef.current,
        start: 'top top',
        end: 'bottom 100%',
        scrub: 5,
      },
    });

    tl.to(
      {},
      {
        duration: 10,
        onUpdate: function () {
          currentCameraPercentage = this.progress() * 0.96;
        },
      },
    );

    // Window resize handler
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Mouse move handler
    const handleMouseMove = (evt: MouseEvent) => {
      const cameraRotationProxyX = Mathutils.map(
        evt.clientX,
        0,
        window.innerWidth,
        3.24,
        3.04,
      );
      const cameraRotationProxyY = Mathutils.map(
        evt.clientY,
        0,
        window.innerHeight,
        -0.1,
        0.1,
      );
      gsap.to(camera.rotation, {
        y: cameraRotationProxyX,
        x: cameraRotationProxyY,
        duration: 0.5,
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className='experience fixed left-0 top-0 z-10 h-screen w-full'
      />
      <div
        ref={scrollTargetRef}
        className='scrollTarget absolute top-0 z-0 h-[1000vh] w-[100px]'
      />
      <div className="vignette-radial after:bg-radial-gradient-circle pointer-events-none fixed left-0 top-0 z-20 h-screen w-full after:absolute after:inset-0 after:from-transparent after:to-black after:opacity-60 after:content-['']" />
    </>
  );
};

export default SpaceTunnel;
