import MyBoddy from "../MyBoddy/MyBoddy";
import "./Style/style.css";

export default function NoItems() {
  return (
    <div className="no-item-container">
      <MyBoddy />
      <p>سبد خرید شما خالیست!</p>
    </div>
  );
}
