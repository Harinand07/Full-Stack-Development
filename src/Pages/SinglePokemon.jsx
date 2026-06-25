import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./SinglePokemon.css";

export default function SinglePokemon() {
  const [pokemon, setPokemon] = useState({});
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(true);

  const { name } = useParams();
  const navigate = useNavigate();

  const getData = (url) => {
    return fetch(url).then((res) => res.json());
  };

  useEffect(() => {
    const fetchAndGetPokemonData = async () => {
      try {
        setLoading(true);
        const data = await getData(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(data);

        const speciesData = await getData(data.species.url);

        const entry = speciesData.flavor_text_entries.find(
          (item) => item.language.name === "en"
        );

        if (entry) {
          setDescription(
            entry.flavor_text.replace(/\f/g, " ").replace(/\n/g, " ")
          );
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndGetPokemonData();
  }, [name]);

  const handlePrevious = () => {
    if (pokemon.id && pokemon.id > 1) {
      navigate(`/pokemon/${pokemon.id - 1}`);
    }
  };

  const handleNext = () => {
    if (pokemon.id) {
      navigate(`/pokemon/${pokemon.id + 1}`);
    }
  };

  if (loading) {
    return (
      <div className="single-pokemon-container">
        <div className="loading">
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="single-pokemon-container">
      <div className="single-pokemon-header">
        <h1>🔍 Pokémon Details</h1>
        <hr />
      </div>

      <div className="pokemon-detail-card">
        <div className="pokemon-detail-top">
          <img
            src={pokemon?.sprites?.other?.["official-artwork"]?.front_default || pokemon?.sprites?.front_default}
            alt={pokemon?.name}
            className="pokemon-detail-image"
          />
        </div>

        <div className="pokemon-detail-info">
          <span className="pokemon-detail-id">#{pokemon.id}</span>
          <h2 className="pokemon-detail-name">{pokemon.name}</h2>

          <div className="pokemon-stats-grid">
            <div className="pokemon-stat-box">
              <div className="pokemon-stat-label">Height</div>
              <div className="pokemon-stat-value">{pokemon.height / 10} m</div>
            </div>

            <div className="pokemon-stat-box">
              <div className="pokemon-stat-label">Weight</div>
              <div className="pokemon-stat-value">{pokemon.weight / 10} kg</div>
            </div>

            <div className="pokemon-stat-box">
              <div className="pokemon-stat-label">Experience</div>
              <div className="pokemon-stat-value">{pokemon.base_experience}</div>
            </div>

            {pokemon.stats && pokemon.stats[0] && (
              <div className="pokemon-stat-box">
                <div className="pokemon-stat-label">Speed</div>
                <div className="pokemon-stat-value">{pokemon.stats[5]?.base_stat}</div>
              </div>
            )}
          </div>

          <div className="pokemon-detail-section">
            <h3 style={{ color: "var(--primary)", marginBottom: "1rem" }}>
              Types
            </h3>
            <div className="pokemon-types-list">
              {pokemon.types?.map((t) => (
                <span key={t.type.name} className="pokemon-type-badge">
                  {t.type.name}
                </span>
              ))}
            </div>
          </div>

          <div className="pokemon-description-section">
            <h3>About</h3>
            <p className="pokemon-description-text">{description || "No description available."}</p>
          </div>

          <div className="pokemon-navigation">
            <button
              onClick={handlePrevious}
              disabled={pokemon.id <= 1}
              className="pokemon-nav-button pokemon-nav-button-prev"
            >
              ← Previous
            </button>
            <button
              onClick={() => navigate('/PokemonList')}
              className="pokemon-nav-button pokemon-nav-button-back"
            >
              ← Back to List
            </button>
            <button
              onClick={handleNext}
              className="pokemon-nav-button pokemon-nav-button-next"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}