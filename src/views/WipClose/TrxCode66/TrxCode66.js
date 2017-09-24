/**
 * Created by Trung on 9/23/2017.
 */
//Libs
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardBlock, Button} from 'reactstrap';
//Customs
import TrxCode66List from './TrxCode66List';
import CardTitle from '../../CardTitle';
export default class TrxCode66 extends Component {
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
                    <TrxCode66List data={this.state.data} />
                </CardBlock>
            </Card>
        )
    }
}
TrxCode66.propTypes = {
    name: PropTypes.string.isRequired
};
