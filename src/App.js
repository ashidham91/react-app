import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import TransactionHistory from "./pages/TransactionHistory";
import FundTransfer from "./pages/FundTransfer";
import UserRole from "./pages/UserRole";
import ProtectedRoute from "./components/ProtectedRoute";
import Template from "./components/Template";
import Dashboard from './components/Dashboard';



function App() {

   

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/template/:userId/:role" element={<Template />} />
        <Route path="/transfer" element={<FundTransfer />} />
        <Route path="/transactions" element={<TransactionHistory />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route element={<ProtectedRoute />}>
          
          <Route path="/transactions" element={<TransactionHistory />} />
          <Route path="/transfer" element={<FundTransfer />} />
          <Route path="/roles" element={<UserRole />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
