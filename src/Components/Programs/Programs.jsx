import React from 'react'
import './Programs.css'
import program1 from '../../assets/program1.jpg'
import program2 from '../../assets/program2.jpg'
import program3 from '../../assets/program3.jpg'
import glogo1 from '../../assets/glogo1.png'
import glogo2 from '../../assets/glogo2.png'
import glogo3 from '../../assets/glogo3.png'



const Programs = () => {
  return (
    <div className='programs'>

        <div className="program">
           <img src={program1} alt="" />
           <div className="caption">
            <img src={glogo1} alt="" />
            <p>Graduation Degree</p>
           </div>
        </div>

        <div className="program">
           <img src={program2} alt="" />
           <div className="caption">
            <img src={glogo2} alt="" />
            <p>Masters Degree</p>
           </div>
        </div>

        <div className="program">
           <img src={program3} alt="" />
           <div className="caption">
            <img src={glogo3} alt="" />
            <p>Post Graduation</p>
           </div>
        </div>

    </div>
  )
}

export default Programs