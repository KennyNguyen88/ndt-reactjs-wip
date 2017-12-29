//Libs
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardBlock, Button} from 'reactstrap';
//Customs
import IfStatusList from './IfStatusList';
import CardTitle from '../../CardTitle';

export default class IFStatus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        }
    }
    //Life cycles

    componentWillReceiveProps(nextProps){
        this.state = {
            data: nextProps.data
        };

        this.setState(prevState => this.state)
    }

    //Events

    handleItemClickAt = (code) => {
        console.log('handleItemClickAt', code);
        //todo: open modal show detail
    };

    //Helper



    render() {
        return (
            <Card>
                <CardTitle name={this.props.name} handleClick={this.props.handleRefresh} running={this.props.running}/>
                <CardBlock>
                    <IfStatusList data={this.state.data} handleItemClickAt={this.handleItemClickAt}/>
                </CardBlock>
            </Card>
        );
    }
}

IFStatus.propTypes = {
    name: PropTypes.string.isRequired
};


