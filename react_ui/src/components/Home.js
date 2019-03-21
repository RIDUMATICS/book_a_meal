import React from 'react';
import icon1 from '../../public/images/1.png';
import icon2 from '../../public/images/2.png';
import icon3 from '../../public/images/3.png';
import Menu from './Menu';


const steps = [
  {
    img: icon1,
    altText: 'icon 1',
    title: 'Choose restaurant',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.'
  },
  {
    img: icon2,
    altText: 'icon 2',
    title: 'Select, what you love to eat',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.'
  },
  {
    img: icon3,
    altText: 'icon 3',
    title: 'Pickup or delivery',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.'
  }
]

const Steps = (props) => {
  return (
    <div>
      <img src={props.img} alt={props.altText} />
      <h3>{props.title}</h3>
      <p>{props.content}</p>      
    </div>
  )
}

export default () => {
  return (
    <main>
        <Menu />
        <header>
          <section>
            <h1>IYA PATO <br/>
              FOOD DELIVERY & SERVICE
            </h1>
            <form>
              <input type="text" placeholder="Type Place, City, Division"/>
              <p>or</p>
              <input type="text" placeholder="Restaurant Name"/>
              <input type="button" value="submit" />
            </form>
          </section>
        </header>
        <section role="how it works">
          <h2>How it Work</h2>
          <div className="our_steps">
            { steps.map( (step, index) => <Steps {...step} key={index}/>) }
          </div>
        </section>
        <footer>
          <p>IYA PATO &copy; 2019 <br/>Design by Ridumatics </p>
        </footer>
      </main>
  )
}
