import { useState, useCallback, useMemo, useEffect } from "react";

const defaultInventoryState = {
  items: [
    {
      name: "Washing Machine",
      category: "Electrical Appliances",
      count: 0,
      image: "washing-machine.jpg",
    },
    {
      name: "Sofa Chair",
      category: "Furniture",
      count: 0,
      image: "sofa-set.jpg",
    },
    {
      name: "Refrigerator",
      category: "Electrical Appliances",
      count: 0,
      image: "refrigerator.jpg",
    },
    { name: "Bed", category: "Furniture", count: 0, image: "bed.jpg" },
    {
      name: "Smart TV",
      category: "Electronics",
      count: 0,
      image: "smart-tv.jpg",
    },
    {
      name: "Sofa Set",
      category: "Furniture",
      count: 0,
      image: "sofa.jpg",
    },
  ],
  search: "",
  activeCategory: "All",
};

const loadRoomInventoryState = (roomName) => {
  const savedState = sessionStorage.getItem(roomName);
  return savedState ? JSON.parse(savedState) : defaultInventoryState;
};

const useInventoryManagement = (roomName) => {
  const [inventoryState, setInventoryState] = useState(() =>
    loadRoomInventoryState(roomName)
  );

  const { items, search, activeCategory } = inventoryState;

  const categories = [
    "All",
    "Electrical Appliances",
    "Furniture",
    "Electronics",
    "Kitchen",
    "Gardening",
  ];

  // Save state for the current roomName
  const updateSessionStorage = (newState) => {
    sessionStorage.setItem(roomName, JSON.stringify(newState));
  };

  const handleAdd = useCallback(
    (name) => {
      setInventoryState((prevState) => {
        const newState = {
          ...prevState,
          items: prevState.items.map((item) =>
            item.name === name ? { ...item, count: item.count + 1 } : item
          ),
        };
        updateSessionStorage(newState);
        return newState;
      });
    },
    [roomName]
  );

  const handleRemove = useCallback(
    (name) => {
      setInventoryState((prevState) => {
        const newState = {
          ...prevState,
          items: prevState.items.map((item) =>
            item.name === name
              ? { ...item, count: Math.max(0, item.count - 1) }
              : item
          ),
        };
        updateSessionStorage(newState);
        return newState;
      });
    },
    [roomName]
  );

  const handleCategoryTabChange = useCallback(
    (category) => {
      setInventoryState((prevState) => {
        const newState = { ...prevState, activeCategory: category };
        updateSessionStorage(newState);
        return newState;
      });
    },
    [roomName]
  );

  const handleSearchChange = useCallback(
    (e) => {
      const searchValue = e.target.value;
      setInventoryState((prevState) => {
        const newState = { ...prevState, search: searchValue };
        updateSessionStorage(newState);
        return newState;
      });
    },
    [roomName]
  );

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

  useEffect(() => {
    const savedState = loadRoomInventoryState(roomName);
    setInventoryState(savedState);
  }, [roomName]);

  return {
    filteredItems,
    search,
    activeCategory,
    categories,
    handleAdd,
    handleRemove,
    getCategoryCount,
    handleSearchChange,
    handleCategoryTabChange,
    getTotalCounts,
  };
};

export default useInventoryManagement;
