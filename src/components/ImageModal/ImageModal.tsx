
import css from "./ImageModal.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    width: '60%',
    height: '90%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

const ImageModal = ({ modalIsOpen, closeModal, currentPhoto }) => {
  return (
    <Modal
      style={customStyles}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={true}
    >
      <img
        className={css.photo}
        src={currentPhoto.url}
        alt={currentPhoto.alt}
      />
    </Modal>
  );
};

export default ImageModal;



