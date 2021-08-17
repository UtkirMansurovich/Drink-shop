import React, {useContext} from 'react'
import { AppContext } from '../context'
import Navbar from './Navbar';
import { useParams } from 'react-router';

const Details = () => {
    const paramsId = useParams() 


    console.log()
    const {array} = useContext(AppContext);
     const detailobj = array.find( el => el.idDrink === paramsId.id )
    console.log(detailobj)
        return (
        <div>
            <Navbar/>
            <div className="containerDetails">
                <div className="rowDetails">
                  <h1>{detailobj.strDrink}</h1>
                  <div className="cardDetails">
                      <div>
                        <img src={detailobj.strDrinkThumb} alt="Photo" />
                      </div>
                      <div>
                          <p className="dateils-p"><span className="font">Name :</span></p>
                          <p className="dateils-p"><span className="font">Category :</span></p>
                          <p className="dateils-p"><span className="font">Info :</span></p>
                          <p className="dateils-p"><span className="font">Glass :</span></p>
                          <p className="dateils-p"><span className="font">Instruction :</span></p>
                          <p className="dateils-p"><span className="font">Ingrediens :</span></p>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Details
