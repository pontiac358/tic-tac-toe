import React from 'react';
import PropTypes from 'prop-types';


const Cell = ({ cell, onClick, rowIndex, cellIndex }) => (
    <button  onClick={ () => onClick(rowIndex, cellIndex) } className='field__cell'>{ cell }</button>
);

Cell.propTypes = {
    cell: PropTypes.string,
    onClick: PropTypes.func,
    rowIndex: PropTypes.number,
    cellIndex: PropTypes.number,
};

export default Cell;