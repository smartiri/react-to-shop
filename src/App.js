import "./App.css";
import Homepage from "./the_pages/Homepage";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Layout from "./the_pages/Layout";
import Details from "./the_pages/Details";
import { CartProvider } from "./the_context/CartContext";
import CartDetails from "./the_pages/CartDetails";
import { ThemeProvider } from "./the_context/ThemeContext";
function ProtectedRoute({ children }) {
  const location = useLocation();
  if (location.state == null) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider>
          <CartProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route
                  path="/details/:id"
                  element={
                    <ProtectedRoute>
                      <Details />
                    </ProtectedRoute>
                  }
                />
                <Route path="/checkout" element={<CartDetails />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Layout>
          </CartProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
