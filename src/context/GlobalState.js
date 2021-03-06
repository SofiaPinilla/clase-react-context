import React, { createContext, useReducer } from 'react';
import axios from 'axios'
import AppReducer from "./AppReducer";

//inicializamos el estado
const initialState = {
  characters: []
}

//creamos el contexto
export const GlobalContext = createContext(initialState);


//creamos el Provider Component
export const GlobalProvider = ({ children }) => {

    //Inicializamos el reducer
    const [state, dispatch] = useReducer(AppReducer, initialState);
  
    //Función que nos traé los personajes de ricky morty
    const getCharacters = async () => {
      const res = await axios.get("https://rickandmortyapi.com/api/character");

      //dispachamos la acción que hará que cambie el estado de los personajes
      dispatch({
        type: "GET_CHARACTERS",
        payload: res.data.results,
      });
    };
  
    return (
      <GlobalContext.Provider
      //pasamos los valores del provider
        value={{
          characters: state.characters,
          getCharacters,
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  };
  
