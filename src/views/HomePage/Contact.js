import React, { useContext, useState } from 'react'
import { CursorContext } from '../../context/Cursor'

export default function Contact() {
    const cursorEvent = useContext(CursorContext)
    const initialValue = {fullname:"", email:"",subject:"",text:""}
    const [getForm,setForm]= useState(initialValue)
    const [getSubmit,setSubmit] = useState(false)
    const [getErrors,setErrors] = useState({});

    const handleChange =(e) =>{
        const {name,value} = e.target
        setForm ({...getForm, [name] : value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setErrors(validation(getForm))
        setSubmit(true)
        // setForm(initialValue)
    }
    const validation = (values) =>{
        const errors = {}
        const regex = /\S+@\S+\.\S+/
        console.log(regex)
        if (!values.fullname){
            errors.fullname = "Fullname is required"
        }else if(values.fullname < 3) {
            errors.fullname = "Fullname must be greater than 3"
        }
        if (!values.email){
            errors.email = "Email is required"
        }else if(!regex.test(values.email)){
            errors.email = "This is not a valid email format!"
        }
        if (!values.subject){
            errors.subject = "Subject is required"
        }
        if (!values.text){
            errors.text = "Text is required"
        }
        return errors;
    }
  return (
    <section className="contactUs" id="contact">
        <div className="container">
            <div className="contact">
                <div className="about">
                    <h2>
                        What’s your story? Get in touch
                    </h2>
                    <p>
                        Always available for freelancing if the right project comes along,
                        Feel free to contact me.
                    </p>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker"></i>
                            <span>123 Stree New York City , United States Of America 750065.</span>
                        </li>
                        <li>
                            <i className="fas fa-envelope-open"></i>
                            <span>support@domain.com</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <span>+044 9696 9696 3636</span>
                        </li>
                    </ul>
                </div>
                {/* <pre>{JSON.stringify(getForm, undefined , 2)}</pre> */}
                <div className="form">
                    <h5>Say Something</h5>
                    <form action="" onSubmit={handleSubmit}>
                    {  Object.keys(getErrors).length == 0 && getSubmit ? (<button className='success'>Signed in successfully</button>) : ""}
                        <div className="row">
                            <div className="row-1">
                                <input type="text" placeholder="Full name" name = "fullname" value={getForm.fullname} onChange={handleChange}/>
                                <p>{getErrors.fullname}</p>
                            </div>
                            <div className="row-2">
                                <input type="mail" placeholder="Email address" name = "email"value={getForm.email} onChange={handleChange}/>
                                <p>{getErrors.email}</p>
                            </div>
                        </div>
                       <div className="column">
                            <input type="text" placeholder="Subject" name = "subject" value={getForm.subject} onChange={handleChange}/>
                            <p>{getErrors.subject}</p>
                            <textarea name="text" id="" cols="20" rows="10" placeholder="Type Comment" value={getForm.text}
                            onChange={handleChange}></textarea>
                            <p>{getErrors.text}</p>
                            <button className='btn' onMouseOver={()=>cursorEvent.setCursor(true)} onMouseOut={()=>cursorEvent.setCursor(false)}>Send Message</button>
                       </div>
                    </form>
                </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24313.23061228163!2d49.861420100000004!3d40.38328320000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6e776f0db9%3A0x651c38c5ad8b8933!2sBak%C3%BC%20Hayvanat%20Bah%C3%A7esi!5e0!3m2!1str!2s!4v1656442892378!5m2!1str!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              />
        </div>
    </section>
  )
}
