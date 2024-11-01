import { Button } from "@mui/material";
import { useCart } from "../the_context/CartContext";
import "../App.css";
import { useState } from "react";
import { useTheme } from "../the_context/ThemeContext";
const CartDetails = () => {
  const { cartItems, updateQuantity, removeItem, clearCart } = useCart();
  const [completeCheckout, setCompleteCheckout] = useState(false);
  const { theme } = useTheme();
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = () => {
    localStorage.clear();
    clearCart();
    setCompleteCheckout(true);
  };
  return (
    <div
      style={{ textAlign: "center", margin: "5%" }}
      className={theme === "dark" ? "dark-theme" : ""}
    >
      <div className="cart-summary">
        {cartItems.length !== 0 &&
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} width="200" alt={item.name} />
              <p>{item.name}</p>
              <p>Price: ${item.price}</p>
              <p>
                Quantity:
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, Number(e.target.value))
                  }
                  min="1"
                />
              </p>
              <Button
                size="small"
                style={{ backgroundColor: "#3f4c6b" }}
                variant="contained"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </Button>
            </div>
          ))}
        <br />
        <br />
        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
        {cartItems.length !== 0 && (
          <Button
            size="small"
            style={{ backgroundColor: "#3f4c6b" }}
            variant="contained"
            onClick={() => handleChange()}
          >
            Checkout
          </Button>
        )}
        {completeCheckout && (
          <p style={{ textAlign: "center" }}>
            THANK YOU FOR PURCHASING ON OUR HUMBLE STORE
          </p>
        )}
      </div>
    </div>
  );
};

export default CartDetails;
