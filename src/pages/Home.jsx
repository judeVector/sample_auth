import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <nav className="home-nav">
          <div className="home-logo">MyApp</div>
          <div className="home-links">
            <Link to="/" className="home-link">
              Home
            </Link>
            <Link to="/about" className="home-link">
              About
            </Link>
            <Link to="/contact" className="home-link">
              Contact
            </Link>
            <Link to="/login" className="home-link login-btn">
              Login
            </Link>
          </div>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to MyApp</h1>
          <p>AI-powered solutions to automate your workflow and boost productivity.</p>
          <Link to="/signup" className="hero-btn">
            Get Started
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>AI Automation</h3>
            <p>Seamless automation tools built to save you time and effort.</p>
          </div>
          <div className="feature-card">
            <h3>Analytics</h3>
            <p>Track and analyze data in real-time to make data-driven decisions.</p>
          </div>
          <div className="feature-card">
            <h3>Support</h3>
            <p>We provide 24/7 support to ensure you’re always taken care of.</p>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
