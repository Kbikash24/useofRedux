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
 const increament5Handler  =()=>{
  dispatch({type:'increament-5'})
 }
 const decreament5Handler =()=>{
  dispatch ({type:'decreament-5'})
 }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div><button onClick={increamentHandler}>INCREAMENT</button>
      <button onClick={increament5Handler}>INCREAMENT-5</button>
      <button onClick={decreamentHandler}>DECREAMENT</button></div>
      <button onClick={decreament5Handler}>DECREAMENT-5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
