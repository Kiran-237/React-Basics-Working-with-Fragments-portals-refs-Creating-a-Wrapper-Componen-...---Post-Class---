const counterReducer = (state,action) =>{
  if(action.type === 'Inc'){
    return state+1;
  }
  if(action.type ==='Dec'){
    return state-1;
  }

}

export {counterReducer}
