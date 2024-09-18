import  css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard.js";
import { FC } from "react";
import { Photos } from "../../services/api";



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
                urls={photo.urls}
                alt={photo.alt}
                likes={photo.likes}          
                
                setCurrentPhoto={setCurrentPhoto} 
              />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;