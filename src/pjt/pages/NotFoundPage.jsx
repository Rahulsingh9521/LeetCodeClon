import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/login" style={{ textDecoration: "none", color: "#007BFF" }}>
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
