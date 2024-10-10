import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Mens.css";

const mensProducts = [
  {
    id: 1,
    image: "/images/Bottoms/image 1.jpg",
    name: "Jeans",
    price: 500,
    category: "bottoms",
  },
  {
    id: 2,
    image: "/images/Bottoms/image 2.jpg",
    name: "Jeans",
    price: 600,
    category: "bottoms",
  },
  {
    id: 3,
    image: "/images/Bottoms/image 3.webp",
    name: "Jeans",
    price: 700,
    category: "bottoms",
  },
  {
    id: 4,
    image: "/images/Bottoms/image 4.jpg",
    name: "Jeans",
    price: 600,
    category: "bottoms",
  },
  {
    id: 5,
    image: "/images/Bottoms/image 5.jpg",
    name: "Jeans",
    price: 600,
    category: "bottoms",
  },
  {
    id: 6,
    image: "/images/Bottoms/image 6.jpg",
    name: "Jeans",
    price: 600,
    category: "bottoms",
  },
  {
    id: 7,
    image: "/images/Bottoms/image 7.jpg",
    name: "Jeans",
    price: 600,
    category: "bottoms",
  },
];

const mensTops = [
  {
    id: 1,
    image: "/images/Tshirts/image 1.jpg",
    name: "Tshirt",
    price: 400,
    category: "tops",
  },
  {
    id: 2,
    image: "/images/Tshirts/image 2.jpg",
    name: "Tshirt",
    price: 500,
    category: "tops",
  },
  {
    id: 3,
    image: "/images/Tshirts/image 3.jpg",
    name: "Tshirt",
    price: 600,
    category: "tops",
  },
  {
    id: 4,
    image: "/images/Tshirts/image 4.jpg",
    name: "Tshirt",
    price: 800,
    category: "tops",
  },
  {
    id: 5,
    image: "/images/Tshirts/image 5.jpg",
    name: "Tshirt",
    price: 1200,
    category: "tops",
  },
  {
    id: 6,
    image: "/images/Tshirts/image 6.jpg",
    name: "Tshirt",
    price: 900,
    category: "tops",
  },
];

const mensAccessories = [
  {
    id: 1,
    image: "/images/Accessories/image 1.jpg",
    name: "Sunglass",
    price: 500,
    category: "accessories",
  },
  {
    id: 2,
    image: "/images/Accessories/image 2.webp",
    name: "Sunglass",
    price: 550,
    category: "accessories",
  },
  {
    id: 3,
    image: "/images/Accessories/image 3.jpg",
    name: "Sunglass",
    price: 600,
    category: "accessories",
  },
  {
    id: 4,
    image: "/images/Accessories/image 4.jpg",
    name: "Sunglass",
    price: 700,
    category: "accessories",
  },
  {
    id: 5,
    image: "/images/Accessories/image 5.webp",
    name: "Sunglass",
    price: 900,
    category: "accessories",
  },
];

const Mens = ({ category }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    category || "bottoms" || "Tops" || "Accessories"
  );

  useEffect(() => {
    setSelectedCategory(category);
  }, [category]);

  const filteredProducts = mensProducts.filter(
    (product) => product.category === selectedCategory
  );

  const filteredTops = mensTops.filter(
    (product) => product.category === selectedCategory
  );

  const filteredAccessories = mensAccessories.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className="mens-page">
      {!category && (
        <div className="background-container">
          <h2>Come on Guys, Let's Shop!</h2>
        </div>
      )}

      <div className="mens-section">
        <div className="card-container">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
          {filteredTops.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
          {filteredAccessories.map((product) => (
            <Card
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mens;
