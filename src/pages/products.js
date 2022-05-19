// Global Imports - global import are meant to be used on all the pages
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

// Specific import to display store already available
import { store } from "../store.js";
import displayProducts from "../displayProducts.js";
import { getElement } from "../utils.js";
// filter
import setupSearch from "../filters/setupSearch.js";
import setupCompanies from "../filters/setupCompany.js";
import setupPrice from "../filters/setupPrice.js";

// taking the loading so it will take in effect
const loading = getElement(".page-loading");

// getting and displaying the store array available in the local storage into the products container (parent element for all product)
displayProducts(store, getElement(".products-container"));
// adding the functionality that displays on searched products from the store array
setupSearch(store);
// adding the functionality that display product based on category clicked
setupCompanies(store);
// adding functionality that display products based on price filtering
setupPrice(store);
//hide the visibility of the loading after the products has been gotten from the local storage store array
loading.style.visibility = "hidden";
