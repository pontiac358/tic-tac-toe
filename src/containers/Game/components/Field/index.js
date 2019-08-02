import React from 'react';
import PropTypes from 'prop-types';

import Cell from '../../components/Cell';



const Field = ({ field, go, classes }) => (
    <div className={classes + ` field`}>
        {
            field.map((block, rowIndex) => {

                return(
                    <div key={ rowIndex } className='field__row'> {
                        block.map((cell, cellIndex) =>
                            <Cell
                                onClick = { go }
                                rowIndex = { rowIndex }
                                cellIndex = { cellIndex }
                                key = { cellIndex }
                                cell = { cell } />)}
                    </div>
                )
            })
        }
    </div>
);

Field.propTypes = {
    field: PropTypes.array,
    go: PropTypes.func,
    classes: PropTypes.string
};

export default Field;