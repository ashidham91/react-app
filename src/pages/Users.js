import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import API from "../api/API";
import axios from "axios";
import { useParams } from "react-router-dom";

function Users(){
 const [username,setUsername] = useState("");
 const [password,setPassword] = useState("");
 const [email,setEmail] = useState("");
 const [role,setRole] = useState("");

 const roles = ["Admin", "User"];

 const handleTransfer = async () =>{
   try {
      const response = await API.post("http://localhost:8080/api/user", 
       
        {
          username: username,
          password: password,
          email: email,
          role: role
        }
      );

      console.log("Success:", response.data);

      // Save token
      //localStorage.setItem("token", response.data);
      alert("User added Successful");
      navigate("/transactions");
      
    } catch (error) {
      console.error("Failed to save", error);
      //alert("Transfer Failed");
    }

   
 }
const appStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  };

  const mainStyle = {
    flex: "1",
    padding: "20px",
    backgroundColor: "#f0f2f5",
  };


  
 return(
  
  <div style={appStyle}>
    <Header />
    <main style={mainStyle}>
    <h2>Add User</h2>

    <input
      placeholder="Enter Username"
      onChange={(e)=>setUsername(e.target.value)}
    />
    <input
      placeholder="Enter Password"
      onChange={(e)=>setPassword(e.target.value)}
    />
    <input
      placeholder="Enter email"
      onChange={(e)=>setEmail(e.target.value)}
    />
    {/* <input
      placeholder="Enter Role"
      onChange={(e)=>setRole(e.target.value)}
    />  */}
    
  <select
        id="role-select"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="">-- Select a role --</option>
        {roles.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>
  
    <button onClick={handleTransfer}>Save</button>
    </main>
    <Footer />
  </div>
 )
}

export default Users;