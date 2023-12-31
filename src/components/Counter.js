import classes from './Counter.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';

const Counter = () => {
  const counter =useSelector(state =>state.counter)
  const dispatch= useDispatch();
  const toggleCounterHandler = () => {};
 const increamentHandler  =()=>{
  dispatch({type:'increament'})
 }
 const decreamentHandler =()=>{
  dispatch ({type:'decreament'})
 }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div><button onClick={increamentHandler}>INCREAMENT</button>
      <button onClick={decreamentHandler}>DECREAMENT</button></div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
