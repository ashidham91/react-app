import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import API from "../api/API";
import axios from "axios";
import { useParams } from "react-router-dom";

function AddAccount(){
 const [account_number,setAccountNumber] = useState("");
 const [balance,setBalance] = useState("");
 const [user_id,setUserId] = useState("");

 const [users, setUsers] = useState([]);

 const handleTransfer = async () =>{
   try {
      const response = await API.post("http://localhost:8080/api/account", 
       
        {
          account_number: account_number,
          balance: balance,
          user_id: user_id
          
        }
      );

      console.log("Success:", response.data);

      // Save token
      //localStorage.setItem("token", response.data);
      alert("Account added Successful");
      navigate("/transactions");
      
    } catch (error) {
      console.error("Failed to save", error);
      //alert("Transfer Failed");
    }

   
 }

 useEffect(() => {
    axios.get(`http://localhost:8080/api/user`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);


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
    <h2>Add Account Details</h2>

    <input
      placeholder="Enter Account Number"
      onChange={(e)=>setAccountNumber(e.target.value)}
    />
    <input
      placeholder="Enter Amount"
      onChange={(e)=>setBalance(e.target.value)}
    />

     <select value={user_id} onChange={(e) => setUserId(e.target.value)}>
        <option value="">-- Select a User --</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.username}
          </option>
        ))}
      </select>

      {user_id && <p>Selected User ID: {user_id}</p>}
    {/* <input
      placeholder="Select UserName"
      onChange={(e)=>setUserId(e.target.value)}
    /> */}
    {/* <input
      placeholder="Enter Role"
      onChange={(e)=>setRole(e.target.value)}
    />  */}
    
  {/* <select
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
      </select> */}
  
    <button onClick={handleTransfer}>Save</button>
    </main>
    <Footer />
  </div>
 )
}

export default AddAccount;