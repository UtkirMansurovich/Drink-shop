import React, {createContext, useState, useEffect} from 'react';

const AppContext = createContext();

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppProvider = ({children}) => {

    const [array, setArray] = useState([])
    const [searchItem, setSearchItem] = useState('a')
         
    const getCocktail = async () => {
        const response = await fetch(`${url}${searchItem}`)
        const data = await response.json()
        const { drinks } = data;
        setArray(drinks)
        console.log(drinks)
    }
    useEffect(() => {
        getCocktail()
    }, [searchItem])
    
        
    return (
        <AppContext.Provider value={{array , setSearchItem}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider, AppContext}
