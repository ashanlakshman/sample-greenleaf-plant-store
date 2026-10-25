import { useState } from "react";
import "./App.css";

const plants = [
  {
    name: "Monstera Deliciosa",
    category: "INDOOR PLANTS",
    price: "Easy to care",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Peace Lily",
    category: "FLOWERING PLANTS",
    price: "Perfect for home",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Snake Plant",
    category: "INDOOR PLANTS",
    price: "Low maintenance",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2c4e?auto=format&fit=crop&w=700&q=85",
  },
];

const benefits = [
  {
    icon: "✿",
    title: "Naturally Beautiful",
    description:
      "Bring the calming beauty of nature into your everyday spaces with our carefully selected plants.",
  },
  {
    icon: "♧",
    title: "Easy Plant Care",
    description:
      "Discover plants for every lifestyle, with helpful guidance to keep your green friends thriving.",
  },
  {
    icon: "♡",
    title: "A Greener Tomorrow",
    description:
      "Make a conscious choice for a greener lifestyle and create a more nature-inspired home.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="website">
      {/* Navigation */}
      <header className="header">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            <span className="logo-icon">❧</span>
            <span>
              green<span className="logo-light">leaf</span>
              <small>GROW WITH NATURE</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>Our Story</a>
            <a href="#plants" onClick={closeMenu}>Plants</a>
            <a href="#benefits" onClick={closeMenu}>Why GreenLeaf</a>
            <a href="#contact" className="nav-cta" onClick={closeMenu}>
              Get in Touch <span>↗</span>
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              A LITTLE MORE GREEN, A LOT MORE LIFE
            </div>

            <h1>
              Let nature
              <br />
              find its way
              <br />
              <span>into your home.</span>
            </h1>

            <p className="hero-description">
              Thoughtfully selected plants to bring freshness, calm, and a
              little everyday magic into your space.
            </p>

            <div className="hero-actions">
              <a href="#plants" className="button button-primary">
                Discover Our Plants <span>↗</span>
              </a>
              <a href="#about" className="text-link">
                Our story <span>→</span>
              </a>
            </div>

            <div className="hero-note">
              <span className="note-icon">✳</span>
              <p>
                <strong>A greener kind of living</strong>
                <br />
                Small plants. Big happiness.
              </p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image">
              <img
                src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=90"
                alt="Beautiful green indoor plants in a sunlit home"
              />
            </div>

            <div className="image-badge">
              <span className="badge-leaf">✳</span>
              <span>
                GROW SLOW
                <br />
                <strong>LIVE WELL</strong>
              </span>
            </div>

            <div className="image-caption">
              <span>01 / 03</span>
              <span>Nature, closer to you.</span>
            </div>
          </div>

          <div className="hero-side-label">ROOTED IN NATURE · MADE FOR YOU</div>
        </section>

        {/* Intro strip */}
        <section className="intro-strip">
          <span>PLANTS THAT MAKE YOU FEEL AT HOME</span>
          <span className="strip-flower">✳</span>
          <span>GROW YOUR OWN LITTLE PARADISE</span>
          <span className="strip-flower">✳</span>
          <span>MAKE ROOM FOR GREEN</span>
        </section>

        {/* About Section */}
        <section className="about section-padding" id="about">
          <div className="about-visual">
            <img
              src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85"
              alt="Collection of potted plants in a bright natural setting"
              loading="lazy"
            />
            <div className="about-stamp">
              <span>GROW</span>
              <span className="stamp-leaf">✳</span>
              <span>HAPPY</span>
            </div>
          </div>

          <div className="about-content">
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              A LITTLE ABOUT US
            </div>

            <h2>
              Life feels
              <br />
              better with
              <br />
              <span>something green.</span>
            </h2>

            <p>
              At GreenLeaf, we believe every space deserves a little touch of
              nature. We help plant lovers, beginners, and growing families
              discover plants that make their surroundings feel more alive.
            </p>

            <p>
              Whether you're creating your first green corner or adding to
              your plant collection, we're here to help you grow with
              confidence.
            </p>

            <a href="#contact" className="button button-dark">
              Get to Know Us <span>↗</span>
            </a>

            <div className="about-signature">
              <span className="signature-icon">❧</span>
              Growing good things, naturally.
            </div>
          </div>
        </section>

        {/* Plants Section */}
        <section className="plants-section section-padding" id="plants">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line"></span>
                FIND YOUR GREEN
              </div>
              <h2>
                Meet your new
                <br />
                <span>leafy friends.</span>
              </h2>
            </div>

            <p>
              From leafy statement pieces to lovely little companions,
              discover plants that feel right at home with you.
            </p>
          </div>

          <div className="plant-grid">
            {plants.map((plant, index) => (
              <article className="plant-card" key={plant.name}>
                <a
                  href="#contact"
                  className="plant-image-link"
                  aria-label={`Ask us about ${plant.name}`}
                >
                  <div className="plant-image">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      loading="lazy"
                    />
                    <span className="plant-number">
                      0{index + 1}
                    </span>
                    <span className="plant-arrow">↗</span>
                  </div>
                </a>

                <div className="plant-details">
                  <span className="plant-category">{plant.category}</span>
                  <h3>{plant.name}</h3>
                  <p>{plant.price}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="plants-bottom">
            <p>Not sure which plant is right for you?</p>
            <a href="#contact" className="text-link">
              Let's find your plant <span>→</span>
            </a>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section section-padding" id="benefits">
          <div className="benefits-heading">
            <div className="eyebrow eyebrow-light">
              <span className="eyebrow-line"></span>
              THE GREENLEAF DIFFERENCE
            </div>

            <h2>
              Good for your space.
              <br />
              <span>Lovely for your life.</span>
            </h2>

            <p>
              More than a pretty plant. It's about creating spaces that help
              you slow down, breathe, and feel good.
            </p>
          </div>

          <div className="benefit-grid">
            {benefits.map((benefit, index) => (
              <article className="benefit-card" key={benefit.title}>
                <div className="benefit-top">
                  <span className="benefit-icon">{benefit.icon}</span>
                  <span className="benefit-number">0{index + 1}</span>
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
                <span className="benefit-line"></span>
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section section-padding" id="contact">
          <div className="contact-content">
            <div className="eyebrow">
              <span className="eyebrow-line"></span>
              LET'S TALK PLANTS
            </div>

            <h2>
              Ready to make
              <br />
              room for <span>green?</span>
            </h2>

            <p>
              Need help choosing a plant or want to learn more about GreenLeaf?
              We'd love to hear from you.
            </p>

            <a
              className="button button-primary"
              href="mailto:hello@greenleaf.example?subject=GreenLeaf%20Plant%20Enquiry"
            >
              Say Hello <span>↗</span>
            </a>
          </div>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">GET IN TOUCH</span>
              <a href="mailto:hello@greenleaf.example">
                hello@greenleaf.example
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-label">FOLLOW OUR JOURNEY</span>
              <div className="social-links">
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  Instagram ↗
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  Facebook ↗
                </a>
              </div>
            </div>

            <p className="contact-note">
              A little patience, a little sunlight, and a whole lot of love.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <a href="#home" className="logo footer-logo">
          <span className="logo-icon">❧</span>
          <span>
            green<span className="logo-light">leaf</span>
            <small>GROW WITH NATURE</small>
          </span>
        </a>

        <p>Grow something good. Every single day.</p>

        <a href="#home" className="back-to-top">
          BACK TO TOP ↑
        </a>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} GreenLeaf. All rights reserved.</span>
          <span>Made with care for a greener world. ✳</span>
        </div>
      </footer>
    </div>
  );
}

export default App;