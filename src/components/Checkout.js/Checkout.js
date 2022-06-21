import React from 'react';
import {useNavigate} from 'react-router-dom'
import { GrFormClose } from 'react-icons/gr'
import './Checkout.css'

function Checkout({cart,removeItem}) {
    const navigate = useNavigate()
    return (
        <div className='fixed-bottom'>
            <div className="bg-white text-dark py-3">
                <div className='container d-flex align-items-center'>
                    <h4 className='m-0'>Selected Items : </h4>                    
                    {
                        cart.map((obj)=>(
                            <div className='item-container' key={obj.id}>
                                <span className=' ms-3 item'>{obj.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className=' ms-3 item-remove'><button className='btn remove-item-btn' onClick={() => removeItem(obj.id)}><GrFormClose /></button></span></span>                            
                        </div>
                        ))
                    }                    
                    <div className="ms-auto">
                        <button className="btn btn-sm btn-success" type="submit" onClick = {()=>navigate('/Cart')}>Check Out</button>
                    </div>
                </div>            
            </div>
        </div>
    );
}

export default Checkout