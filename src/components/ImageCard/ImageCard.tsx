import { FC } from "react";
import css from "./ImageCard.module.css";
import { Modal } from "../ImageModal/ImageModal";

interface ImageCardProps {
  urls: {
    small: string;
    regular: string;
  };

  alt: string;
  likes: number;
  openModal: () => void;
  setCurrentPhoto: (url: string, alt: string) => void;
};

  

const ImageCard: FC<ImageCardProps> = ({ urls, alt, likes, openModal, setCurrentPhoto }) => {
    const handleClick = () => {
    setCurrentPhoto({ url: urls.regular, alt: alt });
     openModal();
      };

  return (
    <div onClick={handleClick} className={css.wrapper}>
      <img className={css.imageCard} src={urls.small} alt={alt} />
      <div className={css.descriptionWrapper}>
        <p>Likes: {likes}</p>
      </div>
    </div>
  );
};


export default ImageCard;