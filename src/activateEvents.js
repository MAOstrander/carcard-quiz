"use strict";
var funUtility = require("./functions");

var activateEvents = function() {
  var cards = document.querySelectorAll(".carCard");
  cards.forEach(function(card){
    card.addEventListener("click", function(){
      var userInput = document.querySelector("#userInput");
      userInput.value = "";
      userInput.focus();
      funUtility.resetCards(cards);
      funUtility.styleCard(card, "yarp");
      funUtility.bindText(card, userInput);
    });
  });
};

module.exports = activateEvents;
