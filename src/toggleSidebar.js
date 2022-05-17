// importing the module that check if the class or id exist in the HTML
import { getElement } from "./utils.js";

// selecting the elements that will take in actions and effect
const toggleNavbar = getElement(".toggle-nav");
const sidebar = getElement(".sidebar-overlay");
const sidebarClose = getElement(".sidebar-close");

// adding an event of the toggle for small screen so as to display the sidebar when it's clicked
toggleNavbar.addEventListener("click", () => {
  // adding the show class to the sidebar needed
  sidebar.classList.add("show");
});

// adding an event of the close icon in the sidebar for small screen so as to remove the sidebar when it's clicked
sidebarClose.addEventListener("click", () => {
  // removing the show class to the sidebar needed
  sidebar.classList.remove("show");
});
