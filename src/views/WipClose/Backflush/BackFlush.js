/**
 * Created by Trung on 9/23/2017.
 */
//Libs
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardBlock, Button} from 'reactstrap';
//Customs
import BackFlushList from './BackFlushList';
import CardTitle from '../../CardTitle';
export default class BackFlush extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    name: 'AA810V00',
                    total: 34432296
                },
                {
                    name: 'AA810V00',
                    total: 34432296
                },
                {
                    name: 'AA810V00',
                    total: 34432296
                }
            ]
        }
    }
    render(){
        return(
            <Card>
                <CardTitle name={this.props.name}/>
                <CardBlock>
                    <BackFlushList data={this.state.data} />
                </CardBlock>
            </Card>
        )
    }
}
BackFlush.propTypes = {
    name: PropTypes.string.isRequired
};
