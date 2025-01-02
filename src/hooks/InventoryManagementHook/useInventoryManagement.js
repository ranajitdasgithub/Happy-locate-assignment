import { useState, useCallback, useMemo } from "react";

const loadInventoryState = () => {
  return {
    items: [
      {
        name: "Washing Machine",
        category: "Electrical Appliances",
        count: 2,
        image: "washing-machine.jpg",
      },
      {
        name: "Sofa Chair",
        category: "Furniture",
        count: 0,
        image: "sofa.jpg",
      },
      {
        name: "Refrigerator",
        category: "Electrical Appliances",
        count: 4,
        image: "refrigirator.jpg",
      },
      { name: "Bed", category: "Furniture", count: 0, image: "bed.jpg" },
      {
        name: "Smart TV",
        category: "Electronics",
        count: 0,
        image: "smart-tv.jpg",
      },
      { name: "Sofa Set", category: "Furniture", count: 0, image: "sofa.jpg" },
    ],

    search: "",
    activeCategory: "All",
    roomName: "",
  };
};

const useInventoryManagement = () => {
  const [inventoryState, setInventoryState] = useState(loadInventoryState);

  const { items, search, activeCategory } = inventoryState;

  const categories = [
    "All",
    "Electrical Appliances",
    "Furniture",
    "Electronics",
    "Kitchen",
    "Gardening",
  ];

  const handleAdd = useCallback((name) => {
    setInventoryState((prevState) => ({
      ...prevState,
      items: prevState.items.map((item) =>
        item.name === name ? { ...item, count: item.count + 1 } : item
      ),
    }));
  }, []);

  const handleRemove = useCallback((name) => {
    setInventoryState((prevState) => ({
      ...prevState,
      items: prevState.items.map((item) =>
        item.name === name
          ? { ...item, count: Math.max(0, item.count - 1) }
          : item
      ),
    }));
  }, []);

  const handleCategoryChange = useCallback((category) => {
    setInventoryState((prevState) => ({
      ...prevState,
      activeCategory: category,
    }));
  }, []);

  const handleRoomChange = useCallback((roomName) => {
    setInventoryState((prevState) => ({
      ...prevState,
      roomName: roomName,
    }));
  }, []);

  const handleSearchChange = useCallback((e) => {
    const searchValue = e.target.value;
    setInventoryState((prevState) => ({
      ...prevState,
      search: searchValue,
    }));
  }, []);

  const filteredItems = useMemo(() => {
    return items.filter(
      (item) =>
        (activeCategory === "All" || item.category === activeCategory) &&
        item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [items, search, activeCategory]);

  const getTotalCounts = useMemo(() => {
    return items.reduce((total, item) => total + item.count, 0);
  }, [items]);

  const getCategoryCount = useCallback(
    (category) => {
      return items.filter(
        (item) =>
          (category === "All" || item.category === category) &&
          item.name.toLowerCase().includes(search.toLowerCase())
      ).length;
    },
    [items, search]
  );

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
    handleRoomChange,
  };
};

export default useInventoryManagement;
