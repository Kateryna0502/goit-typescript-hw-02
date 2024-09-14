import css from "./ImageCard.module.css";

const ImageCard = ({ urls, alt, likes, openModal, setCurrentPhoto }) => {
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