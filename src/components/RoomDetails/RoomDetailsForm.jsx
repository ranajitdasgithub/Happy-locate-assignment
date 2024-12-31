import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addRoom } from "../../redux/features/roomSlice";
import { useMemo } from "react";

const RoomDetailsForm = () => {
  const [roomName, setRoomName] = useState("");
  const dispatch = useDispatch();

  const handleAddRoom = useMemo(() => {
    return () => {
      if (roomName) {
        dispatch(addRoom({ id: Date.now(), name: roomName }));
        setRoomName("");
      }
    };
  }, [dispatch, roomName]);

  return (
    <div>
      <input
        type="text"
        className="border p-2"
        placeholder="Enter Room Name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 ml-2"
        onClick={handleAddRoom}
      >
        Add Room
      </button>
    </div>
  );
};

export default RoomDetailsForm;
