const authReducerFunction = (state,action) => {
 switch(action.type){
    case "SUCCESS":{
        return {...state, encodedToken: action.payload, isLoggedIn:true}
     }
     case "SET_FIRST_NAME":{
         return {...state, firstName: action.payload}
     }
     case "SET_LAST_NAME":{
         return {...state, lastName: action.payload}
     }
     case "SET_EMAIL":{
         return {...state, email: action.payload}
     }
     case "SET_PASSWORD":{
         return {...state, password: action.payload}
     }
     case "SET_CONFIRM_PASSWORD":{
         return {...state, confPassword: action.payload}
     }
     case "LOGOUT":{
         return {...state, encodedToken:"", user:"", isLoggedIn:false}
     }
     default:
         return state;
 }
}

export {authReducerFunction}