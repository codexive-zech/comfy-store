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

const formatPrice = () => {};

const getStorageItem = () => {};
const setStorageItem = () => {};

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
};
