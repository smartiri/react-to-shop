import {
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
  Typography,
  TextField,
  Box,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../the_context/CartContext";

const Cards = ({ id, name, image, price, description = "" }) => {
  const [quantity, setQuantity] = useState(1);
  const { cartItems, addToCart } = useCart();

  const navigate = useNavigate();

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (isNaN(value)) {
      setQuantity(1); // Reset to 1 if input is not a number
    } else {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    addToCart(
      {
        id: id,
        name: name,
        image: image,
        price: price,
        description: description,
      },
      quantity
    );
    console.log(cartItems);
  };
  const handleDetails = () => {
    navigate(`/details/${id}`, {
      state: {
        name: name,
        image: image,
        price: price,
        description: description,
      },
    });
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        width="300"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ color: "green" }}
        >
          {price}€
        </Typography>
        <Typography style={{ display: "flex", justifyContent: "center" }}>
          <Box display="flex" alignItems="center" gap={1}>
            <Button
              variant="contained"
              onClick={handleDecrease}
              style={{ backgroundColor: "#3f4c6b" }}
            >
              -
            </Button>
            <TextField
              type="tel"
              value={quantity}
              onChange={handleChange}
              sx={{ width: 50, height: 60 }}
              style={{ border: "none" }}
            />
            <Button
              variant="contained"
              onClick={handleIncrease}
              style={{ backgroundColor: "#3f4c6b" }}
            >
              +
            </Button>
          </Box>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          style={{ color: "#3f4c6b" }}
          onClick={() => handleDetails()}
        >
          Show Details
        </Button>
        <Button
          size="small"
          style={{ color: "#3f4c6b" }}
          onClick={handleAddToCart}
        >
          Add To Card
        </Button>
      </CardActions>
    </Card>
  );
};

export default Cards;
