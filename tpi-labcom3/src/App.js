import './App.css';
/*import NavBar from './components/NavBar/NavBar';
import Login from './components/LogIn/logIn';*/
import Cards from './components/Cards/Cards';

function App() {
  return (
    <div className="Main-Container">
      <h1>To-Do List</h1>
      <div className='Card-Container'>
        <Cards/>
      </div>
    </div>
  );   
}

export default App;
