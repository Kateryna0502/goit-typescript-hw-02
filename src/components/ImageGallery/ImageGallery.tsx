import  css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard.js";
import { FC } from "react";

export interface Photos {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt: string;
  likes: number;
  description?: string;
};

interface ImageGalleryProps {
  photos: Photos[];
  openModal: () => void;
  setCurrentPhoto: (url: string) => void;
};

const ImageGallery: FC<ImageGalleryProps> = ({ photos, openModal, setCurrentPhoto  }) => {
  return (
    <ul className={css.photoList}>
      {Array.isArray(photos) &&
        photos.map(photo => {
          return (
            <li key={photo.id}>
              <ImageCard
                openModal={openModal}
                small={photo.urls.small}
                alt={photo.description}
                likes={photo.likes}
                description={photo.description}
                urls={photo.urls}
                setCurrentPhoto={setCurrentPhoto}
              />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;