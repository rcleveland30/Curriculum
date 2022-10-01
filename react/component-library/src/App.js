import data from './mocks/data.json'
import Navbar from './components/navbar';
import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar navs={data}/>
    </div>
  );
}

export default App;
