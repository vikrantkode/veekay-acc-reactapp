import { createContext, useReducer, useContext } from "react"
import { authReducerFunction } from "../reducer/authReducerFunction"


const AuthContext = createContext()
const tokenDetails = localStorage.getItem("token")
const AuthProvider = ({children}) => {
const[state,dispatch] = useReducer(authReducerFunction,{
    encodedToken:tokenDetails,
})

return(
   < AuthContext.Provider value={{state,dispatch}}>
     {children}
   </AuthContext.Provider>
)
}

const useAuth = () => useContext(AuthContext)

export {useAuth, AuthProvider}