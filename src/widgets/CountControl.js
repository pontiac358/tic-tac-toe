import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import { connect } from "react-redux";
import { addToCart, removeToCart } from '../actions/result'
import { getUniqProducts } from "../helper/selector";

const Container = styled.div`
    display: inline-flex;
    -webkit-align-items: center;
    align-items: center;
`;

const CountField = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    padding:10px;
`;

class CountControl extends React.Component {
    handleAdd = () => {
        const { product } = this.props;
        addToCart(product)
    };

    handleRemove = () => {
        const { product } = this.props;
        removeToCart(product)
    };

    render(){
        const { products, product } = this.props;
        const count = products.find(item => item.product.id === product.id).count;
        return (
            <Container>
                <button onClick={this.handleRemove}>-</button>
                <CountField>{count}</CountField>
                <button onClick={this.handleAdd}>+</button>
            </Container>
        )
    }
}

CountControl.propTypes = {
    product: PropTypes.object,
    products: PropTypes.array,
};

const mapStateToProps = (state) => {
    return {
        products: getUniqProducts(state),
    }
};

export default connect(mapStateToProps)(CountControl)