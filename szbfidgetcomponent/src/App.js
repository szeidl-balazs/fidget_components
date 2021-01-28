import './App.css';
import BoxButtons from './components/boxbutton/BoxButtons';
import Counter from './components/counter/Counter';

function App() {  
    return (
      <div className="App">
        <h1>Click & Relax!</h1>
        <div className="wrapper">
          <BoxButtons /> 
          <Counter />     
        </div>              
      </div>
    );
}
export default App;

