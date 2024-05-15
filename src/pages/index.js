import { Search } from "@/assets/icon/Search";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleSearchButtonClick = () => {
    router.push("/characters");
  };
  return (
    <div className={styles.container}>
      <div className={styles.boxInput}>
        <input className={styles.input} placeholder="Buscar" />
        <Search />
      </div>
      <button className={styles.button} onClick={handleSearchButtonClick}>
        All Pokemons
      </button>
    </div>
  );
}
