import { useState } from "react";

const Pokemon = ({ id, name, type, sprites, weight, height }) => {
  //useState hook to control additional data displayed

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
    <div onClick={displayMoreInfo}>
      <div>
        <img src={localPokemon.sprites} alt=""></img>
      </div>
      <div>
        <div>
          <h1>{localPokemon.id}</h1>
          <h1> {localPokemon.name}</h1>
        </div>

        <div>
          type: {localPokemon.type}
          {moreInfo && (
            <>
              <div>weight: {localPokemon.weight} lbs</div>
              <div>height: {localPokemon.height} in </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
