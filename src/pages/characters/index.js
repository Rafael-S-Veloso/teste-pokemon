import { useState, useEffect } from "react";
import styles from "@/styles/Home2.module.css";
import Image from "next/image";
import Card from "./card";

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

  useEffect(() => {
    setFilteredPokemons(
      pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, pokemons]);

  return (
    <div className={styles.contant}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Poke<span>mons</span>
        </h1>
        <Image
          src="/image/POKEBOLA.png"
          width={60}
          height={60}
          alt="pokebola"
        />
        <div className={styles.boxInput2}>
          <input
            className={styles.input}
            placeholder="Buscar Pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Buscar Pokemon"
          />
        </div>
      </div>
      <div className={styles.pokemon_container}>
        {filteredPokemons.map((pokemon) => (
          <div className={styles.pokemonList} key={pokemon.id}>
            <Card pokemon={pokemon} />
          </div>
        ))}
      </div>
    </div>
  );
}
