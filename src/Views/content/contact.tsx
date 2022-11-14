import React, { useEffect } from 'react';

function Contact()
{
    useEffect(() => {
        document.title="Services";
    },[]);
    return(
        <div className="container">
            <h1>Contact Us</h1>
            <hr/>
            <div className='row justify-content-lg-center g-3'>
                <form className='col-lg-8 com-md-8 col-sm-10'>

                    <div className="form-group mb-4">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" className="form-control" id="fullName" aria-describedby="Full Name Input" name="fullName" placeholder="Enter Your Full Name" required/>
                    </div>

                    <div className="form-group mb-4">
                        <label htmlFor="contactNumber">Contact Number</label>
                        <input type="tel" className="form-control" id="contactNumber" aria-describedby="Contact Number Input" name="contactNumber" placeholder="Enter Your Contact Number" required/>
                    </div>

                    <div className="form-group mb-4">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="emailAddress" name="emailAddress" aria-describedby="Email Address Input" placeholder="Enter Your Email" required/>
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="message">Your message ...</label>
                        <textarea className="form-control" id="message" name="message"  aria-label="Message Area"></textarea>
                    </div>
                    
                    <button type="reset" id="cancelButton" className="btn btn-warning "><i className="fas fa-undo fa-lg"></i>Cancel</button>
                    <button type="submit" id="submitButton" className="btn btn-primary ms-2"><i className="fas fa-envelope fa-lg"></i>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;