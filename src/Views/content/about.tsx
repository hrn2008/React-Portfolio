import React, { useEffect } from 'react';

function About()
{
    useEffect(() => {
        document.title="Services";
    },[]);
    
    return(
        <div className="container">
            <h1>About Us</h1>
            <hr/>
        </div>
    );
}

export default About;