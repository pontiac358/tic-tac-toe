import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import Btn from '../../shared/Btn';



export class Home extends React.Component {

    render() {
        const { result } = this.props;

        return (
            <div className='main'>
                <h1 className='h1'> Результаты игры </h1>
                <div className="result-game">
                    <div className="result-game__hint">
                        { result }
                    </div>
                </div>

                <Btn to='/start' title='Играть заново' />
            </div>
        );
    }
}

Home.propTypes = {
    result: PropTypes.string
};

const mapStateToProps = ({ result }) => ({
    result,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home)