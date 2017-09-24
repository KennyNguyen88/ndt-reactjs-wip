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

    handleRefresh = () => {
        console.log('handleRefresh');

    };

    render(){
        return(
            <Card>
                <CardTitle name={this.props.name} handleClick={this.handleRefresh}/>
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
