import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Card.module.css";

export default function Card({ pokemon }) {
  console.log(pokemon, "<====");
  console.log(pokemon.id, "id");
  return (
    <div className={styles.Card}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        width={120}
        height={120}
        alt={pokemon.name}
      />
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`} passHref>
        <h1 className={styles.btn}>Detalhes</h1>
      </Link>
    </div>
  );
}
