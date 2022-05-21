// importing the set storage items and get storage items so that when we get to the products page instead of doing another fetched functionality we just add all fetched products done in the home page into the set local storage and get them from the local storage when we are in the product page without performing another fetch functionality
import { getStorageItem, setStorageItem } from "./utils.js";
// store should be an empty array meaning no products yet in the store at first (INITIAL)
// getting the fetched data in the local storage after been fetched from the sever as the value for store so that when they are need to use products elsewhere it can be easily accessed from the local storage
let store = getStorageItem("store");

// a functionality that setup products into the store array after been fetched
const setupStore = (products) => {
  // iterating over all the products been fetched from the server
  store = products.map((product) => {
    //   destructuring all the needed properties from the server so as to use
    const {
      id,
      fields: { company, colors, featured, price, name, image: img },
    } = product;
    const image = img[0].thumbnails.large.url;
    // returning back all the needed properties been destructured
    return { id, company, colors, featured, price, name, image };
  });
  // setting the store array been fetched from the server into the local storage so that we don't implement fetch product func when we need the products in another web page
  setStorageItem("store", store);
};

// a functionality that finds products in the store array
const findProduct = (id) => {
  // checking to find out if the product clicked id's the same as the id of a random product in the store local storage array
  let product = store.find((product) => product.id === id);
  // the product with such id should return as long as the product clicked and a product in the store array has same id
  return product;
};
export { store, setupStore, findProduct };
