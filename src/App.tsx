import { useState, useEffect, useMemo, FormEvent, FC } from "react";
import SearchBar from "./components/SearchBar/SearchBar.js";
import ImageGallery, { Photos } from "./components/ImageGallery/ImageGallery.js";
import ImageModal, { Modal } from "./components/ImageModal/ImageModal.js";
import Loader from "./components/Loader/Loader.js";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.js";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.js";
import requestPhotos, { RequestPhotos } from "./services/api.js";
import { Toaster } from 'react-hot-toast';



const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [photos, setPhotos] = useState<Photos[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [showBtn, setShowBtn] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentPhoto, setCurrentPhoto] = useState<Modal>({ url: '', alt: '' });
  

  useEffect(() => {
    async function fetchPhotos () {
      try {
        setError(false);
        setIsLoading(true);
        
        if (inputValue === null) return;
        const data = await requestPhotos(inputValue, currentPage);
        
        if (data.total_pages < currentPage) return;
        if (data.results.length === 0) {
          setError(true);
        } else {
          setPhotos(prev =>
            currentPage === 1 ? data.results : [...prev, ...data.results]
          );
          setTotalPages(data.total_pages);
        }
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPhotos();
  }, [inputValue, currentPage]);
      

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    
    const form = evt.currentTarget;
    const input = form.elements.namedItem('query') as HTMLInputElement;
    setPhotos([]);
    setCurrentPage(1);
    setShowBtn(false);
    setInputValue(input.value);
    form.reset();
  };

  
  const handleLoadMore = () => {
		setCurrentPage(currentPage + 1);
	};

  const isActive = useMemo(() => currentPage === totalPages, [currentPage, totalPages]);
  
  
  const openModal = () => {
    setModalIsOpen(true);
  }
  const closeModal = () => {
    setModalIsOpen(false);
  }

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [modalIsOpen]);

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {photos.length > 0 &&  (
        <ImageGallery
          photos={photos}
          setCurrentPhoto={setCurrentPhoto}
          openModal={openModal}
        />
      )}
        {totalPages < currentPage && (
        <p
          style={{
            color: 'red',
            margin: 'auto',
            width: '500px',
            display: 'flex',
            justifyContent: 'center',
          }} >
          За вашим запитом не знайдено більше фотографій </p>
      )}
      {Array.isArray(photos) && photos.length === 0 && (
        <p style={{ color: 'red', margin: 'auto', width: '500px' }}>
          За вашим запитом не знайдено фотографій, спробуйте ще раз
        </p>
      )}
      {isLoading && <Loader />}
      {Array.isArray(photos) && photos.length > 0 && !error && totalPages > currentPage && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} isActive={isActive} />
      )}
      
			{error && (
        <ErrorMessage>
          Whoops, something went wrong! Please try reloading this page!
        </ErrorMessage>
      )}
      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          currentPhoto={currentPhoto}
        />
      )}
    </div>
  );
};

export default App;





