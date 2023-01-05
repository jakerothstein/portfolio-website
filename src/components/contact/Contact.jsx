import React, {useState} from 'react';
import "./contact.css";
import ReCAPTCHA from "react-google-recaptcha";
import {send} from 'emailjs-com';

const Contact = () => {
    const [sender_name, set_sender_name] = useState('')
    const [sender_email, set_sender_email] = useState('')
    const [subject, set_subject] = useState('')
    const [message, set_message] = useState('')
    let Sucess = false


    function onChange(value) {
        Sucess = true
    }

    const handleName = (e) => {
        set_sender_name(e.target.value)
    }

    const handleEmail = (e) => {
        set_sender_email(e.target.value)
    }

    const handleSubject = (e) => {
        set_subject(e.target.value)
    }

    const handleMessage = (e) => {
        set_message(e.target.value)
    }

    const sendMail = (e) => {
        e.preventDefault();
        if (Sucess === true) {
            send(
                'service_kgm3h3h',
                'template_5ogqb9t',
                {sender_name, sender_email, subject, message},
                'ASfwLQOpGFVNyTg9g'
            )
                .then((response) => {
                    console.log('Message sent successfully', response.status, response.text)
                    window.location.reload();
                })
                .catch((err) => {
                    console.log('Failed', err)
                    alert('Message failed to send');
                })
        } else {
            alert("ReCaptcha not completed")
        }
    }
    return (
        <div>
            <section className="contact container section" id="contact">
                <h2 className="section__title">Contact</h2>
                <div className="contact__container grid">
                    <div className="contact__info">
                        <br/>
                        <p className="contact__details">Don't like forms? Send me an email. 👋</p>
                        <br/>
                        <a href="mailto: jake.b.rothstein@gmail.com" className='btn'>Send Email</a>
                    </div>

                    <form onSubmit={sendMail} id='form' className="contact__form">
                        <div className="contact__form-group">
                            <div className="contact__form-div">
                                <input type="text" className="contact__form-input" placeholder='Insert your name'
                                       value={sender_name} onChange={handleName} required/>
                            </div>

                            <div className="contact__form-div">
                                <input type="email" className="contact__form-input" placeholder='Insert your email'
                                       value={sender_email} onChange={handleEmail} required/>
                            </div>
                        </div>

                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input" placeholder='Insert your subject'
                                   value={subject} onChange={handleSubject} required/>
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <textarea name="" id="" cols="30" rows="10" className='contact__form-input'
                                      placeholder='Write your message' value={message} onChange={handleMessage}
                                      required></textarea>
                        </div>

                        <div className="contact__form-captcha">
                            <button className='btn'>Send Message</button>
                            <br/>
                            <ReCAPTCHA
                                sitekey="6LdTV9EjAAAAAJkeRgLPnBWcdWe0884Q0ujR6euE"
                                onChange={onChange}
                                require
                            />
                        </div>
                    </form>

                </div>
            </section>
        </div>
    );
};

export default Contact;