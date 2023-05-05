import './App.css';
//import LogIn from './components/LogIn/logIn';
import NavBar from './components/NavBar/NavBar';
import LogInDataBase from './components/LogIn/LogInDataBase';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <button onClick={LogInDataBase}>Log In</button>
    </div>
  );   
}

export default App;
