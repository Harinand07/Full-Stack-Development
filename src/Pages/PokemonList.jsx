import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PokemonList.css";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const limit = 10;

  const getData = (url) => {
    return fetch(url).then((res) => res.json());
  };

  useEffect(() => {
    const fetchAndGetPokemonData = async () => {
      try {
        setLoading(true);
        const data = await getData(
          `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`
        );
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndGetPokemonData();
  }, [offset]);

  const handlePrevious = () => {
    if (offset >= limit) {
      setOffset(offset - limit);
      window.scrollTo(0, 0);
    }
  };

  const handleNext = () => {
    setOffset(offset + limit);
    window.scrollTo(0, 0);
  };

  if (loading) {
    return (
      <div className="pokemon-list-container">
        <div className="pokemon-list-loading">
          <div className="pokemon-list-loading-spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="pokemon-list-container">
      <div className="pokemon-list-header">
        <h1>🔴 Pokémon Collection</h1>
        <p>Discover and explore amazing Pokémon</p>
        <p className="pokemon-list-page-info">
          Page {Math.floor(offset / limit) + 1} • Showing {offset + 1}-{offset + limit} Pokémon
        </p>
      </div>

      <div className="pokemon-grid">
        {pokemon.map((el, index) => (
          <div key={el.name} className="pokemon-card">
            <div className="pokemon-card-image-container">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  offset + index + 1
                }.png`}
                alt={el.name}
              />
            </div>
            <h3 className="pokemon-card-name">{el.name}</h3>
            <Link to={`/pokemon/${el.name}`} className="pokemon-card-link">
              View Details →
            </Link>
          </div>
        ))}
      </div>

      <div className="pokemon-pagination">
        <button
          onClick={handlePrevious}
          disabled={offset === 0}
          className="pokemon-pagination-button pokemon-pagination-prev"
        >
          ← Previous
        </button>
        <div className="pokemon-pagination-info">
          Page {Math.floor(offset / limit) + 1}
        </div>
        <button
          onClick={handleNext}
          className="pokemon-pagination-button pokemon-pagination-next"
        >
          Next →
        </button>
      </div>
    </div>
  );
}