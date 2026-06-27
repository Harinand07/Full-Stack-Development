import "./About.css";

export default function About() {
    return (
        <div className="about-container">
            <div className="about-header">
                <h1>About Pokédex</h1>
                <p>Learn more about this amazing Pokémon exploration platform</p>
            </div>

            <div className="about-content">
                <section className="about-section">
                    <h2>What is Pokédex?</h2>
                    <p>
                        Pokédex is a comprehensive platform dedicated to exploring the world of Pokémon.
                        It provides detailed information about various Pokémon species, including their
                        stats, types, abilities, and characteristics. Whether you're a casual fan or a
                        serious trainer, our platform has everything you need.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to create an intuitive and informative platform where Pokémon
                        enthusiasts can discover, learn, and explore the vast Pokémon universe. We aim
                        to make Pokémon data accessible to everyone and inspire a new generation of fans.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Features</h2>
                    <div className="about-highlights">
                        <div className="about-highlight">
                            <div className="about-highlight-number">1000+</div>
                            <div className="about-highlight-text">Pokémon Covered</div>
                        </div>
                        <div className="about-highlight">
                            <div className="about-highlight-number">18</div>
                            <div className="about-highlight-text">Different Types</div>
                        </div>
                        <div className="about-highlight">
                            <div className="about-highlight-number">100%</div>
                            <div className="about-highlight-text">Free Access</div>
                        </div>
                    </div>
                </section>

                <section className="about-section">
                    <h2>Technology</h2>
                    <p>
                        Built with modern web technologies including React, JavaScript, and CSS.
                        Data is sourced from the official PokéAPI, ensuring accuracy and completeness.
                        Our platform is fully responsive and works seamlessly on all devices.
                    </p>
                </section>
            </div>
        </div>
    );
}