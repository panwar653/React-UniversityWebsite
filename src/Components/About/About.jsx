import React from 'react'
import './About.css'
import about1 from '../../assets/about1.jpg'
import play1 from '../../assets/play1.jpg'



const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about1} alt="" className='about1'/>
            <img src={play1} alt="" className='play1' onClick={()=>{
              setPlayState (true)
            }}/>
        </div>
        <div className="about-right">
             <h3>About Universities</h3>
             <h2>Nuturing Tommorow's Leaders Today</h2>
             <p>University education refers to a level of education that is offered at universities. This type education normally follows upon a successful completion of education at secondary school.</p>
            <br />
             <p>University education takes high school, tertiary and college education to a higher level and students are required to major in a major field of study that will form their career once they graduate.</p>
             <br />
             

        </div>
    </div>
  )
}

export default About