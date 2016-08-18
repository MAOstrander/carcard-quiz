"use strict";

var resetCards = function(cards){
  cards.forEach(function(card){
    card.classList.remove("yarp");
  });
};
var styleCard = function(card, styleType){
  card.classList.add(styleType);
};
var bindText = function(card, userInput){
  userInput.value = card.querySelector("p").innerHTML;
  userInput.addEventListener("keyup", function(){
    if (card.classList.contains("yarp")){
      card.querySelector("p").innerHTML = userInput.value;
    }
  });
};

module.exports = {resetCards, styleCard, bindText};
