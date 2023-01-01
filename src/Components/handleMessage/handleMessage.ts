/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useAppSelector } from "../../hooks";
import {
  shoppingListDataType,
  webScoketMessageType,
} from "../../Services/Types";
import Img from "../../assets/pics/lemon.jpg";

export default function HandleMessage(message: MessageEvent) {
  const parsedJson: webScoketMessageType | shoppingListDataType = JSON.parse(
    message.data
  );
  console.log("core message is", parsedJson);

  if (!parsedJson.message) {
    console.log("data format error!", parsedJson);
    return;
  }

  if (parsedJson.message === "render") {
    console.log("time to render!");
    // if (parsedJson.data) {
    RenderDataToPage(parsedJson as shoppingListDataType);
    // }
  }

  if (parsedJson.message === "loading") {
    //start loading
  }
}

function RenderDataToPage(data: shoppingListDataType) {
  const currentShoppingList = useAppSelector(
    (state) => state.shoppingListSlice.items
  );
  if (!data.url) {
    data = {
      ...data,
      url: Img,
    };
  }
  currentShoppingList.some((val, index) => {
    if (val.id === data.id) {
      if (!data.count) {
        // data.count = 0 means delete item
        currentShoppingList.splice(index, 1);
      } else {
        currentShoppingList[index] = Object.assign(data);
      }
      return;
    }
  });
  currentShoppingList.push(data);
}
