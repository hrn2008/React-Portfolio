import React from 'react';

function Services()
{
    let services = ["web design","programing","SEO","SEM"];
    return(
        <div className="container">
            <h1>Our Services</h1>
            <hr/>
            <div className='row'>
                <div className='col-6'>
                    <ul className='list-group'>
                        {
                        // services.map((service) => (
                        //     <li>{service} </li>
                        // ))
                        // or
                        services.map(function(service){
                            return(<li className='list-group-item'>{service}</li>)
                        })
                        }                    
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Services;