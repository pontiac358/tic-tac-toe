import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Header from './components/Header'


export class App extends React.Component {

    render() {
        const { children } = this.props;

        return (
            <div>
                <Header/>
                <main>
                    { children }
                </main>
            </div>
        );
    }
}

App.propTypes = {};

const mapStateToProps = ({}) => {
    return {
    }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App)