import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'


const Header = () => {

    return (
        <div className='header'>
            <div className="header__center">
                <div className="header__logo">
                    <Link className='header__logo-link' to={'/'}> LOGO </Link>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {};

export default Header;