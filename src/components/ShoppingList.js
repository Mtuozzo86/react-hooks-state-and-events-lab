import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleChange(event) {
    setSelectedCategory(event.target.value);
  }

  const filteredCategory = items.filter((category) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return selectedCategory === category.category;
    }
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
