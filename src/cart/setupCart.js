// importing global functionality
import { getElement, getStorageItem, setStorageItem } from "../utils.js";
// importing the functionality that opens up the cart side bar when the cart button is clicked
import { openCart } from "./toggleCart.js";
import { findProduct } from "../store.js";
import addCartToDOM from "./addCartToDOM.js";

// selecting elements that will take in effects
const cartItemCountDOM = getElement(".cart-item-count");
const cartItemsDOM = getElement(".cart-items");
const cartTotalDOM = getElement(".cart-total");

// getting the initial product from the cart local storage which is currently empty (haven't been set)
let cart = getStorageItem("cart");
// a functionality that add products to the cart via the id available in the store local storage
export const addToCart = (id) => {
  // checking to see if the product item clicked is already in the cart
  const item = cart.find((cartItem) => cartItem.id === id);
  // checking to see if the product us not in the cart
  if (!item) {
    // find each product id available
    let product = findProduct(id);
    // adding items that are not there to the cart and give initial value of 1
    product = { ...product, amount: id };
    // get all the product item available in the cart and also the newly added product in the cart
    cart = [...cart, product];
    // add product item dynamically
    addCartToDOM(product);
    console.log(cart);
  } else {
  }
  //   adding the open cart functionality so as to show the cart and it's item when the button is clicked clicked
  openCart();
};

// init declare
const init = () => {};
init();
