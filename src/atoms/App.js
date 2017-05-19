import React, { Component } from 'react';
import Header from './Header';
import Formular from './Formular';
import Answer from './Answer';

class App extends Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
        this.state = {
            showAnswer: false
        };
    }
    handler(result) {
       this.setState({
            showAnswer: true,
            result: result
        });
  }
  render() {
    return (
        <div>
            <Header />
            {this.state.showAnswer ? <Answer duration={this.state.result} /> : <Formular handler={this.handler} />}
        </div>
    );
  }
};

export default App;