import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
    return (
        <div className="home-container">
            <div className="home-hero">
                <h1>Welcome to Pokédex</h1>
                <p>Explore the complete Pokémon world and discover fascinating creatures!</p>
                <Link to="/PokemonList" className="home-cta-button">
                    Start Exploring →
                </Link>
            </div>

            <div className="home-features">
                <div className="home-feature-card">
                    <div className="home-feature-icon">🔎</div>
                    <h3>Explore Pokémon</h3>
                    <p>Discover thousands of Pokémon with detailed information about each one.</p>
                </div>

                <div className="home-feature-card">
                    <div className="home-feature-icon">📊</div>
                    <h3>Detailed Stats</h3>
                    <p>View comprehensive stats, abilities, and characteristics of each Pokémon.</p>
                </div>

                <div className="home-feature-card">
                    <div className="home-feature-icon">⚡</div>
                    <h3>Type System</h3>
                    <p>Learn about different Pokémon types and their interactions.</p>
                </div>
            </div>
        </div>
    );
}