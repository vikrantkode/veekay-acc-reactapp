import { createContext, useReducer, useContext } from "react"
import { authReducerFunction } from "../reducer/authReducerFunction"


const AuthContext = createContext()

const AuthProvider = ({children}) => {
const[state,dispatch] = useReducer(authReducerFunction,{
    encodedToken:"",
})

return(
   < AuthContext.Provider value={{state,dispatch}}>
     {children}
   </AuthContext.Provider>
)
}

const useAuth = () => useContext(AuthContext)

export {useAuth, AuthProvider}