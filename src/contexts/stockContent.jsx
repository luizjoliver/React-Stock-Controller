import { createContext, useState } from "react";
import PropTypes from "prop-types"

export const StockContext = createContext({})

StockContextProvider.propTypes = {
  children: PropTypes.node
}

export function StockContextProvider ({children}){
    const [items,setItems] = useState(() =>{
        const storedItems = localStorage.getItem("obc-react-stock")
        if(!storedItems) return []
        const items = JSON.parse(storedItems)
        items.forEach((item) =>{
            item.createdAt = new Date(item.createdAt)
            item.updatedAt = new Date(item.updatedAt)
        })
        return items
    })
    
    const addItem = (item) =>{
        setItems((currentState) =>{
            const updatedItem = [item,...currentState]
            localStorage.setItem("obc-react-stock",JSON.stringify(updatedItem))
            return updatedItem
        })
    }
    const deleteItem = (itemId) =>{
        setItems((currentState) =>{
            const removeItem = currentState.filter(item => item.id !== itemId)
           localStorage.setItem("obc-react-stock",JSON.stringify(removeItem))
           return removeItem
        })
    }
    const updateItem = (itemId,newAttributes) =>{
        setItems((currentState) =>{
            const itemIndex = currentState.findIndex(item => item.id === Number(itemId))
            const updatedItems = [...currentState]
            Object.assign(updatedItems[itemIndex], newAttributes,{updatedAt:new Date()})
            localStorage.setItem("obc-react-stock", JSON.stringify(updateItem))
            return updatedItems
        })
    }
    const getItem = (itemId) =>{
        return items.find(item => item.id === Number(itemId))
    }

    const stock = {
        items,
        addItem,
        getItem,
        deleteItem,
        updateItem
    }
    return(
        <StockContext.Provider value={stock}>
            {children}
        </StockContext.Provider>
    )
}
