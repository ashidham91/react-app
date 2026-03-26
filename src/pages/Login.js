import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/API";


function Login() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  
  const login = async () => {

  try {
      const response = await API.post("/login",null, {
       params: {
    username: username,
    password: password,
  },
      });
    
      console.log("Token:", response.data);

      // Save token
      localStorage.setItem("token", response.data);
      navigate("/template");
    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed");
    }
  }
 // Inline CSS styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
    fontFamily: "Arial, sans-serif",
  };

  const cardStyle = {
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    width: "300px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const errorStyle = {
    color: "red",
    marginTop: "10px",
    textAlign: "center",
  };

  return (
   
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <input
          style={inputStyle}
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          style={inputStyle}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button style={buttonStyle} onClick={login}>
          Login
        </button>
        
      </div>
    </div>


  )
}

export default Login;