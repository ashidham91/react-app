import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const transactions = [
 {id:1,type:"Credit",amount:2000},
 {id:2,type:"Debit",amount:500}
];




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

function TransactionHistory(){
const [users, setUsers] = useState([]);
const token = localStorage.getItem("token");
      //if(token){
        const decoded = jwtDecode(token);

        console.log(decoded);
        console.log("User ID:", decoded.userId);
        console.log("Username:", decoded.sub);
        console.log("Role:", decoded.role);
         
        //navigate("/template/"+decoded.userId+"/"+decoded.role);
      //}


  useEffect(() => {
    axios.get(`http://localhost:8080/user/transactionHistory/${decoded.userId}/${decoded.role}`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);


 return(
   <div style={appStyle}>
    <Header/>
    <main style={mainStyle}>
     <h2>Transaction History</h2>
     
      <table className="table">
          <tr>
              <th>Id</th>
              <th>Amount</th>
              <th>Date</th>
              <th>From Account</th>
              <th>To Account</th>
              <th>Status</th>
          </tr>

     
        
       {users.map((user) => (
        //<p key={user.id}>{user.id}{user.amount}{user.date}{user.from_account}{user.to_account}{user.status}</p>
        <tr>
              <td>{user.id}</td>
              <td>{user.amount}</td>
              <td>{user.date}</td>
              <td>{user.from_account}</td>
              <td>{user.to_account}</td>
              <td>{user.status}</td>
          </tr>
      ))}
        </table>
     </main>
     <Footer/>
   </div>
 )
}

export default TransactionHistory;