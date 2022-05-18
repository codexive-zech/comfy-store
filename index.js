// Global Imports - global import are meant to be used on all the pages
import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";
import "./src/cart/setupCart.js";

// Specific Imports - Just for the page it is to be used
import fetchProducts from "./src/fetchProducts.js";
import { setupStore, store } from "./src/store.js";
import { getElement } from "./src/utils.js";
import displayProducts from "./src/displayProducts.js";

// a functionality that house what to do in the browser
const init = async () => {
  // getting the fetched products that was returning from the server (vai fetch products functionality)
  const products = await fetchProducts();
  // checking to see if products in the server where fetched successfully to the browser
  if (products) {
    // adding products into the store
    setupStore(products);
    // filtering over the store array from the local storage and getting the products that has the featured of true
    const featured = store.filter((product) => product.featured === true);
    // displaying all products in the store array that has it featured value as true
    displayProducts(featured, getElement(".featured-center"));
  }
};

// adding a browser load event so as to display fetched data and display it
window.addEventListener("DOMContentLoaded", init);
