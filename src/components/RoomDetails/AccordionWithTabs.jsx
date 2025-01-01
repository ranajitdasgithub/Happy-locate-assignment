import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddInventory from "../Inventory/AddInventory";

const AccordionWithTabs = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedTabs, setSelectedTabs] = useState({});

  // Example data for rooms and dining areas
  const data = [
    {
      name: "Room 1",
      items: [
        { id: 1, name: "Sofa", image: "/sofa.png" },
        { id: 2, name: "Chair", image: "/chair.png" },
      ],
    },
    {
      name: "Room 2",
      items: [
        { id: 3, name: "Table", image: "/table.png" },
        { id: 4, name: "Lamp", image: "/lamp.png" },
      ],
    },
    {
      name: "Dining 1",
      items: [
        { id: 5, name: "Dining Table", image: "/dining-table.png" },
        { id: 6, name: "Chair", image: "/chair.png" },
      ],
    },
    {
      name: "Dining 2",
      items: [
        { id: 7, name: "Plate Set", image: "/plate-set.png" },
        { id: 8, name: "Cutlery", image: "/cutlery.png" },
      ],
    },
  ];

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleTabChange = (roomName, newValue) => {
    setSelectedTabs((prev) => ({ ...prev, [roomName]: newValue }));
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-4">
      {data.map((room, index) => (
        <Accordion
          key={room.name}
          expanded={expanded === `panel${index}`}
          sx={{ backgroundColor: "#f7f7f7", boxShadow: "none" }}
          onChange={handleAccordionChange(`panel${index}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >
            <div className="flex w-full">
              <span className="font-semibold">{room.name}</span>
              <span className="text-blue-500 text-xs flex items-center ml-4">{`Item Added ${room.items.length}`}</span>
            </div>
          </AccordionSummary>
          <AccordionDetails className="w-full ">
            <AddInventory />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionWithTabs;
