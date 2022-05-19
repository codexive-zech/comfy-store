// importing the needed modules
import { getElement } from "../utils.js";
import displayProducts from "../displayProducts.js";

//selecting the element that will take in effect
const priceInput = getElement(".price-filter");
const priceValue = getElement(".price-value");
const productsContainer = getElement(".products-container");

// setting up the functionality that filter through the products price and display products
const setupPrice = (store) => {
  // iterating over the store array so as to get all the price available in the local storage
  let maxPrice = store.map((product) => product.price);
  //   getting the maximum price for products in the store array (used spread op)
  maxPrice = Math.max(...maxPrice);
  //   rounded the maximum price to the nearest whole number
  maxPrice = Math.ceil(maxPrice / 100);
  //   set the value for the price input (range) to the maximum product price
  priceInput.value = maxPrice;
  //   set the max value for the product to the maximum product price
  priceInput.max = maxPrice;
  //   set the minimum value for the product 0
  priceInput.min = 0;
  //   displayed this text under the input range so as to know the max price
  priceValue.textContent = `Value : $${maxPrice}`;

  //   adding and listening for the input event (mostly changes) on the price input (filter range)
  priceInput.addEventListener("input", () => {
    //   added the value of the price input (filter range), converted it to a number and gave it an identifier
    const rangePrice = parseInt(priceInput.value);
    //   changed and displayed the text under the price input (filter range) so as to know the max price
    priceValue.textContent = `Value : $${rangePrice}`;
    // filtered over the store so as to get just the prices for each products in the store array
    const filterPricedProducts = store.filter(
      // checked the prices of each product in cent to see if it is less that the new filter range price value
      (product) => product.price / 100 < rangePrice
    );
    // dynamically display just products whose prices are less than the filter price input range
    displayProducts(filterPricedProducts, productsContainer);
    // checking to see if the length of the filtered products to be displayed is less than one
    if (filterPricedProducts.length < 1) {
      // dynamically display an error message of products unavailable
      productsContainer.innerHTML = `<h3 class="filter-error">Sorry, no products matches your search</h3>`;
    }
  });
};
export default setupPrice;
