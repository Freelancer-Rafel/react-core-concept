import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Saiful', 'Islam', 'Rafel', 'Rasel', 'Programmer'];
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premiere El', price: '$24.99'}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{backgroundColor: 'green', color: 'yellow', padding: '20px', borderRadius: '10px',fontSize:'40px'}}>I am a react person</p>
        <Users></Users>
        <Count></Count>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product = {product}></Product>)
        }
      </header>
    </div>
  );
}

function Count() {
  const [count, setCount] = useState([]);
  const btnStyle={
    color: 'white',
    backgroundColor: 'green',
    padding: '10px',
    fontSize: '20px',
    fontWight: 'bold',
    borderRadius: '5px'
  }
  const btnStylee={
    color: 'white',
    backgroundColor: 'red',
    padding: '10px',
    marginLeft: '20px',
    fontSize: '20px',
    fontWight: 'bold',
    borderRadius: '5px'
  }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => {setCount(count + 1)}} style={btnStyle}>Increase</button>
      <button onClick={() => {setCount(count - 1)}} style={btnStylee}>Decrease</button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      {
        users.map(user => <li>{user.name}</li>)
      }
      <h4>Dynamic Email</h4>
      {
        users.map(user => <li>{user.email}</li>)
      }
    </div>
  )
}


function Product(props) {
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}


// function Person(props) {
//   const bodyStyle={
//     color: 'red',
//     backgroundColor: 'green',
//     margin: '10px',
//     padding: '20px',
//     fontSize: '30px',
//     borderRadius: '15px',
//     width : '400px'
//   }
//   return (
//     <div style={bodyStyle}>
//       <h3>My Name: {props.name}</h3>
//       <p>My Profession: {props.job}</p>
//     </div>
//   )
// }

export default App;
