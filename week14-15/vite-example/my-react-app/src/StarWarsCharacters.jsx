import { useState, useEffect } from "react";

function StarwarsCharacters() {
  // state setup first

  const [characters, setCharacters] = useState([]);

  // useEffect

  useEffect(() => {
    // double call on load
    // https://react.dev/reference/react/useEffect#my-effect-runs-twice-when-the-component-mounts
    async function getCharacters() {
      try {
        const response = await fetch("https://www.swapi.tech/api/people");
        const data = await response.json();
        console.log("data", data);
        //set characters
        setCharacters(data.results);
        console.log(characters);
        // handle errors
      } catch (err) {
        console.log("something went horribly wrong", err);
      } finally {
        console.log("done");
      }
    }

    //cleanup logic can be helpful and is often necessary to have
    //react.dev/reference/react/useEffect#updating-state-based-on-previous-state-from-an-effect

    https: getCharacters();
  }, []);

  return characters.map((character) => (
    <p key={character.uid}>{character.name}</p>
  ));
}

export default StarwarsCharacters;
