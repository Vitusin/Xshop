import React from "react";

function SortProducts({ products, setProducts }) {
  const sortProducts = (method) => {
    let sortedProducts = [...products];
    if (method === "cheapest") {
      sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (method === "expensive") {
      sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else {
      // default sorting method
      sortedProducts.sort((a, b) => a.id - b.id);
    }
    setProducts(sortedProducts);
  };

  return (
    <div>
      <button onClick={() => sortProducts("recommended")}>Doporučené</button>
      <button onClick={() => sortProducts("cheapest")}>Od nejlevnějšího</button>
      <button onClick={() => sortProducts("expensive")}>Od nejdražšího</button>
    </div>
  );
}

export default SortProducts;
