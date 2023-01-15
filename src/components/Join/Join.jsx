import React from 'react';
import { useRef } from 'react';
import './Join.css';
import emailjs from '@emailjs/browser';


const Join = ()=>{

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_b1h63wb', 'template_saci9r4', form.current, 'OzxAbO8-Z5VPI7Pc6')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <div className="join" id="join-us">

            <div className="left-j">
                <hr />
                <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
                </div>

                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'>WITH US?</span>
                </div>
            </div>
            <div className="right-j">

                <form ref={form} className='email-container'>
                    <input type="email" name='user_email' placeholder='Enter Your Email' onSubmit={sendEmail}/>
                    <button className='btn btn-j'>Join Now</button>
                </form>
            </div>

        </div>
    )
}

export default Join;