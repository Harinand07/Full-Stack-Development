import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
    return (
        <div className="not-found-container">
            <div className="not-found-card">
                <div className="not-found-icon">🤨</div>
                <div className="not-found-code">404</div>
                <h1 className="not-found-title">Page Not Found</h1>
                <p className="not-found-description">
                    Oops! It seems you've encountered a wild Missingno.
                    The page you're looking for doesn't exist.
                </p>
                <Link to="/" className="not-found-button">
                    Return Home
                </Link>
            </div>
        </div>
    );
}