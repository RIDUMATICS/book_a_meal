import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import '../style/app.scss';
import logo from '../public/images/logo.png';

class App extends Component {
  render() {
    return (
      <main>
        <nav>
          <div>
            <img src={logo} alt="iya-pato logo"/>
            IYA PATO
          </div>
          <ul>
            <li>Sign Up</li>
            <li>LogIn</li>
          </ul>
        </nav>
      </main>
    )
  }
}

const app = document.querySelector('#app');

ReactDOM.render(<App />, app);
