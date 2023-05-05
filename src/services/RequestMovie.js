import axios from "axios";

export const getAllMovies = () => {
  const response = axios.get(
    "https://api.themoviedb.org/3/movie/popular?api_key=7ad37ef33cea29b3283b6e8697e74da4&language=en-US&page=1"
  );
  return response;
};


export const createTokenRequest = async () => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/authentication/token/new?api_key=7ad37ef33cea29b3283b6e8697e74da4"
  )
  return response
}

export const authenticateUserRequest = async (username,password,request_token) => {
  const response = await axios.post(
    "https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=7ad37ef33cea29b3283b6e8697e74da4",{
      username,
      password,
      request_token
    }
    )
    return response
}
