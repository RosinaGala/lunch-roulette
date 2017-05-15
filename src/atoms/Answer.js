import React, { Component } from 'react';

class Answer extends Component {
  componentDidMount() {
      var spazieren = ["Oh ja, ausgiebig.", "LOL nein.", "Eine kleine Runde.", "Mit Sicherheit nicht."];
      this.changeBackground();
      this.printAnswer(".input", this.duration());
      this.printAnswer(".walk", spazieren);
  }
  //generates restaurant output depending on checked time span
  duration = () => {
    var short = ["Ede", "Stones"];
    var medium = ["Coco Thai", "Atelierfrankfurt", "zur Insel", "Auf ins Dönerparadies", "Vapiano lol", "Tawarayaya", "Bun Bo", "Indian Curry House", "Quantum", "Soul Food Factory"];
    var long = ["Best Woscht in Town", "Aroydee", "Das Leben ist schön", "Frankfurter Küche", "Jamies Burger", "Oosten", "Himalaya-Laternchen"];
    if (document.getElementById("short").checked) {
      //short radio button is checked
      let duration = short
      return duration;
    }
    else if (document.getElementById("medium").checked) {
      //medium radio button is checked
      let duration = medium.concat(short);
      return duration;
    }
    else if (document.getElementById("long").checked) {
      //long radio button is checked
      let duration = long.concat(short, medium);
      return duration;
    }
  };
  //generates random number
  winner =  (min, max) => Math.floor(Math.random() * (max - min));
  // gets target element and fills in random winner output depending on the chosen array
  printAnswer = (target, array) => document.querySelector(target).innerHTML = array[this.winner(0, array.length)];
  changeBackground = () => {
    var body = document.getElementsByTagName("body")[0];
    body.className += "result";
  };

  render() {
    return (
        <section id="answer">
          <div className="input"></div>
          <div className="input">
            <span>und spazieren? </span>
            <span className="walk"></span>
          </div>
        </section>
    );
  }
};

export default Answer;