import { FC } from "react";
import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  children: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ children }) => {
  return (
    <div className={css.errorMessage}>
      <p>{children}</p>
    </div>
  );
};

export default ErrorMessage;