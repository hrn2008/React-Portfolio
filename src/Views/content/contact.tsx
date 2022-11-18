import React, { ChangeEvent, useEffect, useState } from 'react';

function Contact() {
    //useState
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [message, setMessage] = useState('');

    //useEffect
    useEffect(() => {
        document.title = "Contact Me";
    }, []);

    //State functions
    function onChangeFName(e: ChangeEvent<HTMLInputElement>) {
        console.log(fName);
        setFName(e.target.value);
    }
    function onChangeLName(e: ChangeEvent<HTMLInputElement>) {
        console.log(lName);
        setLName(e.target.value);
    }
    function onChangeEmail(e: ChangeEvent<HTMLInputElement>) {
        console.log(email);
        setEmail(e.target.value);
    }
    function onChangeContactNumber(e: ChangeEvent<HTMLInputElement>) {
        console.log(contactNumber);
        setContactNumber(e.target.value);
    }
    function onChangeMessage(e: ChangeEvent<HTMLTextAreaElement>) {
        console.log(message);
        setMessage(e.target.value);
    }
    function onSubmitForm(e: any) {
        e.preventDefault();
        console.log(fName);
        console.log(lName);
        console.log(email);
        console.log(contactNumber);
        console.log(message);
    }


    const andres = (e: any) => {
        
    }

    return (
        <div className="container">
            <div className="content contactPage">
                <h1>Contact Me</h1>
                <p>I'D LOVE TO HEAR ABOUT YOUR BUSINESS & MARKETING GOALS.</p>

                <form id="contactForm" onSubmit={onSubmitForm}>
                    <div id="name" className="form-group row">

                        <div className="col-sm-12 col-md-6">
                            <label htmlFor="FName"></label>
                            <input type="text" className="form-control" name="FName" id="FName" placeholder="You First Name" onBlur={onChangeFName} onChange={onChangeFName} required />
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <label htmlFor="LName"></label>
                            <input type="text" className="form-control" name="LName" id="LName" placeholder="Your Last Name" onBlur={onChangeLName} onChange={onChangeLName} required />
                        </div>
                    </div>
                    <div id="emailandPhone" className="form-group row">
                        <div className="col-sm-12 col-md-6">
                            <label htmlFor="Email"></label>
                            <input type="email" className="form-control" name="Email" id="Email" placeholder="ex: abc@example.com" onBlur={onChangeEmail} onChange={onChangeEmail} required />

                        </div>
                        <div className="col-sm-12 col-md-6">
                            <label htmlFor="ContactNumber"></label>
                            <input type="number" className="form-control" name="ContactNumber" id="ContactNumber" placeholder="Your phone number" onBlur={onChangeContactNumber} onChange={onChangeContactNumber} required />
                        </div>
                    </div>
                    <div id="comments" className="form-group row">
                        <div className="col-sm-12 col-md-12">
                            <label htmlFor="Message"></label>
                            <textarea className="form-control" id="Message" name="Message" onBlur={onChangeMessage} onChange={onChangeMessage}  required></textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col mt-2">
                            <button type="submit" id="submitButton" className="btn btn-primary"><i className="fas fa-envelope fa-lg"></i>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            {/* My Picture */}
            <div className="pic">
                <img src="../img/me.jpg" className="img-thumbnail" alt="my picture" />
            </div>
            {/* Contact Information */}
            <div className="contact">
                <h4>HRN WEB DESIGN</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><i className="fa-solid fa-user"></i> HamidReza Naji</li>
                    <li className="list-group-item"><i className="fa-solid fa-code"></i> Web Developer</li>
                    <li className="list-group-item"><i className="fa-solid fa-phone"></i> +17057702750</li>
                    <li className="list-group-item"><i className="fa-solid fa-location-dot"></i> HRN2008@yahoo.com</li>
                    <li className="list-group-item"><i className="fa-solid fa-envelope-circle-check"></i> Barrie, Ontario, Canada</li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;