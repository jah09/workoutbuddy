import { createContext, useReducer} from 'react';

export const WorkoutsContext=createContext();
export const workoutsReducer=(state,action)=>{
    switch(action){
        case 'SET_WORKOUTS':
            return{
                workouts:action.payload
            }
        case 'CREATE_WORKOUT':
            return {
              workouts: [action.payload, ...state.workouts]
            };
        default:
            return state
    }
}
//provide the context to our application tree
export const WorkoutsContextProvider = ({ children }) => {
    const {state,dispatch}=useReducer(workoutsReducer,{
        workouts:null
    });
  //  dispatch({type:'SET_WORKOUTS',payload:[{},{}]})
  return (
    <WorkoutsContext.Provider value={{  state ,dispatch}}>
      {children}
    </WorkoutsContext.Provider>
  );
};