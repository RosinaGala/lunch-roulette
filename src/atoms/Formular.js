import React, { Component } from 'react';

class Formular extends Component {
  constructor(props){ 
    super(props); 
    this.handleClick= this.handleClick.bind(this); 
  }

  handleClick(e) { 
    this.props.handler(); 
  }; 
  
  render() {
    return (
      <div id="remove">
        <section className="buttonWrap">
          <button role="button" type="button" onClick={this.handleClick}>Jetzt unbedingt<br />HIER KLICKEN</button>
        </section>
      </div>
    );
  }
};

export default Formular;