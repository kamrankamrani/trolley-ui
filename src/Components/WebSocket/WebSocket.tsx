import { useState } from "react";
import "./Style/style.css";

export default function WebSocket() {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className={`websocket-message ${isShow ? "show" : "hide"}`}>
      <div className="loading-text">
        <p>در حال اتصال</p>
        <div className="dot-flashing-container">
          <div className="dot-flashing"></div>
        </div>
      </div>
    </div>
  );
}
