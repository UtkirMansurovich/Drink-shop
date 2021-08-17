import React , {useContext} from 'react'
import {AppContext} from '../context'

const Search = () => {
    const {setSearchItem} = useContext(AppContext)
    return (
        <div className="container">
            <div className="form">
                <label htmlFor="name">Search Your Favorite Cocktail</label>
                <input onChange={(e)=> setSearchItem(e.target.value)} type="text" name="name" placeholder="Search..."/>
            </div>
        </div>
        
    )
}

export default Search
