import { useId } from 'react';
import { ClearCart, CartClean } from './icons';
import './Cart.css';
import { useCart } from '../hooks/useCart';

function CartItem({ image, price, title, quantity, addToCard }) {
  return (
    <li>
      <img src={image} alt={title} />

      <div>
        <strong>{title}</strong> -${price}
      </div>

      <footer>
        <small>Qty: {quantity}</small>

        <button onClick={addToCard}>+</button>
      </footer>
    </li>
  );
}

function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartClean />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden />

      <aside className='cart'>
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCard={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button onClick={() => clearCart()}>
          <ClearCart />
        </button>
      </aside>
    </>
  );
}

export default Cart;
