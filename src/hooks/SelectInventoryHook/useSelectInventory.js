import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useSelectInventory = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState("room");

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
        navigate("/inventory");
      }
    } catch (error) {
      console.error("Error occurred during GET request:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return {
    loading,
    selectedTab,
    handleContinueBtn,
    handleTabChange,
  };
};

export default useSelectInventory;
