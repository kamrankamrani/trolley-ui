import { useAppSelector } from "../../hooks";
import { PersianNumber } from "../../Services/ConvertNumbers";
import "./Style/style.css";

export default function ShopList() {
  const shoppingList = useAppSelector((state) => state.shoppingListSlice.items);
  return (
    <div className="shop-list-container">
      {shoppingList.map((value) => {
        return (
          <div className="shop-item" key={value.id}>
            <div className="img-title">
              <img src={value.url} alt={""} />
              <p>{value.name}</p>
            </div>
            <div className="item-detail">
              <div>
                <p>تعداد: </p>
                <p>{PersianNumber(value.count)}</p>
              </div>
              <div>
                <p>قیمت واحد: </p>
                <p>{PersianNumber(value.unitPrice)} تومان</p>
              </div>
              <div>
                <p>قیمت کل: </p>
                <p>{PersianNumber(value.price)} تومان</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
