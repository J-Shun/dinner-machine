import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./Layout/Navbar/Navbar";
import Footer from "./Layout/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
