// importing the needed modules
import { getElement } from "../utils.js";
import displayProducts from "../displayProducts.js";
//importing the element that will take in effect
const companyCategories = getElement(".companies");

// implementing a func that will set up store company categories
const setupCompanies = (store) => {
  // iterated first over the store array in the local storage, then converted it into a set so as to get each single unique value and then converted the set object into an array using spread operator
  const companies = [
    "all",
    ...new Set(store.map((product) => product.company)),
  ];
  // iterated over the new company array which was converted using spread op then inserted each company into the HTML
  const singleCompany = companies
    .map((company) => {
      return `<button class="company-btn">${company}</button>`;
    })
    .join("");
  // dynamically inserting the each iterated company into the web page (HTML)
  companyCategories.innerHTML = singleCompany;

  // adding and listening for an event on each company name
  companyCategories.addEventListener("click", (e) => {
    // getting the presided button clicked
    const element = e.target;
    // checking to see if the clicked element has the class of (company btn)
    if (element.classList.contains("company-btn")) {
      // let the new store to return on each click first be an empty array
      let newStore = [];
      // checking to see if the displayed word of the clicked element is 'all'
      if (element.textContent === "all") {
        // let the value for the new store to display be the store array using spread op
        newStore = [...store];
      }
      // checking to see if the display word that is clicked is a company name from the store array
      else {
        // filtering through the store array and seeing if the name of the company in the store array is the same as the words been clicked (company name)
        newStore = store.filter(
          (product) => product.company === element.textContent
        );
      }

      // display the new store array after filtering from the local storage and let it be visible in the products container
      displayProducts(newStore, getElement(".products-container"));
    }
  });
};

export default setupCompanies;
