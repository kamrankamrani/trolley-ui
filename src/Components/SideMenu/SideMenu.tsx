import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";
import SideMenuBody from "./SideMenuBody";
import "./Style/style.css";

export default function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const onSideMenuClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="side-menu-container">
      <div className={`side-menu-icon ${isOpen ? "selected" : ""}`}>
        <button
          onClick={onSideMenuClick}
          className="side-menu-container-button"
        >
          <MenuRoundedIcon sx={{ color: "#f1f1f1" }} />
        </button>
      </div>
      <SideMenuBody isOpen={isOpen} />
    </div>
  );
}
