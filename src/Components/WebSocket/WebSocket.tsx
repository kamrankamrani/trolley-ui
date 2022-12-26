import useWebSocket, { ReadyState } from "react-use-websocket";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import "./Style/style.css";
import { setWebSocketConnectionStatus } from "../../Features/webSocketSlice";

export default function WebSocket() {
  const websokcetStatus = useAppSelector(
    (state) => state.webSocketSlice.connectionStatus
  );
  const websocketUrl = useAppSelector(
    (state) => state.webSocketSlice.webSocketUrl
  );
  const dispatch = useAppDispatch();

  const queryParams = {
    UI: "user",
  };

  const { readyState, sendMessage } = useWebSocket(websocketUrl, {
    onMessage(event: WebSocketEventMap["message"]) {
      // handleSocketMessage(event);
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
    reconnectAttempts: 10, //3s * 1000 = 3000s or 50 minutes
  });

  useEffect(() => {
    dispatch(setWebSocketConnectionStatus(readyState));
  }, [readyState]);

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
