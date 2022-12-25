import { useAppSelector } from "../../hooks";
import TotalPrice from "../TotalPrice/TotalPrice";
import "./Style/style.css";

export default function Button() {
  const isItems = useAppSelector(
    (state) => state.shoppingListSlice.items.length
  );

  const onBuyButtonClick = () => {
    console.log("clicked buy");
  };

  return (
    <div className="button-container">
      <div>
        <button
          disabled={!isItems}
          onClick={onBuyButtonClick}
          className={`perchase-button ${!isItems ? "disabled" : ""}`}
        >
          <p>پرداخت</p>
        </button>
      </div>
      <TotalPrice />
    </div>
  );
}
