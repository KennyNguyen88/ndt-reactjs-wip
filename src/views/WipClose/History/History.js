/**
 * Created by Trung on 9/23/2017.
 */
//Libs
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardBlock, Button} from 'reactstrap';
//Customs
import HistoryList from './HistoryList';
import CardTitle from '../../CardTitle';
export default class History extends Component {
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
                    <HistoryList data={this.state.data} />
                </CardBlock>
            </Card>
        )
    }
}
History.propTypes = {
    name: PropTypes.string.isRequired
};
