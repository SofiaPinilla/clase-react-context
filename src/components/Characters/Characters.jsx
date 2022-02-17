import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import './Characters.css'
const Characters = () => {
  const { characters, getCharacters } = useContext(GlobalContext);
  useEffect(() => {
    getCharacters();
  }, []);
  const character = characters.map((character) => {
    return (
      <div className="character" key={character.id}>
        <h1>{character.name}</h1>
        <img src={character.image} />
      </div>
    );
  });
  return <div className="characters">{character}</div>;
};

export default Characters;