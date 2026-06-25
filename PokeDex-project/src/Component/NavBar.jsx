import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import "./Navbar.css";

export default function NavBar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    
    const Links = [
        { Path: "/", title: "Home" },
        { Path: "/about", title: "About" },
        { Path: "/login", title: "Login" },
        { Path: "/PokemonList", title: "PokemonList" },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-brand">
                    <span>⚡</span> Pokédex
                </a>
                <ul className="navbar-links">
                    {Links.map(({ Path, title }) => (
                        <li key={title}>
                            <NavLink 
                                to={Path} 
                                className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <button 
                    onClick={toggleTheme}
                    className="navbar-theme-toggle"
                    title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                >
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
            </div>
        </nav>
    );
}