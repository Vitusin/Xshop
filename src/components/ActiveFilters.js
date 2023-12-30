import React from 'react';

const ActiveFilters = ({ categories, setCategories }) => {
  const activeFilters = Object.keys(categories).filter(category => categories[category]);

  const removeFilter = (filterToRemove) => {
    setCategories({
      ...categories,
      [filterToRemove]: false
    });
  };

  const removeAllFilters = () => {
    const newCategories = {...categories};
    Object.keys(newCategories).forEach(category => {
      newCategories[category] = false;
    });
    setCategories(newCategories);
  };

  return (
    <div>
      {activeFilters.map(filter => (
        <div key={filter}>
          <span>{filter}</span>
          <button onClick={() => removeFilter(filter)}>Zrušit</button>
        </div>
      ))}
      {activeFilters.length > 0 && <button onClick={removeAllFilters}>Zrušit vše</button>}
    </div>
  );
};

export default ActiveFilters;