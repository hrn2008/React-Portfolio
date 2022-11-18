import React, { useEffect } from 'react';
import Progress from '../components/progress';

function About() {
    useEffect(() => {
        document.title = "Services";
    }, []);

    return (
        <div className="container">
            <div className="content aboutme">
                <h1>About me</h1>
                <p>My name is Hamidreza Naji and I am an international student at Georgen College at this time. I am a software engineering graduate from Iran and it has been for a long time ago. After working in Iran for some time, I decided to come to Canada to update my skills and study Interactive Media and Web Design. I am currently working as a freelancer and I prefer to spend most of my time studying. I was working in Iran in the field of web design and used WordPress and Joomla to web design and development. In the summer of 2022, I worked in the same field at TCCO Company and passed my Co-op. I am trying to update HTML5, CSS3, JavaScript , jQuery, TypeScript and React Knowledge for front-end aspect and PHP, .NET for back-end.I am a self-starter, self-learner, and enthusiastic to tackle new programming strategies and software.</p>
            <Progress/>
            </div>
            {/* My Picture  */}
            <div className="pic">
                <img src="../img/me.jpg" className="img-thumbnail" alt="my portfolio" />
            </div>
            {/* Contact Info */}
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

export default About;
