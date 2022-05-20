// Global Imports - global import are meant to be used on all the pages
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

// Specific import to display product clicked already available
import { getElement, singleProductUrl } from "../utils.js";

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

// adding and listening for a load page event
window.addEventListener("DOMContentLoaded", async () => {
  // removed the visibility completely for the page loading element
  pageLoading.style.visibility = "hidden";
  //   getting the specific id of the url clicked
  const urlID = window.location.search;
  //   fetching products information concerning a single product via it id along side
  const response = await fetch(`${singleProductUrl}${urlID}`);
  console.log(response);
});
