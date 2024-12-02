import React from 'react'
import './Campus.css'
import c1 from '../../assets/c1.jpg'
import c2 from '../../assets/c2.jpg'
import c3 from '../../assets/c3.jpg'
import c4 from '../../assets/c4.jpg'
import dark_arrow from '../../assets/dark_arrow.svg'


const Campus = () => {
  return (
    <div className='campus'>
        <div className='gallery'>
            
        <img src={c1} alt="" />
        <img src={c2} alt="" />
        <img src={c3} alt="" />
        <img src={c4} alt="" />

        </div>
        <button className='btn dark-btn'>See more here <img src={dark_arrow} alt="" /></button>

    </div>
  )
}

export default Campus