import { useState, useCallback, useMemo } from "react";

const useInventoryManagement = () => {
  // Internal state to store items data
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

  // Use useCallback for functions to prevent re-creation on each render
  const handleAdd = useCallback((name) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.name === name ? { ...item, count: item.count + 1 } : item
      )
    );
  }, []);

  const handleRemove = useCallback((name) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.name === name
          ? { ...item, count: Math.max(0, item.count - 1) }
          : item
      )
    );
  }, []);

  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  // Use useMemo for derived values like filteredItems to avoid unnecessary re-calculation
  const filteredItems = useMemo(() => {
    return items.filter(
      (item) =>
        (activeCategory === "All" || item.category === activeCategory) &&
        item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [items, search, activeCategory]); // Only re-compute when items, search, or activeCategory changes

  // Use useMemo for total counts as well
  const getTotalCounts = useMemo(() => {
    return items.reduce((total, item) => total + item.count, 0);
  }, [items]);

  // Count items matching the selected category and search input
  const getCategoryCount = useCallback(
    (category) => {
      return items.filter(
        (item) =>
          (category === "All" || item.category === category) &&
          item.name.toLowerCase().includes(search.toLowerCase())
      ).length;
    },
    [items, search]
  ); // Re-run when items or search changes

  return {
    filteredItems,
    search,
    activeCategory,
    categories,
    handleAdd,
    handleRemove,
    getCategoryCount,
    handleSearchChange,
    handleCategoryChange,
    getTotalCounts,
  };
};

export default useInventoryManagement;
