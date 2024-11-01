import "../App.css";
import Cards from "./Cards";
import { Grid2 } from "@mui/material";
const products = [
  {
    id: 1,
    name: "Wireless Earbuds",
    imageSrc: "/assets/wireless-earbuds.jpg",
    description:
      "Compact and high-quality earbuds with noise cancellation and long battery life.",
    price: 49.99,
  },
  {
    id: 2,
    name: "Smartphone Stand",
    imageSrc: "/assets/smartphone-stand.webp",
    description:
      "Adjustable smartphone stand, perfect for hands-free viewing and video calls.",
    price: 12.99,
  },
  {
    id: 3,
    name: "Laptop Sleeve",
    imageSrc: "/assets/laptop-sleeve.webp",
    description:
      "Protective laptop sleeve made of waterproof and shockproof materials.",
    price: 24.99,
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    imageSrc: "/assets/bluetooth-speaker.jpg",
    description:
      "Portable Bluetooth speaker with high-quality sound and long battery life.",
    price: 39.99,
  },
  {
    id: 5,
    name: "Gaming Mouse",
    imageSrc: "/assets/logitech-g502.webp",
    description:
      "High-precision gaming mouse with customizable buttons and RGB lighting.",
    price: 29.99,
  },
  {
    id: 6,
    name: "Smartwatch",
    imageSrc: "/assets/luxurysmart.webp",
    description:
      "Stylish smartwatch with fitness tracking, notifications, and more.",
    price: 89.99,
  },
  {
    id: 7,
    name: "Portable Charger",
    imageSrc: "/assets/portable-charger.jpg",
    description:
      "Fast-charging portable charger, compatible with multiple devices.",
    price: 19.99,
  },
  {
    id: 8,
    name: "Water Bottle",
    imageSrc: "/assets/water-bottle.webp",
    description:
      "Eco-friendly, BPA-free water bottle with a leak-proof design.",
    price: 14.99,
  },
  {
    id: 9,
    name: "LED Desk Lamp",
    imageSrc: "/assets/desk-lamp.jpg",
    description:
      "Adjustable LED desk lamp with touch controls and multiple brightness levels.",
    price: 34.99,
  },
  {
    id: 10,
    name: "Fitness Tracker",
    imageSrc: "/assets/fitness-tracker.webp",
    description:
      "Fitness tracker with heart rate monitoring, step counter, and sleep tracking.",
    price: 59.99,
  },
];
function Homepage() {
  return (
    <div className="App">
      <div className="container">
        <Grid2
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((product) => {
            return (
              <Cards
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.imageSrc}
                price={product.price}
                description={product.description}
              />
            );
          })}
        </Grid2>
      </div>
    </div>
  );
}

export default Homepage;
