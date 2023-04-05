import { createContext, useReducer } from 'react';
import { cartInitialState, cartReducer } from '../reducers/cart';

export const CartContext = createContext();

export function CartProvider({ children }) {
  // const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   // setCart([...cart, product]) basic form
  //   const productInCartIndex = cart.findIndex((item) => item.id === product.id);

  //   // if exits at least one product with the id
  //   if (productInCartIndex >= 0) {
  //     const newCart = structuredClone(cart);
  //     newCart[productInCartIndex].quantity += 1;
  //     return setCart(newCart);
  //   }

  //   // product id is not exist
  //   setCart((prevState) => [
  //     ...prevState,
  //     {
  //       ...product,
  //       quantity: 1,
  //     },
  //   ]);
  // };

  // const removeFromCart = (product) => {
  //   setCart((prevState) => prevState.filter((item) => item.id !== product.id));
  // };

  // const clearCart = () => {
  //   setCart([]);
  // };
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product,
    });

  const clearCart = () =>
    dispatch({
      type: 'CLEAR_CART',
    });
  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
