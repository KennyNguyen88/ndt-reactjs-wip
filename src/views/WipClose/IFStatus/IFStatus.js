/**
 * Created by Trung on 9/23/2017.
 */
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

    //Helper


    handleItemClickAt = index => {
        console.log('handleItemClickAt', index);
        //open modal show detail
    };

    render() {
        return (
            <Card>
                <CardTitle name={this.props.name} handleClick={() => this.props.handleRefresh()}/>
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


