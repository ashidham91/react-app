import Header from "./Header"
import Footer from "./Footer"
import Dashboard from "./Dashboard";

function Template() {

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
    <div style={appStyle}>
      <Header />
      <main style={mainStyle}>
       <Dashboard/>
      </main>
      <Footer />
    </div>
  );
}

export default Template;
