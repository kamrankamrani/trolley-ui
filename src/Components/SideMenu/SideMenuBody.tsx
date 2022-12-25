import "./Style/style.css";

interface IProps {
  isOpen: boolean;
}

export default function SideMenuBody({ isOpen }: IProps) {
  return (
    <div className={`side-menu-body-container ${isOpen ? "selected" : ""}`}>
      <div>
        <p>بارگزاری مجدد</p>
      </div>
      <div>
        <p>پروفایل</p>
      </div>
      <div>
        <p>اسنپ مارکت</p>
      </div>
    </div>
  );
}
