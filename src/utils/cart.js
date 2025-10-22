// Cart utilities for Sichy Café

export const getCart = () => {
  const savedCart = localStorage.getItem('sichyCart');
  return savedCart ? JSON.parse(savedCart) : [];
};

export const saveCart = (cart) => {
  localStorage.setItem('sichyCart', JSON.stringify(cart));
};

export const addToCart = (product) => {
  const cart = getCart();
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  saveCart(cart);
  return cart;
};

export const removeFromCart = (productId) => {
  const cart = getCart();
  const updatedCart = cart.filter(item => item.id !== productId);
  saveCart(updatedCart);
  return updatedCart;
};

export const updateQuantity = (productId, newQuantity) => {
  const cart = getCart();
  const updatedCart = cart.map(item => 
    item.id === productId 
      ? { ...item, quantity: newQuantity }
      : item
  ).filter(item => item.quantity > 0);
  
  saveCart(updatedCart);
  return updatedCart;
};

export const getCartCount = () => {
  const cart = getCart();
  return cart.reduce((count, item) => count + item.quantity, 0);
};

export const getCartTotal = () => {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const clearCart = () => {
  localStorage.removeItem('sichyCart');
  return [];
};
