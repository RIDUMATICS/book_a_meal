import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import '../style/app.scss';
import Home from './components/Home';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <main>
        <Menu />
        <form>
          
        </form>
      </main>
    )
  }
}

const app = document.querySelector('#app');

ReactDOM.render(<App />, app);
