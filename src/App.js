

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function Productssss (props) {

 
  return  (
    <div style={{backgroundColor: "lightgrey", margin: '20px', padding: "20px", borderRadius: '15px', border: '2px solid red'}}>
      <h3> Name:{props.products.names} </h3>

      <h5>{props.products.price} </h5>
      <button>Buy Now</button>
    </div>
  )
  
}

function Person (props) {
  
  return (
   
  <div style={{border: '4px solid ', margin: '10px',padding: '10px', borderRadius: '16px', backgroundColor: 'red'}}>


   
 <h2>name: Sakib al hasan  </h2>
 <h4>Bangladesh national cricket team captin   {props.food}</h4>
  <h3>Hero of the year {props.name} </h3>
  </div>
  )
}

// SetCount Addding

function Ccc() {
  const[count, setCount] = useState(13);
  const nnn = () => setCount(count + 1);
  //two different mathoods
  const aaa = () => {
    const vv = count - 1;
    setCount (vv);
  }
  return (
    <div>
      <h3>My product prise, thats the beauty of react.Small but efficient   {count} </h3>
      <button onClick={nnn}>Incress</button>
      <button onClick={aaa}>Deceress</button>
    </div>
  )
}

const MyComponent = (props) => {
  const [eventData, setEventData] = useState('25');

  

  const handleEvent = (event) => {
    setEventData(event.target.value);
  };

  return (
    <div>
      <h4>my new evenHandeller {props.aa} </h4>
      <input type="text" onChange={handleEvent} />
      <button >Enter</button>
      <p>Value: {eventData}</p>
    </div>
  );
};


//setCount add again
function Add(props) {
  const [goo, letsgo] = useState(22)
  return (
    <div>
      <h2>My product cost {goo} </h2>

    </div>
  )
}
  


function App() {

    const nayok = ['sakib Khan','bappiBro', 'adnanAtik','heroAlam', 'JayedKhan', 'saimonBro', 'khanHelal']

  const product = [{
    names: 'Photoshop', price: '$90.99',
    // names: 'Photo', price: '$70.99',
    // names: 'Pho', price: '$40.99'
  }]

  // map for products
  //   const hero = product.map(s => s.names);
  //   console.log(hero);


  
  
  
  return (
    <div className="App">
      <header className="App-header">

        <p>I am a react person</p>
          <Add na = ' sofi'></Add>

        <Person food = 'jhalmoris'></Person>
        <Person food = 'jhalmuri'></Person>
        <Person name = 'tahsan' food = 'jhalmuri'></Person>
        <Person ></Person>
        <Person ></Person>
        <MyComponent aa="reveled"></MyComponent>

        {/* <Productssss products ={product[0]} ></Productssss> */}

        {/* {
              
              product.map (name => <li> {name.names} </li> )
            } */}




        <Productssss products ={product[0]}></Productssss>
        <Productssss products ={product[0]}></Productssss>

        {/* i want make a nayok list */}
        <Ccc vv = 'jhankarMaahbub 0'></Ccc>
               
                

      
        <ul>
          <h3>making some of dynamic nayoks</h3>
          {/* making dynamic of nayok */}
            {
              
              nayok.map (mm => <li> {mm} </li> )
            }
       <p>They are static nayoks</p>
            <li>{nayok[0]} </li>
            <li>{nayok[1]} </li>
            <li>{nayok[2]} </li>
            <li>{nayok[3]} </li>
        </ul>
        

      


    



        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      
        <p>
          Lorem, ipsum dolor sit amet conseloremque sapiente, ullam temporibus recusandae   <h1>Ferdous
            </h1> 

          <h1>Hello, world!</h1>




      
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        




      </header>
      <person></person>
    </div>
  );
}




export default App;
