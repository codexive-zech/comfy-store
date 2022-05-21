import { formatPrice, getElement } from "../utils.js";
const cartItems = getElement(".cart-items");
const addCartToDOM = ({ id, name, amount, price, image }) => {
  const article = document.createElement("article");
  article.classList.add("cart-item");
  article.setAttribute("data-id", id);
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
  cartItems.appendChild(article);
};
export default addCartToDOM;
