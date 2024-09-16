/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const ThreeJSImageCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Disable scroll function
    // const preventDefault = (e: WheelEvent) => {
    //   e.preventDefault();
    //   e.stopPropagation();
    // };
    // window.addEventListener('wheel', preventDefault, { passive: false });

    // Scenes
    const scene = new THREE.Scene();

    // Sizes
    let width = containerRef.current.offsetWidth;
    let height = containerRef.current.offsetHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7);

    // Create an array to hold the planes
    const planes: THREE.Mesh[] = [];
    const radius = 2; // Radius of the circle
    const numPlanes = 3; // Number of planes
    const angleIncrement = (2 * Math.PI) / numPlanes;

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    const textures = [
      textureLoader.load(
        `https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/creators.jpeg`,
      ),
      textureLoader.load(
        `https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/esports.jpg`,
      ),
      textureLoader.load(
        `https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/esummit.jpeg`,
      ),
      textureLoader.load(
        `https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/creators.jpeg`,
      ),
      textureLoader.load(
        `https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/events/esports.jpg`,
      ),
      textureLoader.load(
        `https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/esummit.jpeg`,
      ),
      textureLoader.load(
        `https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/mun.jpeg`,
      ),
      textureLoader.load(
        `https://hosteze-little-boy.s3.ap-south-1.amazonaws.com/assets/static/tenet/techfiesta.jpeg`,
      ),
    ];

    // Create and position the planes
    for (let i = 0; i < numPlanes; i++) {
      const geometry = new THREE.PlaneGeometry(1.6, 0.9);
      const material = new THREE.MeshBasicMaterial({
        map: textures[i],
        side: THREE.DoubleSide,
      });
      material.transparent = true;
      const plane = new THREE.Mesh(geometry, material);

      // Position planes in a horizontal circle
      const angle = i * angleIncrement;
      plane.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);

      // Rotate each plane to face outward
      plane.lookAt(0, 0, 0);

      // Add the plane to the scene and the array
      planes.push(plane);
    }

    // Create a group to contain all the planes
    const planeGroup = new THREE.Group();
    planes.forEach((plane) => planeGroup.add(plane));
    scene.add(planeGroup);

    // Mouse position
    let mouseX = 0;
    let mouseY = 0;

    // Update mouse position
    const updateMousePosition = (event: MouseEvent) => {
      mouseX = (event.clientX / width) * 2 - 1;
      mouseY = -(event.clientY / height) * 2 + 1;
    };
    window.addEventListener('mousemove', updateMousePosition);

    // Raycaster
    const raycaster = new THREE.Raycaster();

    // Animation
    const render = () => {
      requestAnimationFrame(render);

      // Adjust the tilt of the group based on the mouse position
      const tiltFactor = 0.1; // Adjust the tilt sensitivity
      planeGroup.rotation.x = mouseY * tiltFactor;
      planeGroup.rotation.z = -mouseX * tiltFactor;

      // Update the raycaster with the mouse position
      raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), camera);
      const intersects = raycaster.intersectObjects(planeGroup.children);

      // Change the cursor style and opacity if any plane is hovered
      if (intersects.length > 0) {
        document.body.classList.add('hovered');
        const hoveredPlane = intersects[0]?.object;
        planes.forEach((plane) => {
          if (plane === hoveredPlane) {
            gsap.to(plane.material as THREE.Material, {
              opacity: 1,
              duration: 0.5,
            });
          } else {
            gsap.to(plane.material as THREE.Material, {
              opacity: 0.5,
              duration: 0.5,
            });
          }
        });
      } else {
        document.body.classList.remove('hovered');
        planes.forEach((plane) => {
          gsap.to(plane.material as THREE.Material, {
            opacity: 1,
            duration: 0.5,
          });
        });
      }

      renderer.render(scene, camera);
    };
    render();

    // Handle smooth scrolling
    let targetRotation = planeGroup.rotation.y;

    // Mouse wheel event listener with GSAP animation
    const handleWheel = (event: WheelEvent) => {
      // Calculate the target rotation based on the wheel delta
      const delta = event.deltaY * 0.005;
      targetRotation += delta;

      // Animate the rotation smoothly
      gsap.to(planeGroup.rotation, {
        y: targetRotation,
        duration: 1,
        ease: 'power1.out',
      });
    };
    window.addEventListener('wheel', handleWheel);

    // Add click event listener
    const handleClick = () => {
      // Update the raycaster with the mouse position
      raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), camera);
      const intersects = raycaster.intersectObjects(planeGroup.children);

      if (intersects.length > 0) {
        const clickedPlane = intersects[0]?.object;

        // Get the world position of the clicked plane
        const clickedPlanePosition = new THREE.Vector3();
        clickedPlane?.getWorldPosition(clickedPlanePosition);

        // Calculate the angle of the clicked plane
        const angleToRotate = Math.atan2(
          clickedPlanePosition.z,
          clickedPlanePosition.x,
        );

        // Set the camera position to rotate around the center of the plane group
        gsap.to(camera.position, {
          x: Math.cos(angleToRotate) * camera.position.length(),
          z: Math.sin(angleToRotate) * camera.position.length(),
          duration: 1,
          onUpdate: () => {
            camera.lookAt(scene.position);
          },
        });
      }
    };
    window.addEventListener('click', handleClick);

    // Resize
    const resize = () => {
      if (!containerRef.current) return;
      width = containerRef.current.offsetWidth;
      height = containerRef.current.offsetHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };
    window.addEventListener('resize', resize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', resize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default ThreeJSImageCarousel;
