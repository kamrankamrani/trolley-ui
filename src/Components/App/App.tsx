import Button from "../Button/Button";
import Items from "../Items/Items";
import "../../../node_modules/vazirmatn/Vazirmatn-font-face.css";
import { useAppSelector } from "../../hooks";
import "./Style/style.css";

export default function App() {
  const isItems = useAppSelector(
    (state) => state.shoppingListSlice.items.length
  );
  return (
    <div
      className={`app-main-container ${
        isItems ? "items-available" : "no-items"
      }`}
    >
      <Items />
      <Button />
    </div>
  );
}
