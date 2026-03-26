import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";


function Dashboard() {

const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/user/accounts")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);



  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  };

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

  return (
    
    
    <div style={containerStyle}>
      <table className="table">
          <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Account Number</th>
              <th>Balance</th>
          </tr>

     
        
       {users.map((user) => (
        //<p key={user.id}>{user.id}{user.amount}{user.date}{user.from_account}{user.to_account}{user.status}</p>
        <tr>
              <td>{user.user_id}</td>
              <td>{user.userName}</td>
              <td>{user.account_number}</td>
              <td>{user.balance}</td>
              
          </tr>
      ))}
        </table>

    </div>
        
  );
}

export default Dashboard;