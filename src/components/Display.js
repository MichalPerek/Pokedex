import { useContext, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Pokemons from "./Pokemons";
import Footer from "./Footer";

const Display = () => {
  //useState hook to log error and message for that error
  const [Error, setError] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState("");

  //useState hook for storage of pokemon data
  const [pokemons, setPokemons] = useState([]);

  //useState hook for storage of next batch of 20 pokemons to load
  const [next, setNext] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  //First step of data fetch, result is an array of 20 pokemon objects
  const fetchDataStep1 = async () => {
    //Set initial value of error state to false
    setError(false);

    try {
      const res = await fetch(next);

      //Error handling on fetch freeze
      if (!res.ok) {
        console.log("Error, no data to load");
        setError(true);
      }

      const data = await res.json();

      //Set next batch of pokemons to load
      setNext(data.next);

      //Console log data from step 1: pokemon name and url with more info
      // console.log(data.results);

      //Second step of data fetch, now get detailed data for each pokemon

      const fetchDataStep2 = (pokemons) => {
        pokemons.forEach(async (pokemon) => {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          );

          const data = await res.json();
          console.log("Step 1:");
          console.log(pokemon);
          console.log("Step 2:");
          console.log(data);
          setPokemons((prevPokemons) => [...prevPokemons, data]);
        });
      };

      fetchDataStep2(data.results);
    } catch (err) {
      //Error handling
      setError(true);
      setErrorMsg("Can't load");
      console.log(ErrorMsg);
    }
  };

  //useEffect hook to display first batch of pokemons on page load
  useEffect(() => {
    fetchDataStep1();
  }, []);

  //Function for button to load more pokemons

  const loadMorePokemons = () => {
    fetchDataStep1();
  };

  //Function to handle button click
  const handleLoadMore = () => {
    console.log("button clicked");
    loadMorePokemons();
  };

  return (
    <div>
      <Navbar />
      <div className="container__main">
        <Pokemons pokemons={pokemons} />
        <Footer data={handleLoadMore} />
      </div>
    </div>
  );
};

export default Display;
