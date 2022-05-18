//   ATTENTION!!!!!!!!!!!
//   I SWITCHED TO PERMANENT DOMAIN
//   DATA IS THE SAME JUST A DIFFERENT URL,
//   DOES NOT AFFECT PROJECT FUNCTIONALITY

// url to fetch all products to display
const allProductsUrl = "https://course-api.com/javascript-store-products";
// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
// url to fetch just single product
const singleProductUrl =
  "https://course-api.com/javascript-store-single-product";

//   a func to get each elements classes and id to see if it's valid
const getElement = (selection) => {
  // targeting the element that is going to be selected to take in action and effect
  const element = document.querySelector(selection);
  //   checking to see if the element does exist in the HTML as class or id
  if (element) return element;
  //   when the element class or id does not exist in the HTML then an error should be thrown
  throw Error(`Please check "${selection}" selector, no such element exist`);
};

// the format price functionality
const formatPrice = (price) => {
  // using the international standard to format the price
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((price / 100).toFixed(2));
  // returning the formatted price for each products
  return formattedPrice;
};

// adding a func that get products already fetched and added to the local storage (value)
const getStorageItem = (item) => {
  // getting product array in the local storage (store)
  let storageItem = localStorage.getItem(item);
  // checking to see if products fetched are in the local storage
  if (storageItem) {
    // converting the string data set in the local storage into a JSON so that the browser can get it and use
    storageItem = JSON.parse(localStorage.getItem(item));
  } else {
    // when the local storage where it is to fetch products name is different then it should have an empty array
    storageItem = [];
  }
  // returning the storage item value
  return storageItem;
};

// adding a func that add products fetched from the server into the local storage so that it can be easily accessed (takes a key - value pair)
const setStorageItem = (name, item) => {
  // The JSON.stringify() method converts the item (products) into strings when setting products in the local storage
  localStorage.setItem(name, JSON.stringify(item));
};

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
};
