import styles from "@/styles/home2.module.css";
import Image from "next/image";
import Card from "@/characters/Card.js"; // Corrigindo a importação do componente Card

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
        <h1 className={styles.title}>Pokemons</h1>
        <div className={styles.imageContainer}>
          <Image
            src="/images/logoPokebola.png"
            width="50"
            height="50"
            alt="pokebola"
          />
        </div>
      </div>

      <div className={styles.pokemonList}>
        {pokemons &&
          pokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} /> // Utilizando o componente Card corretamente
          ))}
      </div>
    </>
  );
}
