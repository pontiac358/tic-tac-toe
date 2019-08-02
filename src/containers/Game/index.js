import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { checkWin, getField, computerStep, getEmptyCells } from '../../helper/functions';
import { addResult } from '../../actions/result';
import Btn from '../../shared/Btn';
import Field from './components/Field';
import config from '../../helper/config'

export class Game extends React.Component {
    state = {
        field: getField(config.row, config.col),
        userActive: 1,
        numToWin: config.numToWin,
        maxPoints: config.maxPoints,
        status: {
            winner: null,
            userX: 0,
            user0: 0
        }
    };


    go = async(rowIndex, cellIndex) => {
        const type = this.state.userActive === 1 ? 'X' : '0';
        let field = [ ...this.state.field ];

        if(field[rowIndex][cellIndex].length) return;

        field[rowIndex][cellIndex] = type;

        await  this.setState({
            field,
            userActive: this.state.userActive === 1 ? 2 : 1
        });

        this.getStatus();

        if(config.computer){
            this.goComputer()
        }
    };

    goComputer = async () => {
        const type = '0';
        let field = [ ...this.state.field ];
        const { numToWin } = this.state;

        const computerResult = computerStep(field, numToWin);
        const { rowIndex , colIndex  } = computerResult;


        if(typeof rowIndex === 'number' && typeof colIndex === 'number'){
            field[rowIndex][colIndex] = type;
        }

        await this.setState({
            field,
            userActive: 1
        });

        this.getStatus()
    };

    restart = () => {
        let field = getField(config.row, config.col);
        this.setState({
            field,
            userActive: 1,
            status: {
                winner: null,
                userX: 0,
                user0: 0
            }
        })
    };

    nextRound = () => {
        let field = getField(config.row, config.col);
        this.setState({
            field,
            userActive: 1,
            status: {
                ...this.state.status,
                winner: null,
            }
        })
    };


    getStatus = async () => {
        const { field, numToWin, maxPoints } = this.state;
        const result = checkWin(field, numToWin);
        const hasEmptyCells = !getEmptyCells(field).length;


        if(result || hasEmptyCells){
            const userPoint = hasEmptyCells ? this.state.status : this.state.status['user'+result] + 1;
            let status = {
                ...this.state.status,
                winner: hasEmptyCells ? 'draw' : result,
            };

            if(!hasEmptyCells){
                status ['user'+result] = userPoint
            }

            await this.setState({
                status
            });

            if(userPoint === maxPoints){
                addResult(this.state.status);
                this.props.history.push("/result");
            }
        }
    };

    renderWinnerMess = () =>{
        const { status: { winner } } = this.state;
        const mess =  winner === 'draw' ? 'Ничья' : 'Победитель -' + winner;


        return (
            <>
                {
                    winner && (
                        <div className='status'>
                            <div className='status__hint'> { mess }</div>
                            <Btn onClick={ this.nextRound } title='Продолжить' />
                        </div>
                    )
                }
            </>
        )
    };

    renderPoints = () =>{
        const { status: { userX, user0 } } = this.state;

        return (
            <div className='user-result'>
                <div className="user-result__hint">Результат</div>
                <div className='user-result__point'>
                    Игрок X = <strong>{ userX }</strong>
                </div>
                <div className='user-result__point'>
                    Игрок 0 = <strong>{ user0 }</strong>
                </div>
            </div>
        )
    };




    render() {
        const { field, maxPoints, status:{ winner } } = this.state;

        return (
            <div className='main'>
                <h1 className='h1'> Крестики нолики </h1>
                <div className="note">
                    Игра продолжается до { maxPoints } побед
                </div>
                { this.renderWinnerMess() }
                { this.renderPoints() }

                <Field classes={ winner ? 'field__disabled' : '' } go={ this.go } field={ field } />

                <div>
                    <Btn onClick={ this.restart } title='Рестарт' />
                    <Btn to='/' title='Завершить игру' />
                </div>

            </div>
        );
    }
}

Game.propTypes = {
    field: PropTypes.array,
    maxPoints: PropTypes.number,
    status: PropTypes.object
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Game)