import Button from "../Button/Button";
import Items from "../Items/Items";
import "../../../node_modules/vazirmatn/Vazirmatn-font-face.css";
import { useAppSelector } from "../../hooks";
import SideMenu from "../SideMenu/SideMenu";
import "./Style/style.css";
import WebSocket from "../WebSocket/WebSocket";

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
      <WebSocket />
      <SideMenu />
      <Items />
      <Button />
    </div>
  );
}
