import React, { Component } from 'react';

class Formular extends Component {
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
  removeStuff = (which, how) => document.getElementById(which).style.display = how;
  NeedRemoved = () => {
    var body = document.getElementsByTagName("body")[0];
    this.removeStuff("remove", "none");
    this.removeStuff("answer", "flex");
    body.className += "result";
  };
  click = () => {
    var spazieren = ["Oh ja, ausgiebig.", "LOL nein.", "Eine kleine Runde.", "Mit Sicherheit nicht."];
    this.NeedRemoved();
    this.printAnswer(".input", this.duration());
    this.printAnswer(".walk", spazieren);
  };
  render() {
    return (
      <div id="remove">
        <section className="formular">
            <p>
            <input type="radio" name="time" id="short" value="short"/>
            <label htmlFor="short">asapst weiter&shy;arbeiten</label>
            </p>
            <p>
            <input type="radio" name="time" id="medium" value="medium" defaultChecked />
            <label htmlFor="medium">normal, business as usual</label>
            </p>
            <p>
            <input type="radio" name="time" id="long" value="long" />
            <label htmlFor="long">mal entspannt abloungen</label>
            </p>
        </section>
        <section className="buttonWrap">
          <button role="button" onClick={this.click.bind(this)}>Jetzt unbedingt<br />HIER KLICKEN</button>
        </section>
      </div>
    );
  }
};

export default Formular;