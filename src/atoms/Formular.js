import React, { Component } from 'react';

class Formular extends Component {
  //generates restaurant output depending on checked time span
  duration = function () {
    var short = ["Ede", "Stones"];
    var medium = ["Coco Thai", "Atelierfrankfurt", "zur Insel", "Auf ins Dönerparadies", "Vapiano lol", "Tawarayaya", "Bun Bo", "Indian Curry House", "Quantum", "Soul Food Factory"];
    var long = ["Best Woscht in Town", "Aroydee", "Das Leben ist schön", "Frankfurter Küche", "Jamies Burger", "Oosten", "Himalaya-Laternchen"];
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
  winner = function (min, max) {
    return Math.floor(Math.random() * (max - min));
  };
  // gets target element and fills in random winner output depending on the chosen array
  printAnswer = function (target, array) {
    document.querySelector(target).innerHTML = array[this.winner(0, array.length)];
  };
  removeStuff = function (which, how) {
    document.getElementById(which).style.display = how;
  };
  NeedRemoved = function () {
    var body = document.getElementsByTagName("body")[0];
    this.removeStuff("remove", "none");
    this.removeStuff("answer", "flex");
    body.className += "result";
  };
  click = function(){
    var spazieren = ["Oh ja, ausgiebig.", "LOL nein.", "Eine kleine Runde.", "Mit Sicherheit nicht."];
    this.NeedRemoved();
    this.printAnswer(".input", this.duration());
    this.printAnswer(".walk", spazieren);
  };
  render() {
    return (
      <div id="remove">
        <section id="formular">
          <div className="form">
            <p>
            <input type="radio" name="time" id="short" value="short"/>
            <label htmlFor="short">kurz</label>
            </p>
            <p>
            <input type="radio" name="time" id="medium" value="medium" defaultChecked />
            <label htmlFor="medium">mittel</label>
            </p>
            <p>
            <input type="radio" name="time" id="long" value="long" />
            <label htmlFor="long">lang</label>
            </p>
          </div>
        </section>
        <section id="btn">
          <button href="#" onClick={this.click.bind(this)}><span>Jetzt unbedingt<br />HIER KLICKEN</span></button>
        </section>
      </div>
    );
  }
};

export default Formular;