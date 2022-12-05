import { useSelector , useDispatch} from 'react-redux';
import './App.css';

function App() {
  const counter=useSelector((state)=>state.counter);
  const Dispatch =useDispatch();
  const increment=()=>{
    Dispatch({type:'INC'});
  }
  const decrement=()=>{
    Dispatch({type:'DEC'}); 
  }
  return (
    <div >
      <h1>counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;
