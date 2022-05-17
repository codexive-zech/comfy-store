// imported the url that fetches data from the server
import { allProductsUrl } from "./utils.js";

// the functionality to fetch products from the server
const fetchProducts = async () => {
  // a try and catch block (try - house the positive response to display on the browser)
  try {
    //   fetching the data from the server
    const response = await fetch(allProductsUrl);
    // converting the fetched data into a JSON
    const data = await response.json();
    // return back to the browser the fetched data
    return data;
  } catch (error) {
    //   (catch - house the the error message to display when the response from the server (url) is incorrect)
    console.log(error);
  }
};

// exporting out the functionality
export default fetchProducts;
