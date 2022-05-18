// Global Imports - global import are meant to be used on all the pages
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

// Specific import to display store already available
import { store } from "../store.js";
import displayProducts from "../displayProducts.js";
import { getElement } from "../utils.js";

// getting and displaying the store array available into the products container (parent element for all product)
displayProducts(store, getElement(".products-container"));
