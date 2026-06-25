import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
    const { login, logout, auth, user } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [passwordStrength, setPasswordStrength] = useState(0);
    const navigate = useNavigate();

    // Email validation regex
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Password strength checker
    const checkPasswordStrength = (pass) => {
        let strength = 0;
        if (pass.length >= 8) strength++;
        if (pass.length >= 12) strength++;
        if (/[a-z]/.test(pass)) strength++;
        if (/[A-Z]/.test(pass)) strength++;
        if (/\d/.test(pass)) strength++;
        if (/[@$!%*?&]/.test(pass)) strength++;
        return strength;
    };

    const handlePasswordChange = (e) => {
        const pass = e.target.value;
        setPassword(pass);
        setPasswordStrength(checkPasswordStrength(pass));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        // Email validation
        if (!email.trim()) {
            setError("Email is required");
            return;
        }

        if (!isValidEmail(email)) {
            setError("Please enter a valid email address (e.g., user@example.com)");
            return;
        }

        // Password validation
        if (!password.trim()) {
            setError("Password is required");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters");
            return;
        }

        if (!/[a-z]/.test(password)) {
            setError("Password must contain at least one lowercase letter");
            return;
        }

        if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one uppercase letter");
            return;
        }

        if (!/\d/.test(password)) {
            setError("Password must contain at least one number");
            return;
        }

        if (!/[@$!%*?&]/.test(password)) {
            setError("Password must contain at least one special character (@$!%*?&)");
            return;
        }

        // Login
        login({
            email: email,
            loginTime: new Date().toLocaleString(),
        });

        setEmail("");
        setPassword("");
        setPasswordStrength(0);

        // Redirect to home page
        setTimeout(() => {
            navigate("/");
        }, 500);
    };

    const handleLogout = () => {
        logout();
        setEmail("");
        setPassword("");
        setPasswordStrength(0);
    };

    const getPasswordStrengthLabel = () => {
        const labels = ["Very Weak", "Weak", "Fair", "Good", "Strong", "Very Strong"];
        return labels[passwordStrength] || "Very Weak";
    };

    const getPasswordStrengthColor = () => {
        const colors = ["#dc2626", "#f97316", "#eab308", "#84cc16", "#22c55e", "#16a34a"];
        return colors[passwordStrength] || "#dc2626";
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h1>🔐 Authentication</h1>
                    <p>Sign in to unlock exclusive features</p>
                </div>

                <div className={`login-status ${auth ? "authenticated" : ""}`}>
                    <div className="login-status-label">Current Status</div>
                    <div className="login-status-value">
                        {auth ? "✓ Authenticated" : "✕ Not Logged In"}
                    </div>
                </div>

                {!auth ? (
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email (e.g., user@example.com)"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-input"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={handlePasswordChange}
                                className="form-input"
                            />
                            
                            {password && (
                                <div className="password-strength-container">
                                    <div className="password-strength-bar">
                                        <div 
                                            className="password-strength-fill" 
                                            style={{
                                                width: `${(passwordStrength / 6) * 100}%`,
                                                backgroundColor: getPasswordStrengthColor()
                                            }}
                                        ></div>
                                    </div>
                                    <span 
                                        className="password-strength-text"
                                        style={{ color: getPasswordStrengthColor() }}
                                    >
                                        Strength: {getPasswordStrengthLabel()}
                                    </span>
                                </div>
                            )}

                            <div className="password-requirements">
                                <p className="requirements-title">Password must contain:</p>
                                <ul>
                                    <li className={password.length >= 8 ? "valid" : ""}>
                                        ✓ At least 8 characters
                                    </li>
                                    <li className={/[a-z]/.test(password) ? "valid" : ""}>
                                        ✓ One lowercase letter (a-z)
                                    </li>
                                    <li className={/[A-Z]/.test(password) ? "valid" : ""}>
                                        ✓ One uppercase letter (A-Z)
                                    </li>
                                    <li className={/\d/.test(password) ? "valid" : ""}>
                                        ✓ One number (0-9)
                                    </li>
                                    <li className={/@$!%*?&/.test(password) ? "valid" : ""}>
                                        ✓ One special character (@$!%*?&)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {error && <div className="login-error">{error}</div>}

                        <button type="submit" className="login-button login-button-primary">
                            🔓 Login
                        </button>
                    </form>
                ) : (
                    <div className="login-success">
                        <div className="success-icon">✓</div>
                        <h2>Welcome, {user?.email}!</h2>
                        <p>Logged in at: {user?.loginTime}</p>
                        <button
                            onClick={handleLogout}
                            className="login-button login-button-secondary"
                        >
                            🚪 Logout
                        </button>
                    </div>
                )}

                <div className="login-info">
                    <p>
                        {auth
                            ? "You are now logged in. Your session is saved locally and will persist even after refreshing the page."
                            : "Enter your credentials to access your personalized Pokédex experience."}
                    </p>
                </div>
            </div>
        </div>
    );
}