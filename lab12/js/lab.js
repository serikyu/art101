// index.js - JavaScript Events and Forms
// Author: Ren Buendia
// Date: 5/22/2025

function sortingHat(str) {
  let length = str.length;
  let mod = length % 4;

  if (mod === 0) {
    return {
      house: "Gryffindor",
      description: "you're the type of person who likes to stand up for the little guy, challenges authority, has a tendency to act first and think later, is known as a class clown and takes board games very seriously",
      image: "img/Gryffindor-Logo.png"
    };
  } else if (mod === 1) {
    return {
      house: "Ravenclaw",
      description: "you're the type of person who has a strong moral compass, always works hard, is the most loyal friend, knows it is the taking part that counts and always has the best snacks",
      image: "img/Ravenclaw-Logo.png"
    };
  } else if (mod === 2) {
    return {
      house: "Hufflepuff",
      description: "you're the type of person who analyses everything, is an overachiever, can be described as away with the fairies, is not afraid to be an individual and has a head stuffed full of interesting facts",
      image: "img/Hufflepuff-Logo.png"
    };
  } else {
    return {
      house: "Slytherin",
      description: "you are most likely ambitious, shrewd and possibly destined for greatness. We can imagine you're the kind of person who is always one step ahead, has a dark sense of humour, thinks reputation is important, takes pride in their appearance and doesn't let anyone see their soft side",
      image: "img/Slytherin-Logo.png"
    };
  }
}

// Button click event
$("#button").click(function () {
  let name = $("#input").val();
  let result = sortingHat(name);

  let outputHtml = `
    <div class="result">
      <h3>The Sorting Hat has sorted you into ${result.house}!</h3>
      <p>${result.description}</p>
      ${result.image ? `<img src="${result.image}" alt="${result.house} Logo" width="300">` : ""}
    </div>
  `;

  $("#output").append(outputHtml);
});
