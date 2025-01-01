import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Custom hook for managing inventory page logic
const useSelectInventory = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState("room");

  // Handle API call to fetch inventory and navigate
  const handleContinueBtn = async () => {
    setLoading(true);
    try {
      const response = await fetch(process.env.REACT_APP_GET_INVENTORY_API, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      if (result) {
        navigate("/inventory"); // Navigate to the inventory page if the call is successful
      }
    } catch (error) {
      console.error("Error occurred during GET request:", error);
    } finally {
      setLoading(false); // Stop loading after the operation completes
    }
  };

  // Handle tab change
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    console.log("Selected Tab: ", tab); // Optional log or additional logic
  };

  return {
    loading,
    selectedTab,
    handleContinueBtn,
    handleTabChange,
  };
};

export default useSelectInventory;
