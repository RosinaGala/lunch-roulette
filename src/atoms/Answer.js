import React, { Component } from 'react';

class Answer extends Component {
  componentDidMount() {
      var spazieren = ["Oh ja, ausgiebig.", "LOL nein.", "Eine kleine Runde.", "Mit Sicherheit nicht."];
      this.changeBackground();
      this.printAnswer(".input", this.props.duration);
      this.printAnswer(".walk", spazieren);
  };

  generateRandomNumber =  (min, max) => Math.floor(Math.random() * (max - min));

  // gets target element and fills in random winner output depending on the chosen array
  printAnswer = (target, array) => document.querySelector(target).innerHTML = array[this.generateRandomNumber(0, array.length)];
  
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