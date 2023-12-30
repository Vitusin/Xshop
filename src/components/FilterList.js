import React, { useState } from 'react';

function FilterList({ categories, setCategories }) {
  const [showAll, setShowAll] = useState(false);

  const toggleCategory = (category) => {
    setCategories(prevCategories => ({
      ...prevCategories,
      [category]: !prevCategories[category]
    }));
  };

  const toggleShowAll = () => {
    setShowAll(prevShowAll => !prevShowAll);
  };

  const categoriesKeys = Object.keys(categories);
  const visibleCategories = showAll ? categoriesKeys : categoriesKeys.slice(0, 5);

  return (
    <div>
      {visibleCategories.map(category => (
        <div key={category}>
          <input
            type="checkbox"
            checked={categories[category]}
            onChange={() => toggleCategory(category)}
          />
          {category}
        </div>
      ))}
      {categoriesKeys.length > 5 && (
        <button onClick={toggleShowAll}>
          {showAll ? 'Méně filtrů' : 'Více filtrů'}
        </button>
      )}
    </div>
  );
}

export default FilterList;