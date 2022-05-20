// importing global functionality
import { getElement, getStorageItem, setStorageItem } from "../utils.js";
// importing the functionality that opens up the cart side bar when the cart button is clicked
import { openCart } from "./toggleCart.js";

// selecting elements that will take in effects
const cartItemCountDOM = getElement(".cart-item-count");
const cartItemsDOM = getElement(".cart-items");
const cartTotalDOM = getElement(".cart-total");

// getting the initial product from the cart local storage which is currently empty (haven't been set)
let cart = getStorageItem("cart");
// a functionality that add products to the cart via the id available in the store local storage
export const addToCart = (id) => {
  console.log(id);
  //   adding the open cart functionality so as to show the cart and it's item when the button is clicked clicked
  openCart();
};

// init declare
const init = () => {
  console.log("hel");
};
init();
