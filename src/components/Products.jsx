import { useCart } from '../hooks/useCart';
import './Products.css';
import { AddToCart, RemoveFromCart } from './icons';

function Products({ products }) {
  const { addToCart, cart, removeFromCart } = useCart();

  // console.log(cart);

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };
  return (
    <main>
      {products?.length > 0 ? (
        <ul className='products'>
          {products?.map((product) => {
            const isProductInCart = checkProductInCart(product);

            return (
              <li className='product' key={product.id}>
                <div className='product__img'>
                  <img src={product.image} alt={product.description} />
                </div>

                <div className='product_description'>
                  <div className='product__title'>
                    {product.title} - 💲{product.price}
                  </div>
                  <div className='product__btn'>
                    <button
                      style={{
                        backgroundColor: isProductInCart ? 'red' : 'orange',
                      }}
                      onClick={() =>
                        isProductInCart
                          ? removeFromCart(product)
                          : addToCart(product)
                      }
                    >
                      {isProductInCart ? <RemoveFromCart /> : <AddToCart />}
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>No results found</h3>
      )}
    </main>
  );
}
export default Products;
