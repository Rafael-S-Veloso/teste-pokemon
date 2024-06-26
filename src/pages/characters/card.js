import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Card.module.css";

export default function Card({ pokemon }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.Card} onClick={handleOpenModal}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        width={150}
        height={100}
        alt={`Imagem do Pokémon ${pokemon.name}`}
      />

      <h3 className={styles.title}>{pokemon.name}</h3>
    </div>
  );
}
