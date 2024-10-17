import React from "react";
import "./App.css";

const products = [
  { id: 1, name: "Cadbury Dairy Milk", price: "₱10", img: "/img/chocolate.jpg" },
  { id: 2, name: "Selecta icecream", price: "₱20", img: "/img/icecream.jpg" },
  { id: 3, name: "Alaska Evaporated", price: "₱30", img: "/img/alaska.jpg" },
  { id: 4, name: "Delmonte", price: "₱40", img: "/img/delmonte.jpg" }
];

export default function MainContent({ onAddToCart, searchQuery }) {
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="main-content">
      {filteredProducts.map(product => (
        <div key={product.id} className="product-box">
          <img src={product.img} alt={product.name} className="product-image" />
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button className="save-list-button" onClick={onAddToCart}>
              Save to List
            </button>
          </div>
        </div>
      ))}
    </main>
  );
}
