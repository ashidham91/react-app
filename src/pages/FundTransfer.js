import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import API from "../api/API";
import axios from "axios";

function FundTransfer(){
 const [from_account,setFromAccount] = useState("");
 const [to_account,setToAccount] = useState("");
 const [amount,setAmount] = useState("");

 const handleTransfer = async () =>{
   try {
      const response = await API.post("http://localhost:8080/api/transaction", 
       
        {
          from_account: from_account,
          to_account: to_account,
          amount: amount
        }
      );

      console.log("Success:", response.data);

      // Save token
      //localStorage.setItem("token", response.data);
      alert("Transfer Successful");
      navigate("/transactions");
      
    } catch (error) {
      console.error("Transfer failed", error);
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
    <h2>Fund Transfer</h2>

    <input
      placeholder="From Account Number"
      onChange={(e)=>setFromAccount(e.target.value)}
    />
    <input
      placeholder="To Account Number"
      onChange={(e)=>setToAccount(e.target.value)}
    />
    <input
      placeholder="Amount"
      onChange={(e)=>setAmount(e.target.value)}
    />
  
    <button onClick={handleTransfer}>Transfer</button>
    </main>
    <Footer />
  </div>
 )
}

export default FundTransfer;