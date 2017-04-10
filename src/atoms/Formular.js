import React, { Component } from 'react';

class Formular extends Component {
  
  render() {
    return (
      <div>
        <section id="formular">
          <form action="">
            <input type="radio" name="time" id="short" value="short"/>
            <label>kurz</label>
            <input type="radio" name="time" id="medium" value="medium" checked />
            <label>mittel</label>
            <input type="radio" name="time" id="long" value="long" />
            <label>lang</label>
          </form>
        </section>
        <section id="btn">
          <a><span>Jetzt unbedingt<br />HIER KLICKEN</span></a>
        </section>
      </div>
    );
  }
};

export default Formular;