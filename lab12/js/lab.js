// index.js - JavaScript Events and Forms
// Author: Ren Buendia
// Date: 5/22/2025

function sortingHat(str) {
  let length = str.length;
  let mod = length % 4;

  if (mod === 0) {
    return "Gryffindor: you're someone who defends the underdog, questions authority, often leaps before looking, is known for joking around, and treats board games like serious business";
} else if (mod === 1) {
    return "Ravenclaw: you're a person with strong values, a dedicated worker, an incredibly loyal friend, someone who believes participation matters most, and you always bring the best snacks";
} else if (mod === 2) {
    return "Hufflepuff: you're analytical, a high achiever, a bit dreamy or whimsical, confidently unique, and full of fascinating trivia";
} else {
    return "Slytherin: you're probably driven and strategic, with the potential to do great things. You're often ahead of the curve, have a sharp wit, care about your image, dress with intention, and keep your softer side hidden";
}
}

$("#button").click(function () {
  let name = $("#input").val();
  let house = sortingHat(name);
  $("#output").append("<p class='result'>The Sorting Hat has sorted you into " + house + "!</p>");
});
