// importing tne functionality that format price
import { formatPrice } from "./utils.js";
import { addToCart } from "./cart/setupCart.js";
// implementing a functionality that display just products which featured value are true
const displayProducts = (products, element) => {
  const displayFeaturedProducts =
    //   iterating over all the products that has featured set to true in the store array
    products
      .map((product) => {
        // destructing the needed properties of the store array in each product
        const { id, name, image, price } = product;
        //   dynamically displaying this HTML in the web page section for featured products
        return `<article class="product">
          <div class="product-container">
            <!-- Image -->
            <img
              src="${image}"
              class="product-img img"
              alt="${name}"
            />
            <!-- Product Icons -->
            <div class="product-icons">
              <a href="product.html?id=${id}" class="product-icon">
                <i class="fas fa-search"></i>
              </a>
              <button class="product-cart-btn product-icon" data-id="${id}">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <!-- Product Info -->
          <footer>
            <p class="product-name">${name}</p>
            <h4 class="product-price">${formatPrice(price)}</h4>
          </footer>
        </article>`;
      })
      .join("");

  // dynamically inserting the featured products into the HTML
  element.innerHTML = displayFeaturedProducts;

  // listening for a click event on the featured center section
  element.addEventListener("click", function (e) {
    // getting the getting the parent element when a button is clicked
    const getParent = e.target.parentElement;
    // checking to see if the clicked element has a parent with the class of product cart button
    if (getParent.classList.contains("product-cart-btn")) {
      // when that clicked element has that class now add the data-id of that element to the cart
      addToCart(getParent.dataset.id);
    }
  });
};

// exporting the functionality
export default displayProducts;
