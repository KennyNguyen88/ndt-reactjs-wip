/**
 * Created by Trung on 9/23/2017.
 */
//Libs
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardBlock, Button} from 'reactstrap';
//Customs
import NegativeRawMaterialList from './NegativeRawMaterialList';
import CardTitle from '../../CardTitle';
export default class NegativeRawMaterial extends Component {
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
                    <NegativeRawMaterialList data={this.state.data} />
                </CardBlock>
            </Card>
        )
    }
}
NegativeRawMaterial.propTypes = {
    name: PropTypes.string.isRequired
};
