//Project idea and tutorial from https://github.com/john-smilga/javascript-basic-projects/tree/master/08-menu
const menu =[
  {
    id: 1,
    title:"Strawberry Melt",
    category: "Cone",
    price: 5,
    img: "./images/686A7190.JPG",
    desc: ''
  }, 
  {
    id: 2,
    title:"Gummy Party",
    category: "Cone",
    price: 5,
    img: "./images/orangeleaf.png",
    desc: ''
  }, 
  {
    id: 3,
    title:"Treasure trove",
    category: "Crunch",
    price: 5,
    img: "./images/pexels-anikayln-1695175-6675419.jpg",
    desc: ''
  }, 
  {
    id: 4,
    title:"Build-Your-Own",
    category: "Creations",
    price: 5,
    img: "./images/pexels-jj-jordan-44924743-8380252.jpg",
    desc: ''
  }, 
  {
    id: 5,
    title:"Fruit Paradise",
    category: "Fruity",
    price: 5,
    img: "./images/pexels-kpaukshtite-1591242.jpg",
    desc: ''
  }, 
  {
    id: 6,
    title:"Snow Angel",
    category: "Fruity",
    price: 5,
    img: "./images/pexels-nishantaneja-2955817.jpg",
    desc: ''
  }, 

];

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}

//Menu Button Functionality
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}