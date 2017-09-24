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

export default class IFStatus extends  Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    name: 'NEW',
                    desc: 'New',
                    total: 10
                },
                {
                    name: 'WIP_READY',
                    desc: 'Wip Ready',
                    total: 100
                },
                {
                    name: 'PSV_WIP_C620',
                    desc: 'Shortage Component',
                    total: 1000
                },
                {
                    name: '000',
                    desc: 'Complete',
                    total: 10000
                },
                {
                    name: 'WIP_CANCEL',
                    desc: 'Wip Cancel',
                    total: 10000
                }
            ]
        }
    }
    render(){
        return (
            <Card>
                <CardTitle name={this.props.name}/>
                <CardBlock>
                    <IfStatusList data={this.state.data} />
                </CardBlock>
            </Card>
        );
    }
}

IFStatus.propTypes = {
  name: PropTypes.string.isRequired
};


