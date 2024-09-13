import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

import "../styles/Form.css";

// eslint-disable-next-line react/prop-types
function Form({ route, method }) {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Sets form name based on method type
  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const requestData =
        method === "login"
          ? { email, password } // Login requires only email and password
          : { email, user_name: userName, password }; // Registration requires all fields

      const response = await api.post(route, requestData);

      if (method === "login") {
        const { access, refresh } = response.data;
        localStorage.setItem(ACCESS_TOKEN, access);
        localStorage.setItem(REFRESH_TOKEN, refresh);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="form-title">{name}</h2>

        {error && <div className="form-error">{error}</div>}

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
            placeholder="Enter your email"
          />
        </div>

        {method !== "login" && (
          <div className="form-group">
            <label htmlFor="user_name">Username</label>
            <input
              type="text"
              id="user_name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="form-input"
              placeholder="Enter your username"
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="form-submit-btn" disabled={loading}>
          {loading ? `${name}...` : name}
        </button>
      </form>
    </div>
  );
}

export default Form;
