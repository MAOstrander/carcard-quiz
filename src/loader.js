"use strict";

var inventory = [];
var fillInventory = function(data) {
  data.forEach(function(thing){
    inventory.push(thing);
  });
};

var getInventory = function(){
  return inventory;
};

var loadInventory = function(){
  return new Promise(function(resolve, reject) {
    var loader = new XMLHttpRequest();
    loader.open('GET', 'inventory.json');
    loader.send();
    loader.addEventListener('load', function(event){
      var data = JSON.parse(event.target.responseText).cars;
      fillInventory(data);
      resolve(inventory);
    });
  });
};

module.exports = {getInventory, loadInventory};
