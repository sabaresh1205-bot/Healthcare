import { useState } from "react";
import "./Medical.css";

function Medical() {
  const medicines = [
  {
    id: 1,
    name: "Paracetamol",
    price: 30,
    image: "/images/medicine1.jpg",
    details: "Used for fever and mild pain relief"
  },
  {
    id: 2,
    name: "Cough Syrup",
    price: 120,
    image: "/images/medicine2.jpg",
    details: "Used for cough and throat irritation"
  },
  {
    id: 3,
    name: "Vitamin Tablset",
    price: 250,
    image: "/images/medicine3.jpg",
    details: "Helps improve general health"
  },
  {
    id: 4,
    name: "Antacid Tablets",
    price: 80,
    image: "/images/medicine4.jpg",
    details: "Used for acidity and indigestion"
  },
  {
    id: 5,
    name: "Pain Relief Spray",
    price: 180,
    image: "/images/medicine5.jpg",
    details: "Used for muscle pain and joint pain"
  },
  {
    id: 6,
    name: "Bandage Roll",
    price: 60,
    image: "/images/medicine6.jpg",
    details: "Used for wound dressing and first aid"
  },
  {
    id: 7,
    name: "Digital Thermometer",
    price: 199,
    image: "/images/medicine7.jpg",
    details: "Used to check body temperature"
  },
  {
    id: 8,
    name: "Hand Sanitizer",
    price: 90,
    image: "/images/medicine8.jpg",
    details: "Used to kill germs and keep hands clean"
  },
  {
    id: 9,
    name: "ORS Powder",
    price: 25,
    image: "/images/medicine9.jpg",
    details: "Used for dehydration and weakness"
  },
  {
    id: 10,
    name: "Multivitamin Syrup",
    price: 160,
    image: "/images/medicine10.jpg",
    details: "Helps support immunity and nutrition"
  },
  {
    id: 11,
    name: "Cold Relief Tablets",
    price: 70,
    image: "/images/medicine11.jpg",
    details: "Used for cold, sneezing, and blocked nose"
  },
  {
    id: 12,
    name: "Cotton Pack",
    price: 45,
    image: "/images/medicine12.jpg",
    details: "Used for cleaning wounds and first aid"
  }
];

  function addToCart(medicine) {
    const oldCart = JSON.parse(localStorage.getItem("cart")) || [];

    oldCart.push(medicine);

    localStorage.setItem("cart", JSON.stringify(oldCart));

    alert("Medicine added to cart");
  }

  return (
    <div className="medical-page">
      <h1>Medical Store</h1>
      <p>Buy medicines and healthcare products online.</p>

      <div className="medicine-grid">
        {medicines.map((medicine) => (
          <div className="medicine-card" key={medicine.id}>
            <img src={medicine.image} alt={medicine.name} />

            <h3>{medicine.name}</h3>
            <p>{medicine.details}</p>
            <h4>₹{medicine.price}</h4>

            <button onClick={() => addToCart(medicine)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Medical;