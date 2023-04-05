import { useContext, useId } from 'react';
import { FilterContext } from '../context/filters';
import './Header.css';
import { CartLogo } from './icons';

function Header() {
  const { filters, setFilters } = useContext(FilterContext);
  const minPriceId = useId();
  const categoryId = useId();

  const handleChangeMinPrice = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <header>
      <h1 className='title'>
        Shopping Cart <CartLogo />
      </h1>

      <section className='filters'>
        <div className='filter'>
          <label htmlFor={minPriceId}>Price: </label>
          <input
            type='range'
            id={minPriceId}
            min='0'
            max='1000'
            onChange={handleChangeMinPrice}
            value={filters.minPrice}
          />
          <span>{filters.minPrice}</span>
        </div>

        <div className='filter select'>
          <label htmlFor={categoryId}>Category: </label>
          <select id={categoryId} onChange={handleChangeCategory}>
            <option value='all'>All</option>
            <option value="men's clothing">Men clothing</option>
            <option value='jewelery'>Jewelery</option>
            <option value='electronics'>Electronics</option>
            <option value="women's clothing">women clothing</option>
          </select>
        </div>
      </section>
    </header>
  );
}

export default Header;
