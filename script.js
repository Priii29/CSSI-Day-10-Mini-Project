let navbar = document.querySelector("#navbardrop");
let modal = document.querySelector('#modal-cart');

//navbar dropdown when hovered
navbar.addEventListener("mouseover", (e)=>{
	navbar.classList.toggle("is-active");
});

navbar.addEventListener("mouseout", (e)=>{
	navbar.classList.toggle("is-active");
});


//add to cart button
let cartItems = [];
function addItem(itemName) {
  if (cartItems.includes(itemName)) {
    console.log(itemName + " has already been added. :(");
		alert(itemName + "has already been added. You cannot add another :(");
    return;
  }
  console.log("Added item name: " + itemName);
  cartItems.push(itemName);
	alert("Added "+ itemName + " to your shopping cart!");
}





document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
    
    //this is so that the same element isn't added to the ul multiple times
    //it clears the ul so that when li are re added it appears as if nothing changed
    document.getElementById("cartList").innerHTML = "";
  }

	  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });
	
  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

});


let list = document.getElementById("cartList")
//making the array show up as ul in the modal
function makeUL() {
    cartItems.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
        console.log("Added " + item + " to unordered list.");
      	
    });
}


// food items
let plantain = document.querySelector("#plantain")
 

const inputField = document.querySelector("#searchbar");
inputField.addEventListener("change", (e) => {
  console.log("this works")
  let search = inputField.value;
  console.log(search);
  // test
  if (search.toLowerCase() === "nigerian") {
    plantain.classList.add("hidden");
  }

	inputField.value = "";
})

