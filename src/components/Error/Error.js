// src/components/ErrorMessage.js
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.error}>
      <div>
        <img src="/image/ErrorPokemon.png" />
      </div>
      {message}
    </div>
  );
};

export default ErrorMessage;
