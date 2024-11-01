import { Grid2 } from "@mui/material";
import { useCart } from "../the_context/CartContext";
import { useTheme } from "../the_context/ThemeContext";
function Header() {
  const { cartItems } = useCart();
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="header">
      <Grid2 container spacing={2} columns={16}>
        <Grid2 size={8}>
          <a href="/">
            <img src="/sm-logo.jpg" alt="logo" width="50px" />
          </a>
        </Grid2>
        <Grid2 size={8}>
          <a href="/checkout" title="smart cart icons" target="blank">
            <div style={{ color: "white", float: "right", padding: "2%" }}>
              Cart Items: {cartItems.length}
            </div>
            <img
              src="/assets/shopping-cart.png"
              alt="logo"
              width="50px"
              style={{ float: "right" }}
            />
          </a>
          <a
            href="#"
            style={{ color: "white", cursor: "pointer" }}
            onClick={toggleTheme}
          >
            <img
              src={
                theme === "light" ? "/assets/moon.png" : "/assets/moon-dark.png"
              }
              alt="moon"
              width={"50"}
            />
          </a>
        </Grid2>
      </Grid2>
    </div>
  );
}

export default Header;
