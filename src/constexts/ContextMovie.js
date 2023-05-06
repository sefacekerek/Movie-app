import { createContext } from "react";
import { useState } from "react";
import {getAllMovies,searchMovieRequest} from "../services/RequestMovie"


const MovieContext = createContext();

function ContextProvider({ children }) {
    const [movies, setMovies] = useState([])

    const listMovies = async ()=>{
       const response = await getAllMovies();
       setMovies(response.data.results)
    }
   
   const searchMovie = async (query)=>{
    const response = await searchMovieRequest(query);
    setMovies(response.data.results)
   }

    const sharedValueAndMethods = {
        listMovies ,
        movies,
        searchMovie
    };
  
    return <MovieContext.Provider value={sharedValueAndMethods}>{children}</MovieContext.Provider>;
  
  }
  export {ContextProvider}
  export default MovieContext