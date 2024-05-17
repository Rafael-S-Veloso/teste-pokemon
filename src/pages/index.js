import { useState } from "react";
import { Search } from "@/assets/icon/Search";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>Close</button>
        <p>Modal content goes here...</p>
      </div>
    </div>
  );
};

export default function Home() {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSearchButtonClick = () => {
    router.push("/characters");
  };

  const handleInputClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.boxInput}>
        <input
          className={styles.input}
          placeholder="Buscar"
          onClick={handleInputClick}
        />
        <Search />
      </div>
      <button className={styles.button} onClick={handleSearchButtonClick}>
        All Pokemons
      </button>
      <Modal isVisible={isModalVisible} onClose={handleCloseModal} />
    </div>
  );
}
