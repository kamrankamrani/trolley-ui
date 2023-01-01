/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import useWebSocket, { ReadyState } from "react-use-websocket";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import "./Style/style.css";
import { setWebSocketConnectionStatus } from "../../Features/webSocketSlice";
import {
  shoppingListDataType,
  webScoketMessageType,
} from "../../Services/Types";
import Img from "../../assets/pics/lemon.jpg";
import { setShoppingList } from "../../Features/shoppingListSlice";

export default function WebSocket() {
  const websokcetStatus = useAppSelector(
    (state) => state.webSocketSlice.connectionStatus
  );
  const websocketUrl = useAppSelector(
    (state) => state.webSocketSlice.webSocketUrl
  );
  const currentShoppingList = useAppSelector(
    (state) => state.shoppingListSlice.items
  );
  let currentShoppingList_: shoppingListDataType[] = [];
  const dispatch = useAppDispatch();

  const queryParams = {
    UI: "user",
    name: "T1",
  };

  const { readyState, sendMessage } = useWebSocket(websocketUrl, {
    onMessage(event: WebSocketEventMap["message"]) {
      HandleMessage(event);
    },
    onReconnectStop(numAttempts) {
      console.log("reconnect stopped!", numAttempts);
    },
    onOpen: () => {
      console.log("opened");
    },
    shouldReconnect: () => true,
    onClose: () => {
      console.log("connection closed");
    },
    queryParams,
    share: true,
    retryOnError: true,
    reconnectInterval: 3000,
    reconnectAttempts: 100, //3s * 1000 = 3000s or 50 minutes
  });

  function HandleMessage(message: MessageEvent) {
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
    currentShoppingList_ = [...currentShoppingList];
    if (!data.url) {
      data = {
        ...data,
        url: Img,
      };
    }
    if (currentShoppingList_.length) {
      currentShoppingList_.some((val, index) => {
        if (val.id === data.id) {
          if (!data.count) {
            // data.count = 0 means delete item
            currentShoppingList_.splice(index, 1);
          } else {
            currentShoppingList_[index] = Object.assign(data);
          }
          return;
        }
      });
    } else {
      if (data.count) {
        currentShoppingList_.push(data);
      }
    }
    console.log("updated shopping list", currentShoppingList_);
    dispatch(setShoppingList(currentShoppingList_));
  }

  useEffect(() => {
    dispatch(setWebSocketConnectionStatus(readyState));
  }, [readyState]);

  useEffect(() => {
    dispatch(setShoppingList(currentShoppingList_));
  }, [JSON.stringify(currentShoppingList_)]);

  return (
    <div
      className={`websocket-message ${
        websokcetStatus !== ReadyState.OPEN ? "show" : "hide"
      }`}
    >
      <div className="loading-text">
        <p>در حال اتصال</p>
        <div className="dot-flashing-container">
          <div className="dot-flashing"></div>
        </div>
      </div>
    </div>
  );
}
