import "./Style/style.css";

export default function Button() {
  return (
    <div className="button-container">
      <div>
        <button className="perchase-button">
          <p>پرداخت</p>
        </button>
      </div>
      <div>
        <p>مجموع: 100 تومان</p>
      </div>
    </div>
  );
}
