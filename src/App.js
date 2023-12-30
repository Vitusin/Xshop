import React, { useState } from "react";
import Product from "./components/Product";
import CategoryInfoDesktop from "./components/CategoryInfoDesktop";
import ActiveFilters from "./components/ActiveFilters";

const App = () => {
  const [categories, setCategories] = useState({
    "Farma rodiny Němcovy": false,
    "Bláhův dvůr": false,
    "Farmáři a výrobci": false,
    "Zvýhodněná nabídka": false,
    "Dříve zakoupeno": false,
    Novinky: false,
    BIO: false,
    "Počet vajec v balení": false,
    "Velké balení": false,
    Bezlepkový: false,
    // další kategorie...
  });

  const toggleCategory = (category) => {
    setCategories((prevCategories) => ({
      ...prevCategories,
      [category]: !prevCategories[category],
    }));
  };

  const countProducts = (category) => {
    return products.filter((product) => product.category.includes(category))
      .length;
  };

  const products = [
    {
      id: 1,
      name: "Produkt 1",
      price: "30 Kč",
      image: "url_obrázku_produktu_1",
      category: [
        "Farma rodiny Němcovy",
        "BIO",
        "Velké balení",
        "Bláhův dvůr",
        "Novinky",
        "Zvýhodněná nabídka",
        "Dříve zakoupeno",
        "Farmáři a výrobci",
        "Počet vajec v balení",
        "Bezlepkový",
      ],
    },
    {
      id: 1,
      name: "Produkt 1",
      price: "30 Kč",
      image: "url_obrázku_produktu_1",
      category: [
        "Farma rodiny Němcovy",
        "BIO",
        "Velké balení",
        "Bláhův dvůr",
        "Novinky",
        "Zvýhodněná nabídka",
        "Dříve zakoupeno",
        "Farmáři a výrobci",
        "Počet vajec v balení",
        "Bezlepkový",
      ],
    },
    {
      id: 1,
      name: "Produkt 1",
      price: "30 Kč",
      image: "url_obrázku_produktu_1",
      category: [
        "Farma rodiny Němcovy",
        "BIO",
        "Velké balení",
        "Bláhův dvůr",
        "Novinky",
        "Zvýhodněná nabídka",
        "Dříve zakoupeno",
        "Farmáři a výrobci",
        "Počet vajec v balení",
        "Bezlepkový",
      ],
    },
    {
      id: 1,
      name: "Produkt 1",
      price: "30 Kč",
      image: "url_obrázku_produktu_1",
      category: [
        "Farma rodiny Němcovy",
        "BIO",
        "Velké balení",
        "Bláhův dvůr",
        "Novinky",
        "Zvýhodněná nabídka",
        "Dříve zakoupeno",
        "Farmáři a výrobci",
        "Počet vajec v balení",
        "Bezlepkový",
      ],
    },
    {
      id: 1,
      name: "Produkt 1",
      price: "30 Kč",
      image: "url_obrázku_produktu_1",
      category: [
        "Farma rodiny Němcovy",
        "BIO",
        "Velké balení",
        "Bláhův dvůr",
        "Novinky",
        "Zvýhodněná nabídka",
        "Dříve zakoupeno",
        "Farmáři a výrobci",
        "Počet vajec v balení",
        "Bezlepkový",
      ],
    },
    {
      id: 1,
      name: "Produkt 1",
      price: "30 Kč",
      image: "url_obrázku_produktu_1",
      category: [
        "Farma rodiny Němcovy",
        "BIO",
        "Velké balení",
        "Bláhův dvůr",
        "Novinky",
        "Zvýhodněná nabídka",
        "Dříve zakoupeno",
        "Farmáři a výrobci",
        "Počet vajec v balení",
        "Bezlepkový",
      ],
    },
    {
      id: 1,
      name: "Produkt 1",
      price: "30 Kč",
      image: "url_obrázku_produktu_1",
      category: [
        "Farma rodiny Němcovy",
        "BIO",
        "Velké balení",
        "Bláhův dvůr",
        "Novinky",
        "Zvýhodněná nabídka",
        "Dříve zakoupeno",
        "Farmáři a výrobci",
        "Počet vajec v balení",
        "Bezlepkový",
      ],
    },
    {
      id: 1,
      name: "Produkt 1",
      price: "30 Kč",
      image: "url_obrázku_produktu_1",
      category: [
        "Farma rodiny Němcovy",
        "BIO",
        "Velké balení",
        "Bláhův dvůr",
        "Novinky",
        "Zvýhodněná nabídka",
        "Dříve zakoupeno",
        "Farmáři a výrobci",
        "Počet vajec v balení",
        "Bezlepkový",
      ],
    },
    {
      id: 1,
      name: "Produkt 1",
      price: "30 Kč",
      image: "url_obrázku_produktu_1",
      category: [
        "Farma rodiny Němcovy",
        "BIO",
        "Velké balení",
        "Bláhův dvůr",
        "Novinky",
        "Zvýhodněná nabídka",
        "Dříve zakoupeno",
        "Farmáři a výrobci",
        "Počet vajec v balení",
        "Bezlepkový",
      ],
    },
    {
      id: 1,
      name: "Produkt 1",
      price: "30 Kč",
      image: "url_obrázku_produktu_1",
      category: [
        "Farma rodiny Němcovy",
        "BIO",
        "Velké balení",
        "Bláhův dvůr",
        "Novinky",
        "Zvýhodněná nabídka",
        "Dříve zakoupeno",
        "Farmáři a výrobci",
        "Počet vajec v balení",
        "Bezlepkový",
      ],
    },
    {
      id: 1,
      name: "Produkt 1",
      price: "30 Kč",
      image: "url_obrázku_produktu_1",
      category: [
        "Farma rodiny Němcovy",
        "BIO",
        "Velké balení",
        "Bláhův dvůr",
        "Novinky",
        "Zvýhodněná nabídka",
        "Dříve zakoupeno",
        "Farmáři a výrobci",
        "Počet vajec v balení",
        "Bezlepkový",
      ],
    },
    {
      id: 1,
      name: "Produkt 1",
      price: "30 Kč",
      image: "url_obrázku_produktu_1",
      category: [
        "Farma rodiny Němcovy",
        "BIO",
        "Velké balení",
        "Bláhův dvůr",
        "Novinky",
        "Zvýhodněná nabídka",
        "Dříve zakoupeno",
        "Farmáři a výrobci",
        "Počet vajec v balení",
        "Bezlepkový",
      ],
    },
    {
      id: 1,
      name: "Produkt 1",
      price: "30 Kč",
      image: "url_obrázku_produktu_1",
      category: [
        "Farma rodiny Němcovy",
        "BIO",
        "Velké balení",
        "Bláhův dvůr",
        "Novinky",
        "Zvýhodněná nabídka",
        "Dříve zakoupeno",
        "Farmáři a výrobci",
        "Počet vajec v balení",
        "Bezlepkový",
      ],
    },
    {
      id: 1,
      name: "Produkt 1",
      price: "30 Kč",
      image: "url_obrázku_produktu_1",
      category: [
        "Farma rodiny Němcovy",
        "BIO",
        "Velké balení",
        "Bláhův dvůr",
        "Novinky",
        "Zvýhodněná nabídka",
        "Dříve zakoupeno",
        "Farmáři a výrobci",
        "Počet vajec v balení",
        "Bezlepkový",
      ],
    },
    {
      id: 1,
      name: "Produkt 1",
      price: "30 Kč",
      image: "url_obrázku_produktu_1",
      category: [
        "Farma rodiny Němcovy",
        "BIO",
        "Velké balení",
        "Bláhův dvůr",
        "Novinky",
        "Zvýhodněná nabídka",
        "Dříve zakoupeno",
        "Farmáři a výrobci",
        "Počet vajec v balení",
        "Bezlepkový",
      ],
    },
    {
      id: 1,
      name: "Produkt 1",
      price: "30 Kč",
      image: "url_obrázku_produktu_1",
      category: [
        "Farma rodiny Němcovy",
        "BIO",
        "Velké balení",
        "Bláhův dvůr",
        "Novinky",
        "Zvýhodněná nabídka",
        "Dříve zakoupeno",
        "Farmáři a výrobci",
        "Počet vajec v balení",
        "Bezlepkový",
      ],
    },
  ]; // Define the 'products' variable with an appropriate value or fetch it from an API

  const filteredProducts = products.filter((product) =>
    product.category.some((category) => categories[category])
  );

  // Remove the unused handleCheckboxChange function

  return (
    <div className="App">
      <CategoryInfoDesktop />
      <ActiveFilters categories={categories} setCategories={setCategories} />
      {Object.keys(categories).map((category) => (
        <div key={category}>
          <input
            type="checkbox"
            checked={categories[category]}
            onChange={() => toggleCategory(category)}
          />
          <label>
            {category} ({countProducts(category)})
          </label>
        </div>
      ))}
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default App;
