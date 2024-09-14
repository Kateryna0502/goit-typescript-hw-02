import  css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard.jsx";

const ImageGallery = ({ photos, openModal, setCurrentPhoto,  }) => {
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