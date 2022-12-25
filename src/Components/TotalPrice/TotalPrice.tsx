import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import { PersianNumber } from "../../Services/ConvertNumbers";
import "./Style/style.css";

export default function TotalPrice() {
  const [totalPrice, setTotalPrice] = useState(0);
  const isItems = useAppSelector(
    (state) => state.shoppingListSlice.items.length
  );
  const shopItems = useAppSelector((state) => state.shoppingListSlice.items);

  useEffect(() => {
    if (isItems) {
      let total = 0;
      shopItems.forEach((value) => {
        total += Number(value.price);
      });
      setTotalPrice(total);
    }
  }, [isItems]);

  return (
    <div className="total-price">
      <p>مجموع: {PersianNumber(totalPrice)} تومان</p>
    </div>
  );
}
