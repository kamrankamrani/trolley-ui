import { useAppSelector } from "../../hooks";
import NoItems from "../NoItems/NoItems";
import ShopList from "../ShopList/ShopList";
import "./Style/style.css";

export default function Items() {
  const isItems = useAppSelector(
    (state) => state.shoppingListSlice.items.length
  );
  return isItems ? <ShopList /> : <NoItems />;
}
