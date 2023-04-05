import { useContext } from 'react';
import { FilterContext } from '../context/filters';

export function useFilters({ products }) {
  const { filters, setFilters } = useContext(FilterContext);

  const filterProduct = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      );
    });
  };

  return { filters, filterProduct, setFilters };
}
