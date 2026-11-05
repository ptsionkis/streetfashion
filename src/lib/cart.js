const CART_KEY = 'station-cart-demo-v1';
const WISHLIST_KEY = 'station-wishlist-demo-v1';
export function readLocal(key, fallback){ try { const v=JSON.parse(localStorage.getItem(key));return Array.isArray(v)?v:fallback }catch{return fallback} }
export const readCart=()=>readLocal(CART_KEY,[]);
export const saveCart=items=>localStorage.setItem(CART_KEY,JSON.stringify(items));
export const readWishlist=()=>readLocal(WISHLIST_KEY,[]);
export const saveWishlist=items=>localStorage.setItem(WISHLIST_KEY,JSON.stringify(items));
// The local cart is illustrative. Never trust its prices, stock or totals in production.
