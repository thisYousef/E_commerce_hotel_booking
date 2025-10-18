import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./common/navbar/Navbar";
import CartProvider from "./store/CartProvider"
import { AuthProvider } from "./context/AuthContext";
function App() {

  return (
    <AuthProvider>
      <CartProvider>
        <main>
          <Navbar />
          <Outlet />
        </main>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
