// imported the needed function module
import { formatPrice, getElement } from "../utils.js";
// selecting element that will take in effect
const cartItems = getElement(".cart-items");
// a functionality that add product to cart and also destructured the needed properties from the object
const addCartToDOM = ({ id, name, amount, price, image }) => {
  // create a new element name article
  const article = document.createElement("article");
  // adding a class to the created
  article.classList.add("cart-item");
  // setting attributes to the created element
  article.setAttribute("data-id", id);
  // dynamically inserting the HTML into the new created article element
  article.innerHTML = `
            <img
              src="${image}"
              alt="${name}"
              class="cart-item-img"
            />

            <div>
              <h4 class="cart-item-name">${name}</h4>
              <p class="cart-item-price">${formatPrice(price)}</p>
              <button class="cart-item-remove-btn" data-id="${id}">Remove Product</button>
            </div>
       
            <div>
              <button class="cart-item-increase-btn" data-id="${id}">
                <i class="fa fa-chevron-up"></i>
              </button>
              <p class="cart-item-amount" data-id="${id}">${amount}</p>
              <button class="cart-item-decrease-btn" data-id="${id}">
                <i class="fa fa-chevron-down"></i>
              </button>
            </div>`;
  // adding / appending the newly created element to it's parent element
  cartItems.appendChild(article);
};
// exporting this functionality to other module
export default addCartToDOM;
