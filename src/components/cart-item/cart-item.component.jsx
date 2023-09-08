import "./cart-item.styles.scss";
import { memo } from "react";

// saat kita menambahkan item ke keranjang kita akan merender dan menlooping semua data yang ada di dalam keranjang tersebut, oleh karena itu bisa menggunakan memo untuk mengetahui item item yag ditambahkan ke kerajabg saja yang di tambahkan, react bisa bekerja seperti itu karena di setiap looping memberi key props

const CartItem = memo(({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
});

export default CartItem;
