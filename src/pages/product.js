// Global Imports - global import are meant to be used on all the pages
import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";

// Specific import to display product clicked already available
import { getElement, singleProductUrl, formatPrice } from "../utils.js";
import { openCart } from "../cart/toggleCart.js";

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
console.log(pageHeroTitle);

let productId;

// adding and listening for a load page event
window.addEventListener("DOMContentLoaded", async () => {
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
      // destructuring the properties return by the fetched single product
      const { id, fields } = data;
      // reassign the product id to the id from the product details retrieved from the server
      productId = id;
      // destructuring each child properties from the fields property
      const { name, company, colors, price, description } = fields;
      // destructuring the image property
      const image = fields.image[0].thumbnails.large.url;
      // changing the title of each web page dynamically
      document.title = `Comfy Store | ${name.toUpperCase()}`;
      // dynamically changing the Hero text
      pageHeroTitle.textContent = `Home / ${name}`;
      singleProductImage.src = `${image}`;
      // dynamically changing the text for the product name
      singleProductTitle.textContent = `${name}`;
      // dynamically changing the text for the product company
      singleProductCompany.textContent = `By ${company}`;
      // dynamically changing the text for the product price
      singleProductPrice.textContent = formatPrice(price);
      // dynamically changing the text for the product description
      singleProductDesc.textContent = `${description}`;
      // iterating over the colors array that is been fetched from the server
      colors.map((color) => {
        // creating a new span element
        const createSpan = document.createElement("span");
        // add a class to the newly created element
        createSpan.classList.add("product-color");
        // add background color to the span element
        createSpan.style.background = `${color}`;
        // append the newly created span to the product color section in the HTML
        singleProductColor.appendChild(createSpan);
      });
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
  // removed the visibility completely for the page loading element
  pageLoading.style.visibility = "hidden";
});

//adding and listening to a click event on the add to cart button
addToCart.addEventListener("click", () => {
  // add the product into the cart via the product id
  openCart(productId);
});
