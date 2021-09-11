import React from 'react';
import './Contact.scss';

const Contact = () => {
    return (
        <div className="form-bg">
            <div className="contact-form">
                <form className="from" action="">
                    <h1>Contact Form</h1>
                    <input className="form-control" type="text" placeholder="Your Name" required/>
                    <input className="form-control" type="email" name="" placeholder="Your Email" required/>
                    <textarea name="" id="" cols="50" rows="5" placeholder="Your Message"></textarea>
                    <br />
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>    
            </div>  
            
            <footer className="footer">
                <p>&copy; Design By - Reba Khatun</p>
            </footer>          
        </div>
    );
};

export default Contact;