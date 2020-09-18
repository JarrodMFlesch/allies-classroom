import React, { useState } from 'react';
import useSound from 'use-sound';


import './index.scss';

interface Image {
  src: string,
  alt: string,
}

interface RandomImageBlockProps {
  images: Image[],
}
const sound = 'http://localhost:3000/sounds/rise-climb-audio.mp3';

const baseClass = 'random-image-block';

export const RandomImageBlock: React.FC<RandomImageBlockProps> = (props) => {
  const { images } = props;
  
  const [play] = useSound(sound, { playbackRate: 0.75, volume: 1 });

  const [randomImage, setRandomImage] = useState<Image>(images[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const chooseRandomly = () => {
    play();
    setIsAnimating(true);

    setTimeout(() => {
      const randomIndex = Math.round(Math.random() * (images.length - 1));
      setRandomImage(images[randomIndex]);
      setIsAnimating(false);
    }, 5000);
  }

  return (
    <div className={baseClass}>
      <div className={`${baseClass}__image-container`}>
        {isAnimating && images.map((image, index) => {
          return <img key={image.src} className={`${baseClass}__image animating`} src={image.src} alt={image.src} data-image-index={index} />
        })}

        {!isAnimating && <img className={`${baseClass}__image current ${isAnimating ? 'animating' : ''}`} src={randomImage.src} alt={randomImage.src} />}
      </div>

      <button disabled={isAnimating} className={`${baseClass}__button`} type="button" onClick={chooseRandomly}>Go!</button>
    </div>
  )
}