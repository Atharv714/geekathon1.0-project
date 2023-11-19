'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
  
});


// script.js

document.addEventListener("DOMContentLoaded", function () {
  const destinationInput = document.getElementById("destination");
  const autocompleteList = document.getElementById("autocomplete-list");

  // Array of sample country names
  const countries = ['India', 'France', 'Spain', 'Italy', 'United States', 'China', 'Germany', 'United Kingdom', 'Mexico', 'Thailand', 'Turkey', 'Malaysia', 'Russia', 'Canada', 'Australia', 'Japan'];

  // Function to update the autocomplete list
  function updateAutocompleteList(inputValue) {
    // Clear previous suggestions
    autocompleteList.innerHTML = '';

    // Filter countries based on the input value
    const filteredCountries = countries.filter(country => country.toLowerCase().startsWith(inputValue.toLowerCase()));

    // Create and append list items for suggestions
    filteredCountries.forEach(country => {
      const listItem = document.createElement("div");
      listItem.innerHTML = `<strong>${country.substr(0, inputValue.length)}</strong>${country.substr(inputValue.length)}`;
      listItem.addEventListener("click", function () {
        destinationInput.value = country;
        autocompleteList.innerHTML = ''; // Clear the suggestions after selection
      });
      autocompleteList.appendChild(listItem);
    });

    // Show or hide the autocomplete list based on suggestions
    autocompleteList.style.display = filteredCountries.length > 0 ? 'block' : 'none';

    // Adjust the position of the autocomplete list
    const inputRect = destinationInput.getBoundingClientRect();
    autocompleteList.style.left = inputRect.left + 'px';
    autocompleteList.style.top = (inputRect.bottom + window.scrollY) + 'px';
  }

  // Event listener for input changes
  destinationInput.addEventListener("input", function () {
    const inputValue = this.value;
    updateAutocompleteList(inputValue);
  });

  // Event listener to close the autocomplete list when clicking outside
  document.addEventListener("click", function (e) {
    if (e.target !== destinationInput && e.target !== autocompleteList) {
      autocompleteList.style.display = 'none';
    }
  });
});
