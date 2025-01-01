import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "happy-locate-app",
  initialState: {
    inventoryDetails: {
      id: "inventory-0",
      room: [
        { id: 0, name: "Rooms", value: 0, nodes: [] },
        { id: 1, name: "Kitchen", value: 0, nodes: [] },
        { id: 2, name: "Drawing Hall", value: 0, nodes: [] },
        { id: 3, name: "Dining Hall", value: 0, nodes: [] },
      ],
      category: [],
      selectedTab: "room",
    },
  },
  reducers: {
    updateInventoryDetails(state, action) {
      state.inventoryDetails = { ...state.inventoryDetails, ...action.payload };
    },
  },
});

const appActions = appSlice.actions;

export { appActions };
export default appSlice;
