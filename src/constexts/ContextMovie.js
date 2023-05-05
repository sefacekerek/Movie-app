import { createContext } from "react";
import { useState } from "react";
import {getAllMovies} from "../services/RequestMovie"


const MovieContext = createContext();

function ContextProvider({ children }) {
    const [movies, setMovies] = useState([])

    const listMovies = async ()=>{
       const response = await getAllMovies();
       console.log(response.data.results)
       setMovies(response.data.results)
    }
   
   

    const sharedValueAndMethods = {
        listMovies ,
        movies
    };
  
    return <MovieContext.Provider value={sharedValueAndMethods}>{children}</MovieContext.Provider>;
  
  }
  export {ContextProvider}
  export default MovieContext