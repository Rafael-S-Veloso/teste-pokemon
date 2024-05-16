import styles from "@/styles/home2.module.css";
import Image from "next/image";
import Card from "./card";

export async function getStaticProps() {
  const maxPokemons = 150;
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
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Poke<span>mons</span>
        </h1>
        <Image
          src="/images/logoPokebola.png"
          width={50}
          height={50}
          alt="pokebola"
        />
      </div>
      <div className={styles.pokemon_container}>
        <div className={styles.pokemonList}>
          {pokemons &&
            pokemons.map((pokemon) => (
              <Card key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
      </div>
    </>
  );
}
