import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import Mehfil from './Mehfil.json'

function Beverages({addToCart}) 
{    
            
    return (
        <div className="item beverages">
            <h3>Beverages</h3>                                                    
                {
                    Mehfil.foodMenu[0].Beverages.map((obj)=>(
                    <div className="card mt-4 mb-3" style={{ maxWidth: '540px' }} key={obj.id}>
                        <div className="row g-0">
                            <div className="col-md-3">
                                <img src={obj.image} className="img-fluid dish-img" alt="" />
                            </div>
                            <div className="col-md-9">
                                <div className="card-body">
                                    <h5 className="card-title">{obj.name}</h5>
                                    <p className="stars"><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /><BsStar /><span className="text-muted" >{obj.votes}</span></p>

                                        <p className="card-text"><small className="text-muted">₹{obj.cost}</small></p>

                                        <div className="addToCart">
                                            <button className='btn my-btn' onClick={() => addToCart(obj)}>Add<span>+</span></button>
                                        </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                }                            
        </div>
    )
}

export default Beverages