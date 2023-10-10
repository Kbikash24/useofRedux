import { createStore } from 'redux'

const counterReducer=(state={counter:0},action)=>{
    if (action.type === 'increament'){
        return{
            counter:state.counter+2,
        }
    }

    if (action.type==='decreament'){
        return{
            counter:state.counter-2,
        }
    }
    if (action.type === 'increament-5'){
        return{
            counter:state.counter+5,
        }
    }

    if (action.type==='decreament-5'){
        return{
            counter:state.counter-5,
        }
    }
   return state;
}

const store=createStore(counterReducer);
export default store;