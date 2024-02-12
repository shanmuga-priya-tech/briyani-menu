import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const briyaniData = [
  {
    name: "Dindugal Mutton Briyani",
    description:
      "Seeraga samba rice cooked with tender Mutton pieces in a firewood",
    price: 350,
    photoName: "briyani/dindugal.jfif",
    soldOut: false,
  },
  {
    name: "Dindugal Chicken Briyani",
    description:
      "Seeraga samba rice cooked with tender Chicken pieces in a firewood",
    price: 300,
    photoName: "briyani/dindugalchicken.jfif",
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
    photoName: "briyani/muttoncombo.jfif",
    soldOut: true,
  },
  {
    name: "Maharaja Chicken Briyani combo",
    description:
      "This combo includes authentic seeraga samba Chicken briyani,Raita,Chicken gravy and Gulab Jamun",
    price: 400,
    photoName: "briyani/combochicken.jfif",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Briyani Hut</h1>
    </header>
  );
}

function Menu() {
  const briyanis = briyaniData;
  const briyaniNum = briyanis.length;

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <>
        <p>
          Authentic Briyani Restaurant.Hand Picked dishes to choose from. Cooked
          with love to feed your Tastebuds.
        </p>
        {briyaniNum > 0 ? (
          <ul className="briyanis">
            {briyanis.map((briyani) => (
              <Briyani briyaniObj={briyani} key={briyani.name} />
            ))}
          </ul>
        ) : (
          <p>We're still working on our menu. Please come back later 😞</p>
        )}
      </>
    </div>
  );
}

function Briyani({ briyaniObj }) {
  return (
    <div className={`briyani ${briyaniObj.soldOut ? "sold-out" : ""}`}>
      <img src={briyaniObj.photoName} alt="briyani" />
      <div>
        <h3>{briyaniObj.name}</h3>
        <p>{briyaniObj.description}</p>
        <span>{briyaniObj.soldOut ? "SOLD OUT" : briyaniObj.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <OpeningHour closeHour={closeHour} />
      ) : (
        <p>
          Sorry! We're closed now. We will be available between {openHour}
          :00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function OpeningHour({ closeHour }) {
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
