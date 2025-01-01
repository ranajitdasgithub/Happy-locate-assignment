// src/hooks/useInventoryManagement.js
import { useState } from "react";

const useInventoryManagement = () => {
  const [items, setItems] = useState([
    { name: "Washing Machine", category: "Electrical Appliances", count: 0 },
    { name: "Sofa Chair", category: "Furniture", count: 0 },
    { name: "Refrigerator", category: "Electrical Appliances", count: 0 },
    { name: "Bed", category: "Furniture", count: 0 },
    { name: "Smart TV", category: "Electronics", count: 0 },
    { name: "Sofa Set", category: "Furniture", count: 0 },
  ]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Electrical Appliances",
    "Furniture",
    "Electronics",
    "Kitchen",
    "Gardening",
  ];

  const handleAdd = (index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleRemove = (index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, count: Math.max(0, item.count - 1) } : item
      )
    );
  };

  const getCategoryCount = (category) => {
    return items.filter(
      (item) =>
        (category === "All" || item.category === category) &&
        item.name.toLowerCase().includes(search.toLowerCase())
    ).length;
  };

  const filteredItems = items.filter(
    (item) =>
      (activeCategory === "All" || item.category === activeCategory) &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return {
    items,
    setItems,
    search,
    setSearch,
    activeCategory,
    setActiveCategory,
    categories,
    handleAdd,
    handleRemove,
    getCategoryCount,
    filteredItems,
    handleSearchChange,
  };
};

export default useInventoryManagement;
