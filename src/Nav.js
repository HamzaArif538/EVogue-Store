import React from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import './Nav.css'

const Nav = () => {
return (
    <>
        <div className="free">
            
            <div className='icon'>
                    <FaTruckMoving /> 
            </div>
            <p> 
                Free Shipping for Orders upto Rs.1000 
            </p>
        </div>
    </>
)
}

export default Nav
