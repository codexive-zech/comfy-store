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
  //   a try and catch block to get both no product available error and network error
  try {
    //   fetching details regarding the specific product clicked via the url id
    const response = await fetch(`${singleProductUrl}${urlID}`);
    // checking to see the status of the returned promise if it's between 200 and 299 convert data to json son browser can use
    if (response.status >= 200 && response.status <= 299) {
      // converting the return response from the server into a json so the browser can use
      const data = await response.json();
      console.log(data);
    } else {
      //  dynamically display this error message when the id url does no matches any id from the returned (promise) data in the server
      singleProductCenter.innerHTML = `<div>
        <h3 class="error">sorry, something went wrong</h3><a class="btn" href="index.html">Back Home</a>
        </div>`;
    }
  } catch (error) {
    //   give this error when above is not valid
    console.log(error);
  }
});
