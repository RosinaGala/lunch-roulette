var short = ["Ede", "Stones", "Gref-Völsing"];
  medium = ["Coco Thai", "Auf ins Dönerparadies", "Vapiano lol", "Tawarayaya", "Bun Bo", "Indian Curry House", "Quantum", "Soul Food"];
  long = ["Best Woscht in Town", "Das Leben ist schön"];

  spazieren = ["Oh ja, ausgiebig.", "LOL nein.", "Eine kleine Runde.", "Mit Sicherheit nicht."];

  body = document.getElementsByTagName("body")[0];

  //generates restaurant output depending on checked time span
  duration = function () {
    if (document.getElementById("short").checked) {
      //short radio button is checked
      var duration = short
      return duration;
    }
    else if (document.getElementById("medium").checked) {
      //medium radio button is checked
      var duration = medium.concat(short);
      return duration;
    }
    else if (document.getElementById("long").checked) {
      //long radio button is checked
      var duration = long.concat(short, medium);
      return duration;
    }
  };

  //generates random number
  var winner = function (min, max) {
    return Math.floor(Math.random() * (max - min));
  };

  // show answer onclick
  button = document.getElementById('btn');

  button.onclick = function () {
    document.getElementById("formular").style.display = "none";
    document.getElementById("btn").style.display = "none";
    document.getElementById("answer").style.display = "flex";
    body.style.backgroundImage = "url(2.jpg)";
    printAnswer(".input", duration());
    printAnswer(".walk", spazieren);
  };

  // gets target element and fills in random winner output depending on the chosen array
  printAnswer = function (target, array) {
    document.querySelector(target).innerHTML = array[winner(0, array.length)];
  };