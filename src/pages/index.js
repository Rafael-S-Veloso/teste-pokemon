import { useState } from "react";
import { Search } from "@/assets/icon/Search";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Modal from "@/components/Modal/Modal";

export default function Home() {
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchButtonClick = () => {
    router.push("/characters");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = async () => {
    if (inputValue.trim() !== "") {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${inputValue.toLowerCase()}`
        );
        if (!response.ok) {
          throw new Error("Pokémon not found");
        }
        const data = await response.json();
        setPokemonData(data);
        setIsModalVisible(true);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        alert("Pokémon not found. Please try again.");
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("Please enter a Pokémon name or ID.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setPokemonData(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.boxInput}>
        <input
          className={styles.input}
          placeholder="Buscar"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          aria-label="Buscar"
        />
        <button
          className={styles.searchButton}
          onClick={handleSearchClick}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : <Search />}
        </button>
      </div>
      <button className={styles.button} onClick={handleSearchButtonClick}>
        All Pokemons
      </button>
      <Modal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        pokemonData={pokemonData}
      />
    </div>
  );
}
