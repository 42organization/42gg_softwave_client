import Image from 'next/image';
import { useState } from 'react';
import styles from 'styles/PlayerImg.module.scss';
import fallBack from 'public/image/fallBackSrc.jpeg';

interface PlayerImgProps {
  src: string;
  size: number;
  styleName: string;
}

export default function PlayerImg({ src, size, styleName }: PlayerImgProps) {
  const [imgError, setImgError] = useState(false);
  const imgSrc = !src || imgError ? fallBack : src;
  return (
    <div className={styles[styleName]}>
      <div>
        <Image
          src={imgSrc}
          alt='prfImg'
          layout='fill'
          objectFit='cover'
          sizes={`${size}vw`}
          quality={`${size}`}
          unoptimized={imgError}
          onError={() => setImgError(true)}
        />
      </div>
    </div>
  );
}
