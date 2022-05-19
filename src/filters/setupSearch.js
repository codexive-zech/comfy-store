// importing the needed modules
import { getElement } from "../utils.js";
import displayProducts from "../displayProducts.js";

// a functionality that set up products into the store when the available products are been searched
const setupSearch = (store) => {
  const searchForm = getElement(".input-form");
  const inputText = getElement(".search-input");
  const productsContainer = getElement(".products-container");

  //   adding and listening for a keyup (key typing) event
  searchForm.addEventListener("keyup", () => {
    //   get the value inputted in the search form
    const inputTextValue = inputText.value;
    // checking to see if a value was inputted
    if (inputTextValue) {
      // filtering through the store array in the local storage to get a specific product
      const searchedProducts = store.filter((product) => {
        //   destructing the needed property from the store array
        let { name } = product;
        // converting all the product names in the store array into a lower case
        name = name.toLowerCase();
        // checking to see if the name of the products in the store array (local storage) starts with a word inputted in the search
        if (name.startsWith(inputTextValue)) {
          // when the name of the product in the store array matches same as the name in the input search then return back that product
          return product;
        }
      });
      //   dynamically display the return searched product into the product container sec in the HTML
      displayProducts(searchedProducts, productsContainer);
      //   checking to see if the length of the display searched products are less than 1
      if (searchedProducts.length < 1) {
        //   dynamically display this as an error message since the input value of the search does not matches same name as the store array in the local storage
        productsContainer.innerHTML = `<h3 class="filter-error">Sorry, No Product Matches Your Search</h3>`;
      }
    }
    // when no event take place (no text in search) display only the entire store array from the local storage
    else {
      displayProducts(store, productsContainer);
    }
  });
};

// exporting the func out
export default setupSearch;
