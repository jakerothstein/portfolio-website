import React from 'react';

const HeaderSocials = () => {
    return (
        <div className="home__socials">
            <a href="https://www.instagram.com/rothstein.jake/" className="home__socials-link" target='_blank' rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://www.linkedin.com/in/j-rothstein/" className="home__socials-link" target='_blank'  rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin-in"></i>
            </a>

            <a href="https://github.com/jakerothstein/" className="home__socials-link" target='_blank'  rel="noopener noreferrer">
                <i className="fa-brands fa-github"></i>
            </a>

            <a href="https://twitter.com/Jake_Rothstein_/" className="home__socials-link" target='_blank'  rel="noopener noreferrer">
                <i className="fa-brands fa-twitter"></i>
            </a>

            <a href="https://facebook.com/jakerothstein2" className="home__socials-link" target='_blank'  rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
            </a>
        </div>

    );
};

export default HeaderSocials;