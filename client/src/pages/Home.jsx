import React, { useState } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

const products = [
  {
    id: 101,
    name: "Noise Cancelling Bluetooth Headphones",
    category: "Electronics",
    image: "https://cdn.boat-lifestyle.com/boat-425-headphones.jpg",
    description:
      "High-quality noise cancelling Bluetooth headphones with immersive sound and up to 20 hours battery life.",
    price: 149.99,
  },
  {
    id: 102,
    name: "Smart 43-inch LED TV",
    category: "Electronics",
    image: "https://images.mi.com/43-smart-tv.jpg",
    description:
      "Full HD Smart LED TV with built-in apps, sleek design, and HDMI ports.",
    price: 299.99,
  },
  {
    id: 103,
    name: "Wireless Bluetooth Speaker",
    category: "Electronics",
    image: "https://cdn.shutterstock.com/bluetooth-speaker.jpg",
    description: "Portable Bluetooth speaker with deep bass and splashproof design.",
    price: 79.99,
  },
  {
    id: 104,
    name: "Gaming Laptop RTX 3060",
    category: "Electronics",
    image:
      "https://i.dell.com/sites/imagecontent/products/publishingimages/g-series-15-5530-laptop/g-series-15-5530-laptop-gallery-504x350-ng.psd",
    description: "High-performance gaming laptop with RTX graphics and 16GB RAM.",
    price: 1299.99,
  },
  {
    id: 105,
    name: "Smartwatch Fitness Pro",
    category: "Electronics",
    image: "https://cdn.shutterstock.com/smartwatch.jpg",
    description:
      "Fitness tracking smartwatch with heart-rate monitor and waterproof design.",
    price: 199.99,
  },
  {
    id: 106,
    name: "4K Ultra HD Action Camera",
    category: "Electronics",
    image: "https://avaaa.in/product/amigo-ac-40-4k-sports-action-camera-black.jpg",
    description: "Compact action camera with 4K video recording and waterproof case.",
    price: 249.99,
  },
  {
    id: 107,
    name: "Noise Cancelling Earbuds",
    category: "Electronics",
    image: "https://cdn.shutterstock.com/bluetooth-headset.jpg",
    description: "In-ear wireless earbuds with active noise cancellation and mic.",
    price: 79.99,
  },
  {
    id: 108,
    name: "Wireless Keyboard and Mouse Combo",
    category: "Electronics",
    image:
      "https://store.lenovo.com/in/en/accessories-and-monitors/keyboards-mice/keyboard-mouse-combos/lenovo-essential-wireless-combo-keyboard.jpg",
    description: "Slim wireless keyboard with comfortable keys and optical mouse combo.",
    price: 49.99,
  },
  {
    id: 109,
    name: "Tablet 10-inch HD",
    category: "Electronics",
    image: "https://cdn.vecteezy.com/tablet-product.jpg",
    description: "10-inch tablet with 64GB storage, dual speakers, and HD display.",
    price: 299.99,
  },
  {
    id: 110,
    name: "Portable Power Bank 20000mAh",
    category: "Electronics",
    image: "https://cdn.dummyjson.com/product-images/Electronics/power-bank-20000mah.jpg",
    description: "Fast charging power bank with dual USB outputs and LED indicator.",
    price: 39.99,
  },
  {
    id: 201,
    name: "Professional Cricket Bat",
    category: "Sports",
    image: "https://m.media-amazon.com/images/I/81A9cpDslkL._AC_SL1500_.jpg",
    description:
      "High-quality English willow cricket bat used by professional players for excellent performance.",
    price: 199.99,
  },
  {
    id: 202,
    name: "Football - Official Size 5",
    category: "Sports",
    image: "https://m.media-amazon.com/images/I/71xTd6rTH9L._AC_SL1500_.jpg",
    description:
      "Durable and high-bounce football suitable for all weather conditions and official matches.",
    price: 29.99,
  },
  {
    id: 203,
    name: "Badminton Racquet - Lightweight",
    category: "Sports",
    image: "https://m.media-amazon.com/images/I/61B2SBsToLL._AC_SL1500_.jpg",
    description:
      "Lightweight and high-tension badminton racquet for improved shuttle control and faster swings.",
    price: 49.99,
  },
  {
    id: 204,
    name: "Tennis Balls - Pack of 3",
    category: "Sports",
    image: "https://m.media-amazon.com/images/I/51h8tkTAsRL._AC_SY450_.jpg",
    description:
      "Set of 3 pressurized tennis balls for all court types offering consistent bounce.",
    price: 12.99,
  },
  {
    id: 205,
    name: "Yoga Mat - Eco Friendly",
    category: "Sports",
    image: "https://m.media-amazon.com/images/I/71k1GzDdZZL._AC_SL1500_.jpg",
    description:
      "Non-slip, eco-friendly yoga mat that provides comfort and stability during workouts.",
    price: 39.99,
  },
  {
    id: 206,
    name: "Adjustable Dumbbells Set",
    category: "Sports",
    image: "https://m.media-amazon.com/images/I/812yxcuRAKL._AC_SL1500_.jpg",
    description:
      "Space-saving adjustable dumbbells for weight training and strength workouts at home.",
    price: 129.99,
  },
  {
    id: 207,
    name: "Running Shoes - Breathable",
    category: "Sports",
    image: "https://m.media-amazon.com/images/I/71Nf-DQMZzL._AC_SL1500_.jpg",
    description:
      "Lightweight and breathable running shoes designed for long distance comfort and support.",
    price: 89.99,
  },
  {
    id: 208,
    name: "Gym Gloves - Anti Slip",
    category: "Sports",
    image: "https://m.media-amazon.com/images/I/61TJApVxAoL._AC_SL1200_.jpg",
    description:
      "Durable gym gloves with anti-slip grip for better control and protection during weightlifting.",
    price: 19.99,
  },
  {
    id: 209,
    name: "Table Tennis Bat Set",
    category: "Sports",
    image: "https://m.media-amazon.com/images/I/61frqhoTrcL._AC_SL1500_.jpg",
    description:
      "High-quality table tennis bat set including 2 paddles and 3 balls, ideal for beginners and pros.",
    price: 24.99,
  },
  {
    id: 210,
    name: "Cycling Helmet - Lightweight",
    category: "Sports",
    image: "https://m.media-amazon.com/images/I/614H3-Gm62L._AC_SL1500_.jpg",
    description:
      "Safety-certified lightweight cycling helmet with excellent ventilation and adjustable fit.",
    price: 59.99,
  },
];

export default function Home() {
  const [category, setCategory] = useState("All");

  // Filter products based on category
  const filteredProducts =
    category === "All" ? products : products.filter((p) => p.category === category);

  const handleChange = (event, newValue) => {
    setCategory(newValue);
  };

  return (
    <>
      <AppBar position="static" color="default">
        <Tabs
          value={category}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="All" value="All" />
          <Tab label="Electronics" value="Electronics" />
          <Tab label="Sports" value="Sports" />
        </Tabs>
      </AppBar>

      <Container sx={{ paddingY: 4 }}>
        {category !== "All" && (
          <Typography variant="h4" gutterBottom>
            {category}
          </Typography>
        )}

        <Grid container spacing={4}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="150"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography color="text.secondary">${product.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" color="primary">
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
          {filteredProducts.length === 0 && (
            <Typography variant="h6" sx={{ padding: 4 }}>
              No products available.
            </Typography>
          )}
        </Grid>
      </Container>
    </>
  );
}
