/* Footer as a component*/
/*
REACT Portfolio Assignment
Hamidreza Naji
S#: 200503068
Course: Advance Client-side JavaScript - COMP2112
*/
import React from 'react';

function Footer()
{
    return (
        <div className="footer">
            <small>© Hamidreza Naji | S#:200305068 | Advance Client-side JavaScript - COMP2112</small>
            <div className="logo">
                <img src="../img/logo.png" alt="logo" />
            </div>
        </div>
    );
}

export default Footer;