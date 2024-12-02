import React from 'react'
import './Contact.css'
import mail from '../../assets/mail.png'
import mail1 from '../../assets/mail1.svg'
import call1 from '../../assets/location1.svg'
import location1 from '../../assets/call1.svg'
import dark_arrow from '../../assets/dark_arrow.svg'



const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", 
        "79f57367-c8ca-475f-a481-d8b81800ed7f");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res)=>res.json());
    
      if (res.success) {
        console.log("Success".res);
        setResult(res.message);
        event.target.reset();
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
    };
  


  return (
    <div>
        <div className="contact">

            <div className="contact-col">
                 <h3>Send Us a Message <img src={mail} alt="" /></h3>
                 <p>Feel free to reach us at any time.Rooted in heritage yet driven by ambition, universities bridge the gap between tradition and modernity, preparing leaders for a global tomorrow. They celebrate diversity, embrace inclusivity, and provide a space where every dream can grow and every voice matters.  </p>

                 <ul>
                    <li> <img src={mail1} alt="" />Contact@greatStack.com</li>
                    <li><img src={call1} alt="" />+91-52364-78965</li>
                    <li><img src={location1} alt="" />Near vallina chowk, Aadarsh nagar, tree House,778908</li>

                 </ul>
            </div>

            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label> Your name</label>
                    <input type="text" name='name' placeholder='Enter your name' required/>
                    <label> Phone number</label>
                    <input type="tel" name='phone' placeholder='Enter your number' required/>
                    <label> Write your Message</label>
                    <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit Now <img src={dark_arrow} alt="" /></button>

                </form>

                <span>{result}</span>
            </div>

        </div>
    </div>
  )
}

export default Contact