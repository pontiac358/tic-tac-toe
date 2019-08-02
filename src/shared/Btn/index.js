import React from 'react';
import { Link } from 'react-router-dom';


const Btn = ({ onClick, title, to }) => {

    return to ? <Link className='btn' to={to}>{title}</Link> : <button className='btn' onClick={onClick}>{ title }</button>
};

export default Btn;