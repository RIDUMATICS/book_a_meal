import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div>
        <p>React Setup is ready</p>
      </div>
    )
  }
}

const app = document.querySelector('#app');

ReactDOM.render(<App />, app);
