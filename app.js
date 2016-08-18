function populatePage(inventory) {
  var outputDiv = document.getElementById("output")
    inventory.forEach(function(cars) {
    outputDiv.innerHTML += `
    <div class="col-md-4 carCard" style="border-color: ${cars.color}">
      <h1 class="display-2">Make: ${cars.make}</h1>
      <p>Model: ${cars.model}</p>
      <p>Year: ${cars.year}</p>
      <p>Price: ${cars.price}</p>
      <p>Color: ${cars.color}</p>
      <p>Available: ${cars.purchased}</p>
      <p>Description: ${cars.description}</p>
    </div>`
    })

  }

CarLot.loadInventory()
.then(function(dataStuff){
  populatePage(dataStuff)

})
