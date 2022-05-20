// Global Imports - global import are meant to be used on all the pages
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

// Specific import to display product clicked already available
import { getElement } from "../utils.js";

const pageHeroTitle = getElement(".page-hero-title");
const singleProductCenter = getElement(".single-product-center");
const singleProductImage = getElement(".single-product-img");
const singleProductTitle = getElement(".single-product-title");
const singleProductCompany = getElement(".single-product-company");
const singleProductPrice = getElement(".single-product-price");
const singleProductColor = getElement(".single-product-colors");
const singleProductDesc = getElement(".single-product-desc");
const addToCart = getElement(".addToCart");
const pageLoading = getElement(".page-loading");

window.addEventListener("DOMContentLoaded", () => {
  pageLoading.classList.remove("page-loading");
});
