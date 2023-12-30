import React, { useState } from "react";
import Product from "./components/product";
import CategoryInfoDesktop from "./components/CategoryInfoDesktop";

const App = () => {

  const [categories, setCategories] = useState({
    "Farma rodiny Němcovy": false,
    "Bláhův dvůr": false,
    "Farmáři a výrobci": false,
    "Zvýhodněná nabídka": false,
    "Dříve zakoupeno": false,
    "Novinky": false,
    "BIO": false,
    "Počet vajec v balení": false,
    "Velké balení": false,
    // další kategorie...
  });

  const products = [
    {
      id: 1,
      name: "Produkt 1",
      price: "30 Kč",
      image: "url_obrázku_produktu_1",
      category: ["Farma rodiny Němcovy", "BIO"]
    },
    {
      id: 2,
      name: "Produkt 2",
      price: "40 Kč",
      image: "url_obrázku_produktu_2",
      category: ["Bezlepkový", "Bláhův dvůr"]
    },
  ]; // Define the 'products' variable with an appropriate value or fetch it from an API

  const filteredProducts = products.filter(product =>
    product.category.some(category => categories[category])
  );

  const handleCheckboxChange = (event) => {
    setCategories({
      ...categories,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <div className="App">
      <CategoryInfoDesktop />
      {Object.keys(categories).map(category => (
        <div key={category}>
          <input
            type="checkbox"
            id={category}
            name={category}
            checked={categories[category]}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={category}>{category}</label>
        </div>
      ))}
      {filteredProducts.map(product => <Product key={product.id} product={product} />)}
    </div>
  );
};

export default App;
