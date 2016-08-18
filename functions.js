CarLot = (function(carLot){
  carLot.resetCards = function(cards){
    cards.forEach(function(card){
      card.classList.remove("yarp")
    })
  }
  carLot.styleCard = function(card, pink){
    card.classList.add("yarp")
  }
  carLot.mirrorText = function(card, userInput){
    userInput.value = card.querySelector("p").innerHTML
    userInput.addEventListener("keyup", function(){
      if (card.classList.contains("yarp")){
        card.querySelector("p").innerHTML = userInput.value
      }
    })
  }
  return carLot
})(CarLot);
