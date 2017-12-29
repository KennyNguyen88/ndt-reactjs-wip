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
                <CardTitle name={this.props.name} handleClick={() => this.props.handleRefresh()}/>
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
