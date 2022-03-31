import { useContext} from "react";
import { createContext, useState} from "react";


const CartContext = createContext();

const CartProvider = ({children}) =>{
    const [itemsInCart,setItemsInCart] = useState([])
     
    return(
        <CartContext.Provider value={{itemsInCart,setItemsInCart}} >
            {children}
        </CartContext.Provider>
    )
}
 
const useCart = () => useContext(CartContext);

export {useCart,CartProvider}