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
            data: [
                {
                    name: 'AA810V00',
                    desc: 'Description',
                    onhand: 34432296,
                    pending: 34432296,
                },
                {
                    name: 'AA810V00',
                    desc: 'Description',
                    onhand: 34432296,
                    pending: 34432296,
                },
                {
                    name: 'AA810V00',
                    desc: 'Description',
                    onhand: 34432291,
                    pending: 34432296,
                }
            ]
        }
    }
    render(){
        return(
            <Card>
                <CardTitle name={this.props.name}/>
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
