import './App.css';
import { useState } from 'react';
/*import NavBar from './components/NavBar/NavBar';
import Login from './components/LogIn/logIn';*/
import TaskForm from './components/TaskForms/TaskForms';
import TaskList from './components/TaskList/TaskList';
function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks, { ...task, completed: false }]);
  };

  const markTaskCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  return (
    <div className="Main-Container">
      <h1>To-Do List</h1>
      <div className='Card-Container'>
        <TaskForm addTask={addTask}/>
        <TaskList tasks={tasks} markTaskCompleted={markTaskCompleted}/>
      </div>
    </div>
  );   
}

export default App;
