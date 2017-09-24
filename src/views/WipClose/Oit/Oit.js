/**
 * Created by Trung on 9/23/2017.
 */
//Libs
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardBlock, Button} from 'reactstrap';
//Customs
import OitList from './OitList';
import CardTitle from '../../CardTitle';

export default class Oit extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    name: 'Mtl.Trx',
                    pending: 100,
                    error: 0
                },
                {
                    name: 'Mtl.Lot.Trx',
                    pending: 0,
                    error: 0
                },
                {
                    name: 'Wip.Job',
                    pending: 100,
                    error: 0
                },
                {
                    name: 'Mov.Trx',
                    pending: 0,
                    error: 0
                },
                {
                    name: 'Resources',
                    pending: 0,
                    error: 0
                },
                {
                    name: 'Mtl.Temp',
                    pending: 0,
                    error: 0
                }
            ]
        }
    }
    render(){
        return(
            <Card>
                <CardTitle name={this.props.name}/>
                <CardBlock>
                    <OitList data={this.state.data} />
                </CardBlock>
            </Card>
        );
    }
}
Oit.propTypes = {
    name: PropTypes.string.isRequired
};