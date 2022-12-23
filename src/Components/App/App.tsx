import Button from "../Button/Button";
import Items from "../Items/Items";
import "../../../node_modules/vazirmatn/Vazirmatn-font-face.css";
import "./Style/style.css";

export default function App() {
  return (
    <div className="app-main-container no-items">
      <Items />
      <Button />
    </div>
  );
}
