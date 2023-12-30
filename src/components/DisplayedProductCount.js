import React from 'react';

function DisplayedProductCount({ products, categories }) {
  const countDisplayedProducts = () => {
    return products.filter(product => {
      for (let category in categories) {
        if (categories[category] && product.category.includes(category)) {
          return true;
        }
      }
      return false;
    }).length;
  };

  return (
    <div>
      Počet zobrazených produktů: {countDisplayedProducts()}
    </div>
  );
}

export default DisplayedProductCount;