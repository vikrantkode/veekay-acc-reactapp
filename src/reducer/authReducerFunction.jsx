const authReducerFunction = (state,action) => {
 switch(action.type){
     case "SUCCESS":{
        return {...state, encodedToken: action.payload}
     }

     default:
         return state;
 }
}

export {authReducerFunction}