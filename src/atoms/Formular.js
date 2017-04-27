import React, { Component } from 'react';

class Formular extends Component {
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
    var spazieren = ["Oh ja, ausgiebig.", "LOL da fuq?", "Eine kleine Runde.", "Mit Sicherheit nicht."];
    var restaurants = ["Coco Thai",  "Es ist Dönerstag", "Vapiano lol", "Tawarayayay", "Ede Vesperbot", "Bonobo", "BE WE IH TE", "Auf zum Inder!", "Stones", "Soul Kitchen"];
    this.NeedRemoved();
    this.printAnswer(".input", restaurants);
    this.printAnswer(".walk", spazieren);
  };
  render() {
    return (
      <div id="remove">
        <section className="buttonWrap">
          <button role="button" onClick={this.click.bind(this)}>Jetzt unbedingt<br />HIER KLICKEN</button>
        </section>
      </div>
    );
  }
};

export default Formular;