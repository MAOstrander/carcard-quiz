var CarLot = (function(myLot){
  var inventory = [];
  var fillInventory = function(data) {
    data.forEach(function(thing){
      inventory.push(thing);
    })
  }

  myLot.getInventory = function(){
    return inventory;
  }

  myLot.loadInventory = function(){
    return new Promise(function(resolve, reject) {
      var loader = new XMLHttpRequest();
      loader.open('GET', 'inventory.json');
      loader.send();
      loader.addEventListener('load', function(event){
        data = JSON.parse(event.target.responseText).cars;
        fillInventory(data);
        resolve(inventory);
      })
    })
  }

  return myLot;
})(CarLot || {})
