// importing the module that check if the class or id exist in the HTML
import { getElement } from "../utils.js";

// selecting the elements that will take in actions and effect
const toggleCart = getElement(".toggle-container");
const cartSection = getElement(".cart-overlay");
const cartClose = getElement(".cart-close");

// adding a click event to the cart icon so as to display (show) items in the cart
toggleCart.addEventListener("click", () => {
  cartSection.classList.add("show");
});

// adding a click event to the close icon so as to remove the cart section displaying items
cartClose.addEventListener("click", () => {
  cartSection.classList.remove("show");
});

// a func displaying the cart and it's items when it's clicked in the featured product section
export const openCart = () => {
  cartSection.classList.add("show");
};
