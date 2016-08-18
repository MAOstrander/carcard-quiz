"use strict";

var loader = require("./loader"),
    activateEvents = require("./activateEvents");

function populatePage (inventory) {
  var output = document.querySelector(".output");
  var results = "";
  inventory.forEach(function(car, index){
    if (index % 3 === 0) {
      results += `<div class="row">`;
    }
    results += `
    <div class="col-md-4 carCard" style="border-color: ${car.color}">
      <h2>${car.make}</h2>
      <h3>${car.model}</h3>
      <h3>${car.year}</h3>
      <h3>$${car.price}</h3>
      <h4>${car.color}</h4>
      <h4>${car.purchased}</h4>
      <p>${car.description}</p>
    </div>
    `;

    if ((index + 1) % 3 === 0) {
      results += `</div>`;
    }
  });
  output.innerHTML = results;
}

loader.loadInventory()
.then(function(dataStuff){
  populatePage(dataStuff);
  activateEvents();
});
