import Products from './components/Products';
import Header from './components/Header';
import { useFilters } from './hooks/useFilters';
import { useProducts } from './hooks/useProducts';
import Loader from './components/Loader';
import Cart from './components/Cart';
import { CartProvider } from './context/cart';

function App() {
  const { products, loading } = useProducts();
  const { filterProduct } = useFilters({ products });

  const filteredProduct = filterProduct(products);

  return (
    <CartProvider>
      <Header />
      <Cart />
      {loading ? <Loader /> : <Products products={filteredProduct} />}
    </CartProvider>
  );
}
export default App;
