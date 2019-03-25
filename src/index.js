import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
            <Header/>
            Hey I'm someone who has started developing the react application.
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));