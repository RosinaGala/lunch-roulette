import React, { Component } from 'react';

class Formular extends Component {
  constructor(props){
    super(props);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleClick= this.handleClick.bind(this);
    this.state = {
      selectedOption: 'medium'
    };
};
  //generates restaurant output depending on checked time span
  getDuration = () => {
    const short = ["Ede", "Stones"];
    const medium = [...short, "Coco Thai", "Atelierfrankfurt", "zur Insel", "Auf ins Dönerparadies", "Vapiano lol", "Tawarayaya", "Bun Bo", "Indian Curry House", "Quantum", "Soul Food Factory"];
    const long = [...medium, "Best Woscht in Town", "Aroydee", "Das Leben ist schön", "Frankfurter Küche", "Jamies Burger", "Oosten", "Himalaya-Laternchen"];
    if (document.getElementById("short").checked) {
      let duration = short
      return duration;
    }
    else if (document.getElementById("medium").checked) {
      let duration = medium;
      return duration;
    }
    else if (document.getElementById("long").checked) {
      let duration = long;
      return duration;
    }
  };
handleClick(e) {
  const result = this.getDuration();
  this.props.handler(result);
};
handleOptionChange(e) {
  this.setState({
    selectedOption: e.currentTarget.value
  });
};
  render() {
    return (
      <form> 
        <section className="formular">
            <p>
            <input type="radio" name="time" id="short" value="short" checked={this.state.selectedOption === 'short'} onChange={this.handleOptionChange}  />
            <label htmlFor="short">asapst weiter&shy;arbeiten</label>
            </p>
            <p>
            <input type="radio" name="time" id="medium" value="medium" checked={this.state.selectedOption === 'medium'} onChange={this.handleOptionChange} />
            <label htmlFor="medium">normal, business as usual</label>
            </p>
            <p>
            <input type="radio" name="time" id="long" value="long" checked={this.state.selectedOption === 'long'} onChange={this.handleOptionChange}  />
            <label htmlFor="long">mal entspannt abloungen</label>
            </p>
        </section>
        <section className="buttonWrap">
          <button role="button" type="button" onClick={this.handleClick} value="Submit">Jetzt unbedingt<br />HIER KLICKEN</button>
        </section>
      </form>
    );
  }
};

export default Formular;