import { useState } from "react";

const Pokemon = ({ id, name, type, sprites, weight, height }) => {
  //useState hook to control displayed data

  const [moreInfo, setMoreInfo] = useState(false);

  //Function to display more info on click - click can be anywhere on the pokemon card

  const displayMoreInfo = () => {
    setMoreInfo(!moreInfo);
  };

  //Object to store passed props
  const localPokemon = {
    id: id,
    name: name,
    type: type,
    sprites: sprites,
    weight: weight,
    height: height,
  };

  return (
    <div className="pokemonCard" onClick={displayMoreInfo}>
      <div className="pokemonCard__content">
        <img
          className="pokemonCard__content--img"
          src={localPokemon.sprites}
          alt=""
        ></img>

        <div>
          <div className="pokemonCard__content--title">
            <h1>ID: {localPokemon.id}</h1>
            <h1> {localPokemon.name.toUpperCase()}</h1>
          </div>

          <div className="pokemonCard__content--info">
            <b>type:</b> {localPokemon.type}
            {moreInfo && (
              <>
                <div>
                  {" "}
                  <b>weight:</b> {localPokemon.weight} lbs
                </div>
                <div>
                  {" "}
                  <b>height: </b>
                  {localPokemon.height} in{" "}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
