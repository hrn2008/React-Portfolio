import React, { useEffect } from 'react';

function Projects()
{
    useEffect(() => {
        document.title="Services";
    },[]);
    
    return(
        <div className="container">
            <h1>Our Projects</h1>
            <hr/>
        </div>
    );
}

export default Projects;