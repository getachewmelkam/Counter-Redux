import {createStore} from 'redux';
const reducerfn=(State={counter:0 },action)=>{

if(action.type==="INC"){
    return{

       counter:State.counter +1};
    
}if(action.type==="DEC"){
    return{

       counter:State.counter -1};
    
}


    return State;
};




const store = createStore(reducerfn);
export default store;