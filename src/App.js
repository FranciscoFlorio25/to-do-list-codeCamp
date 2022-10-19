import logo from './Image/1560.png';
import './App.css';
import ToDoList from './Components/ToDoList';

function App() {
  return (
    <div className='App'>
      <div className='App-logo'>
        <h1>To-Do-List</h1>
        <img src={logo} className="logo" alt='logo' />
      </div>
      <div className='to-do-maib-container'>
        <h1>List</h1>
        <ToDoList/>
      </div>
    </div>
  );
}

export default App;
