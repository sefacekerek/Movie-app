import "./App.css";
import AppBar from "./pages/AppBar";
import Login from "./pages/Login";
import MovieList from "./pages/MovieList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import PrivateRoute from "./utilities/PrivateRoute";

function App() {
 

  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/movies" element={<PrivateRoute/>}>
              <Route
                path="/movies"
                element={
                  <div>
                    <AppBar></AppBar>
                    <MovieList></MovieList>
                  </div>
                }
              />
            </Route>
            <Route
              path="/movies/:movieId"
              element={<MovieDetail></MovieDetail>}
            />
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
