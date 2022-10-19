import logo from './Image/1560.png';
import './App.css';
import ToDo from './Components/ToDo';

function App() {
  return (
    <div className='App'>
      <div className='App-logo'>
        <h1>To-Do-List</h1>
        <img src={logo} className="logo" alt='logo' />
      </div>
      <div className='to-do-maib-container'>
        <h1>List</h1>
        
      </div>
    </div>
  );
}

export default App;
