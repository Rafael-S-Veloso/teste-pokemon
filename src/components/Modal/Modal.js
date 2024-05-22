import styles from "@/styles/Home.module.css";

const Modal = ({ isVisible, onClose, pokemonData }) => {
  if (!isVisible) return null;
  return (
    <div
      className={styles.modalBackdrop}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span onClick={onClose} aria-label="Close modal">
          X
        </span>
        {pokemonData ? (
          <div>
            <h2>{pokemonData.name}</h2>
            <div className={styles.boxImg}>
              <img
                src={pokemonData?.sprites?.front_default}
                alt={pokemonData.name}
              />
            </div>
            <p>Height: {pokemonData.height}</p>
            <p>Weight: {pokemonData.weight}</p>
            <p>Base Experience: {pokemonData.base_experience}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Modal;
