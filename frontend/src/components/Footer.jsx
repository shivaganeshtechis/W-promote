import React from 'react';
import NASA from '../assets/img/NASA.Logo.png';

const Footer = () => {
    return (
        <>
            <footer>
                <div class="footer-bar">
                    <button>View more patents</button> <br />
                    <img src={NASA} alt="" />
                    <p>Stay up to date, follow NASA’s Technology Transfer Program on</p>
                    <h5>Contact</h5>
                    <p>E-mail : hello@nasa.com | Hotline: +1 131 138 138</p>
                </div>
                <hr />
                <div class="footer-right">NASA - © 2022. ALL RIGHTS RESERVED.</div>
            </footer>
        </>
    );
};
export default Footer;
