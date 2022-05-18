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
              <button class="product-cart-btn product-icon">
                <i class="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
          <!-- Product Info -->
          <footer>
            <p class="product-name">${name}</p>
            <h4 class="product-price">$9.99</h4>
          </footer>
        </article>`;
      })
      .join("");

  // dynamically inserting the featured products into the HTML
  element.innerHTML = displayFeaturedProducts;
};

// exporting the functionality
export default displayProducts;
