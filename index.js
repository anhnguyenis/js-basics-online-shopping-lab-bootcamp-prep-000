var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  cart.push(new Object({itemName: itemPrice}));
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function addToCart(item) {
 item = item;
 return item;
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
