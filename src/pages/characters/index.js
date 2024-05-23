import { useState, useEffect } from "react";
import styles from "@/styles/Home2.module.css";
import Image from "next/image";
import Card from "./card";
import Modal from "@/components/Modal/Modal";
import ErrorMessage from "@/components/Error/Error";

export async function getStaticProps() {
  const maxPokemons = 151;
  const api = "https://pokeapi.co/api/v2/pokemon";
  const res = await fetch(`${api}?limit=${maxPokemons}`);
  const data = await res.json();

  const pokemons = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
  }));

  return {
    props: {
      pokemons,
    },
  };
}

export default function Home({ pokemons }) {
  const [search, setSearch] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [resposta, setResposta] = useState("");

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedPokemon(null);
  };

  const handleOpenModal = (pokemon) => {
    setSelectedPokemon(pokemon);
    setIsModalVisible(true);
  };

  useEffect(() => {
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPokemons(filtered);
  }, [search, pokemons]);

  const pokemonLegends = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    setResposta(data);
    setIsModalVisible(true);
  };

  return (
    <div className={styles.contant}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Poke<span>mons</span>
        </h1>
        <Image
          src="/image/POKEBOLA.png"
          width={75}
          height={75}
          alt="pokebola"
        />

        <input
          className={styles.input}
          placeholder="Buscar Pokemon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Buscar Pokemon"
        />
      </div>
      <div className={styles.pokemon_container}>
        {filteredPokemons.length > 0 ? (
          filteredPokemons.map((pokemon) => (
            <div
              className={styles.pokemonList}
              key={pokemon.id}
              onClick={() => pokemonLegends(pokemon.id)}
            >
              <Card pokemon={pokemon} />
            </div>
          ))
        ) : (
          <ErrorMessage message="Não existe o Pokémon procurado" />
        )}
      </div>
      {isModalVisible && (
        <Modal
          isVisible={isModalVisible}
          onClose={handleCloseModal}
          pokemonData={resposta}
        />
      )}
    </div>
  );
}
