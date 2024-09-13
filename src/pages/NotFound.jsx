/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "../styles/Notfound.css"; // Create a CSS file for styles

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-text">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="not-found-home-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
