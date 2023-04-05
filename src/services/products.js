export async function searchProducts() {
  const res = await fetch(import.meta.env.VITE_API_PRODUCTS);
  const json = await res.json();
  return json;
}
