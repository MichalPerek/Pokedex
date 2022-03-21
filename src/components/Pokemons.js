import Pokemon from "./Pokemon";

const Pokemons = ({ pokemons }) => {
  return (
    <div className="container__pokemonList">
      {pokemons.map((pokemon) => (
        <Pokemon
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.types[0].type.name}
          sprites={pokemon.sprites.front_default}
          weight={pokemon.weight}
          height={pokemon.height}
        ></Pokemon>
      ))}
    </div>
  );
};

export default Pokemons;
