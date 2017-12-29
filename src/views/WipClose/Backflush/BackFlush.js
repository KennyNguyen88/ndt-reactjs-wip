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

    render(){
        return(
            <Card>
                <CardTitle running={this.props.running} name={this.props.name} handleClick={() => this.props.handleRefresh()}/>
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
