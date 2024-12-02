import React, { useRef } from 'react'
import './Testimonials.css'
import right1 from '../../assets/right1.svg'
import left1 from '../../assets/left1.svg'
import t1 from '../../assets/t1.jpg'
import t2 from '../../assets/t2.jpg'
import t3 from '../../assets/t3.jpg'
import t4 from '../../assets/t4.jpg'




const Testimonials = () => {

    const slider = useRef();
     let tx = 0;
    const slideForward = () => {
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }


  return (
    <div className='testimonials'>
      <img src={right1} alt="" className='right1' onClick={slideForward} />
      <img src={left1} alt="" className='left1' onClick={slideBackward}/>
      
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={t1} alt="" />
                        <div>
                            <h3>Marinna Laa </h3>
                            <span>Cambride, USA</span>
                        </div>
                    </div>
                    <p>
                    Universities play a pivotal role in shaping the future by empowering minds and inspiring innovation. At the heart of education lies the mission to unlock potential, cultivate creativity, and nurture leaders who will drive change on a global scale.
                    </p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={t2} alt="" />
                        <div>
                            <h3>Nitta Shell </h3>
                            <span>Cambride, USA</span>
                        </div>
                    </div>
                    <p>
                    Through a tradition of excellence and a commitment to inclusivity, universities create environments where students thrive, dreams come alive, and diverse voices unite. They are places where knowledge meets opportunity, and research paves the way.
                    </p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={t3} alt="" />
                        <div>
                            <h3>Vinaa Guppi </h3>
                            <span>Cambride, USA</span>
                        </div>
                    </div>
                    <p>
                    Universities are more than just institutions of learning; they are hubs of innovation, tradition, and transformation. They empower minds and shape the future by fostering a culture of excellence, where knowledge meets innovation and students are inspired to.
                    </p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={t4} alt="" />
                        <div>
                            <h3>Milla Sekh </h3>
                            <span>Cambride, USA</span>
                        </div>
                    </div>
                    <p>
                    They celebrate diversity, embrace inclusivity, and provide a space where every dream can grow and every voice matters. Through groundbreaking research and the pursuit of truth, universities expand horizons and create knowledge that transforms lives and communities
                    </p>
                </div>
            </li>
        </ul>
      </div>

    </div>
  )
}

export default Testimonials