// store should be an empty array meaning no products yet in the store
let store = [];

// a functionality that setup products into the store array after been fetched
const setupStore = (products) => {
  // iterating over all the products been fetched from the server
  store = products.map((product) => {
    //   destructuring all the needed properties from the server so as to use
    const {
      id,
      fields: { company, colors, featured, price, name, image: img },
    } = product;
    const image = img[0].thumbnails.url;
    // returning back all the needed properties been destructured
    return { id, company, colors, featured, price, name, image };
  });
};
console.log(store);

// exporting the empty store array and store with products via setup store
export { store, setupStore };
