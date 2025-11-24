import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./common/navbar/Navbar";
import CartProvider from "./store/CartProvider"
import { AuthProvider } from "./context/AuthContext";
import Footer from "./common/footer/Footer"
function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <main>
          <Navbar />
          <Outlet />
          <Footer />
        </main>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
