import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import LuckyRestaurant from './Lucky_Restaurant.json'

function Cakes({addToCart}) {
    return (
        <div className="item ckaes">
            <h3>Cakes</h3>
            {
                LuckyRestaurant.foodMenu[0].Cakes.map((obj) => (
                    <div className="card mt-4 mb-3" style={{ maxWidth: '560px' }} key={obj.id}>
                        <div className="row g-0">
                            <div className="col-md-3">
                                <img src={obj.image} className="img-fluid dish-img" alt="" />
                            </div>
                            <div className="col-md-9">
                                <div className="card-body">
                                    <h5 className="card-title">{obj.name}</h5>
                                    <p className="stars"><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /><BsStar /><span className="text-muted" >{obj.votes}</span></p>

                                    <p className="card-text"><small className="text-muted">₹{obj.cost}</small></p>
                                    <p className="card-text description">{obj.description}</p>

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

export default Cakes