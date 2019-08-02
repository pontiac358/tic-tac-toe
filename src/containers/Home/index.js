import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import Btn from '../../shared/Btn'


export class Home extends React.Component {

    render() {
        return (
            <div className='main'>
                <h1 className='h1'> Крестики нолики </h1>
                <Btn to='/game' title='Играть' />
            </div>
        );
    }
}

Home.propTypes = {};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home)