import { useDispatch, useSelector } from "react-redux";
import { appActions } from "../../redux/appSlice";

const useInventorySelection = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.app.inventoryDetails.room);

  const updateItemCount = (id, increment) => {
    const updatedItems = items.map((item) =>
      item.id === id
        ? { ...item, value: Math.max(0, item.value + increment) }
        : item
    );
    dispatch(appActions.updateInventoryDetails({ room: updatedItems }));
  };

  return { items, updateItemCount };
};

export default useInventorySelection;
