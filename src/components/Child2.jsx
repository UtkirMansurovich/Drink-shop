import React, {useContext} from 'react'
import {AppContext} from '../context'
import { Link } from 'react-router-dom';

const Child2 = () => {

    const {array} = useContext(AppContext);

    const newData = array.map(el=>{
        return(
                <div className="box">
                    <div>
                        <img src={el.strDrinkThumb}/>
                    </div>
                    <div className="card">
                        <h1>{el.strDrink}</h1>
                        <h4>{el.strGlass}</h4>
                        <p>{el.strAlcoholic}</p>
                        <button> <Link to={`/details/${el.idDrink}`} className="buttonA">Details</Link> </button>
                    </div>
                </div>
            )
        })

        return(
            <div className="container">
                <h1 className="mailH1">Cocktails</h1>
                <div className="row">
                    {newData}        
                </div>
            </div>
            
        )
}

export default Child2
