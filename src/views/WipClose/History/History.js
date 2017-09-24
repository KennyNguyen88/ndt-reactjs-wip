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
            data: [
                {
                    name: 'WIP_READY',
                    total: 34432296,
                    happenTime: '2017-09-23 09:00'
                },
                {
                    name: 'WIP_READY',
                    total: 34432296,
                    happenTime: '2017-09-23 09:00'
                },
                {
                    name: 'WIP_READY',
                    total: 34432296,
                    happenTime: '2017-09-23 09:00'
                }
            ]
        }
    }
    render(){
        return(
            <Card>
                <CardTitle name={this.props.name}/>
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
