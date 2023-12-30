import React from "react";
import Product from "./components/product";
import CategoryInfoDesktop from "./components/CategoryInfoDesktop";

const App = () => {
  const products = [
    {
      id: 1,
      name: "Produkt 1",
      price: "30 Kč",
      image: "url_obrázku_produktu_1",
    },
    {
      id: 2,
      name: "Produkt 2",
      price: "40 Kč",
      image: "url_obrázku_produktu_2",
    },
    // další produkty...
  ];

  return (
    <div className="App">
      <CategoryInfoDesktop />
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default App;
