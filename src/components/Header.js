import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header() {
  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "10px 20px",
  };

  const menuStyle = {
    display: "flex",
    gap: "15px",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove auth data
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to login page
    navigate("/");
  };

  return (
    <header style={headerStyle}>
      <div style={{ fontSize: "20px", fontWeight: "bold" }}>My Dashboard</div>
      <nav style={menuStyle}>
        <Link style={linkStyle} to="/template">Home</Link>
        <Link style={linkStyle} to="/transactions">Transaction History</Link>
        <Link style={linkStyle} to="/transfer">Fund Transfer</Link>
        <a style={linkStyle} onClick={handleLogout}>Logout</a>
      </nav>
    </header>
  );
}

export default Header;