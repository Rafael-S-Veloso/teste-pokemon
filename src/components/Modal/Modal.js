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
          <div className={styles.info}>
            <h2>{pokemonData.name}</h2>
            <div className={styles.boxImg}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonData.id}.svg`}
                alt={pokemonData.name}
                width={"230px"}
                height={"200px"}
              />

              <div className={styles.status}>
                <p>Height: {pokemonData.height}</p>
                <p>Weight: {pokemonData.weight}</p>
                <p>Base Experience: {pokemonData.base_experience}</p>
                <p>HP: {pokemonData.stats[0].base_stat}</p>
                <p>Ataque: {pokemonData.stats[1].base_stat}</p>
                <p>Defesa: {pokemonData.stats[2].base_stat}</p>
                <p>Velocidade: {pokemonData.stats[5].base_stat}</p>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Modal;
