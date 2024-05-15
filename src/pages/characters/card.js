import image from "next/image";

export default function card({ pokemon }) {
  return (
    <div>
      <image
        src={`https://cdn.traction.one/pokemon/${pokemon.id}`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <h3>{pokemon.name}</h3>
    </div>
  );
}
