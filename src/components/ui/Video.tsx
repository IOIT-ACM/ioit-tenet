import React from 'react';
import { type VideoProps } from '@/types';

export const Video: React.FC<VideoProps> = ({
  src,
  type = 'video/mp4',
  width,
  height,
  controls = false,
  autoPlay = false,
  loop = false,
  muted = false,
  preload = 'none',
  playsInline = false,
  captions = [],
  iframe = false,
  onLoadedData,
  style = {},
}) => {
  if (iframe) {
    return (
      <iframe
        src={src}
        width={width}
        height={height}
        allowFullScreen
        style={{ border: 'none', width: '100%', height: '100%', ...style }}
        title='Embedded video'
      />
    );
  }

  return (
    <video
      width={width}
      height={height}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      preload={preload}
      playsInline={playsInline}
      onLoadedData={onLoadedData}
      style={{ width: '100vw', height: '100vh', objectFit: 'cover', ...style }}
    >
      <source src={src} type={type} />
      {captions.map((caption, index) => (
        <track
          key={index}
          src={caption.src}
          kind='subtitles'
          srcLang={caption.srcLang}
          label={caption.label}
        />
      ))}
      Your browser does not support the video tag.
    </video>
  );
};
