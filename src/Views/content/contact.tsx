import React, { ChangeEvent, useEffect, useState } from 'react';

function Contact()
{
    //useState
    const [fullName, setFullName]=useState('');
    const [contactNumber, setContactNumber]=useState('');
    const [emailAddress, setEmailAddress]=useState('');
    const [message, setMessage]=useState('');

    //useEffect
    useEffect(() => {
        document.title="Services";
    },[]);

    //State functions
    function onChangeFullName(e: ChangeEvent<HTMLInputElement>)
    {
        console.log(fullName);
    }

    function onChangeContactNumber(e: ChangeEvent<HTMLInputElement>)
    {
        console.log(contactNumber);
    }

    function onChangeEmailAddress(e: ChangeEvent<HTMLInputElement>)
    {
        console.log(emailAddress);
    }

    function onChangeMessage(e: ChangeEvent<HTMLTextAreaElement>)
    {
        console.log(message);
    }

    return(
        <div className="container">
            <h1>Contact Us</h1>
            <hr/>
            <div className='row justify-content-lg-center g-3'>
                <form className='col-lg-8 com-md-8 col-sm-10'>

                    <div className="form-group mb-4">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" className="form-control" id="fullName" onChange={onChangeFullName}
                        aria-describedby="Full Name Input" name="fullName" placeholder="Enter Your Full Name" required/>
                    </div>

                    <div className="form-group mb-4">
                        <label htmlFor="contactNumber">Contact Number</label>
                        <input type="tel" className="form-control" id="contactNumber" onChange={onChangeContactNumber}
                        aria-describedby="Contact Number Input" name="contactNumber" placeholder="Enter Your Contact Number" required/>
                    </div>

                    <div className="form-group mb-4">
                        <label htmlFor="emailAddress">Email address</label>
                        <input type="email" className="form-control" id="emailAddress" name="emailAddress" onChange={onChangeEmailAddress}
                         aria-describedby="Email Address Input" placeholder="Enter Your Email" required/>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="message">Your message ...</label>
                        <textarea className="form-control" id="message" name="message" onChange={onChangeMessage}
                          aria-label="Message Area"></textarea>
                    </div>
                    
                    <button type="reset" id="cancelButton" className="btn btn-warning "><i className="fas fa-undo fa-lg"></i>Cancel</button>
                    <button type="submit" id="submitButton" className="btn btn-primary ms-2"><i className="fas fa-envelope fa-lg"></i>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;