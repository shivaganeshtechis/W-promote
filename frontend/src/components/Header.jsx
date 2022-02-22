import React from 'react';
import header from '../assets/img/header-logo.png';
import NASA from '../assets/img/NASA.Logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <img id="nav-img" src={header} alt="" />
            <div class="header-nav">
                <div class="header-nav-bar">
                    <p>Patent Portfolio</p>
                    <p>Wishlist</p>
                    <Link to={{ pathname: '/sign-in/' }}>SignIn</Link>
                </div>
                <img id="nav-logo" src={NASA} alt="" />
            </div>
        </header>
    );
};
export default Header;
