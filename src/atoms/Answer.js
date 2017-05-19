import React, { Component } from 'react';

class Answer extends Component {
    componentDidMount() { 
      const spazieren = ["Oh ja, ausgiebig.", "LOL nein.", "Eine kleine Runde.", "Mit Sicherheit nicht."]; 
      const restaurants = ["Coco Thai",  "Es ist Dönerstag", "Vapiano lol", "Tawarayayay", "Ede Vesperbot", "Bonobo", "BE WE IH TE", "Auf zum Inder!", "Stones", "Soul Kitchen"];
      this.changeBackground(); 
      this.printAnswer(".input", restaurants); 
      this.printAnswer(".walk", spazieren); 
  } 

  //generates random number
  randomNumber =  (min, max) => Math.floor(Math.random() * (max - min));

  // gets target element and fills in random winner output depending on the chosen array
  printAnswer = (target, array) => document.querySelector(target).innerHTML = array[this.randomNumber(0, array.length)];
  
  changeBackground = () => {
    let body = document.getElementsByTagName("body")[0];
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