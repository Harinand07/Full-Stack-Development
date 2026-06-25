import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import PokemonList from "../Pages/PokemonList";
import SinglePokemon from "../Pages/SinglePokemon";
import NotFound from "../Pages/NotFound";
import PrivateRoute from "./PrivateRoute";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/PokemonList"
        element={
          <PrivateRoute>
            <PokemonList />
          </PrivateRoute>
        }
      />
      <Route
        path="/pokemon/:name"
        element={
          <PrivateRoute>
            <SinglePokemon />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}