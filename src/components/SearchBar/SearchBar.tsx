import { FC, FormEvent, useState } from 'react';
import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { FaSearch } from 'react-icons/fa';

type SearchBarProps = {
  onSubmit: (evt: FormEvent<HTMLFormElement>) => void;
};
const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  const [notification, setNotification] = useState<boolean>(false);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const query = form.elements.namedItem('query') as HTMLInputElement;
    if (query.value.trim() === '') {
      setNotification(true);
    } else {
      setNotification(false);
      onSubmit(evt);
    }
  };

  const notify = () => {
    toast.dismiss();
    toast.error('Поле пошуку не може бути порожнім.');
  };
  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        
        <button className={css.btn} type="submit" onClick={notify}>
          <FaSearch className={css.searchIcon} />
        </button>
        <input
          className={css.input}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
      {notification && (
        <Toaster
          toastOptions={{
            position: 'top-right',
            style: {
              border: '1px solid #713200',
              padding: '16px',
              color: '#713200',
            },
          }}
        />
      )}
    </header>
  );
};
export default SearchBar;



