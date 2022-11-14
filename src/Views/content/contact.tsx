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
        </div>
    );
}

export default Contact;