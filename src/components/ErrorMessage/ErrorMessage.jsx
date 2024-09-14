import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ children }) => {
  return (
    <div className={css.errorMessage}>
      <p>{children}</p>
    </div>
  );
};

export default ErrorMessage;