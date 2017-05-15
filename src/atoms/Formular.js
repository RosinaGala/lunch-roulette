import React, { Component } from 'react';

class Formular extends Component {
  constructor(props){
    super(props);
    this.click = this.click.bind(this);
    this.state = {
      selectedOption: 'medium'
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
};
  click = (e) => {
    e.preventDefault();
    this.props.handler();
  };
  handleOptionChange(e) {
  this.setState({
    selectedOption: e.currentTarget.value
  });
};
  render() {
    return (
      <div id="remove">
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
          <button role="button" onClick={this.click}>Jetzt unbedingt<br />HIER KLICKEN</button>
        </section>
      </div>
    );
  }
};

export default Formular;