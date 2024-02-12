import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const briyaniData = [
  {
    name: "Dindugal Mutton Briyani",
    description:
      "Seeraga samba rice cooked with tender Mutton pieces in a firewood",
    price: 350,
    photoName: "briyani/dindugal.jpg",
    soldOut: false,
  },
  {
    name: "Dindugal Chicken Briyani",
    description:
      "Seeraga samba rice cooked with tender Chicken pieces in a firewood",
    price: 300,
    photoName: "briyani/dindugalchicken.jpg",
    soldOut: false,
  },
  {
    name: "Hyderabad Mutton Briyani",
    description: "Hand picked Basmati Rice and tender Meat cooked in DUM ",
    price: 350,
    photoName: "briyani/hyderabad.jpg",
    soldOut: false,
  },
  {
    name: "Hyderabad Chicken Briyani",
    description: "Hand picked Basmati Rice and tender Chicken cooked in DUM ",
    price: 250,
    photoName: "briyani/hyderabadChicken.jpg",
    soldOut: false,
  },
  {
    name: "Maharaja Mutton Briyani combo",
    description:
      "This combo includes authentic seeraga samba Mutton briyani,Raita,Chicken gravy and Gulab Jamun",
    price: 500,
    photoName: "briyani/muttoncombo.jpg",
    soldOut: true,
  },
  {
    name: "Maharaja Chicken Briyani combo",
    description:
      "This combo includes authentic seeraga samba Chicken briyani,Raita,Chicken gravy and Gulab Jamun",
    price: 400,
    photoName: "briyani/combochicken.jpg",
    soldOut: true,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      {/* <Footer /> */}
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Briyani Hut</h1>
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <Briyani />
    </div>
  );
}

function Briyani() {
  return (
    <div className="briyani">
      <img src="./briyani/dindugal.jfif" alt="briyani" />
      <h3>Dindugal</h3>
      <p>Seeraga samba rice cooked with tender Mutton pieces in a firewood</p>
      <span>350</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
