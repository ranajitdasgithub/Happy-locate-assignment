import React, { useState, useEffect } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddInventory from "./AddInventory";
import { useSelector } from "react-redux";

const RoomAccordionManager = ({ onRoomCountsUpdate }) => {
  const [expanded, setExpanded] = useState(false);
  const [roomCounts, setRoomCounts] = useState(() => {
    const savedCounts = sessionStorage.getItem("ItemCounts");
    return savedCounts ? JSON.parse(savedCounts) : {};
  });
  const roomWiseData = useSelector((state) => state.app.inventoryDetails.room);

  const data = roomWiseData.flatMap((room) =>
    Array.from({ length: room.value }, (_, index) => ({
      name: `${room.name} ${index + 1}`,
      items: [],
    }))
  );

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleTotalCountChange = (newTotal, roomName) => {
    setRoomCounts((prevCounts) => {
      const updatedCounts = {
        ...prevCounts,
        [roomName]: newTotal,
      };
      sessionStorage.setItem("ItemCounts", JSON.stringify(updatedCounts));
      onRoomCountsUpdate(updatedCounts);
      return updatedCounts;
    });
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
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <div className="flex w-full">
              <span className="font-semibold">{room.name}</span>
              <span className="text-blue-500 text-xs flex items-center ml-4">
                {`Item Added ${roomCounts[room.name] || 0}`}
              </span>
            </div>
          </AccordionSummary>
          <AccordionDetails className="w-full">
            <AddInventory
              roomName={room.name}
              onTotalCountChange={(newTotal) =>
                handleTotalCountChange(newTotal, room.name)
              }
            />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default RoomAccordionManager;
