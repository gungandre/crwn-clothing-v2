import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";

const CardDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CardDropDown;