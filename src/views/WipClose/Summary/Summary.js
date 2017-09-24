/**
 * Created by Trung on 9/23/2017.
 */
//Libs
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, Button, Row} from 'reactstrap';
//Customs
import SummaryGroup from './SummaryGroup';
import CardTitle from '../../CardTitle';
export default class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.data;
    }

    handleRefresh = () => {
        console.log('handleRefresh');
    };

    handleToWipReady = () => {
        console.log('handleToWipReady');
    };

    render() {
        return (
            <Card>
                <CardTitle name={this.props.name} handleClick={this.handleRefresh}/>
                <div className="d-flex justify-content-between align-items-center p-2">
                    <Button color="primary" onClick={this.handleToWipReady}>TO WIP_READY {this.state.to_wip_ready}</Button>
                    <div className="text-right">
                        <p>TOTAL AVAILABLE: {this.state.total_available}</p>
                        <p className="mb-0">TOTAL READY: {this.state.total_ready}</p>
                    </div>
                </div>
                <Row className="p-3">
                    <SummaryGroup name={this.state.group_semi_product.name} data={this.state.group_semi_product.data}/>
                    <SummaryGroup name={this.state.group_finish_good.name} data={this.state.group_finish_good.data}/>
                    <SummaryGroup name={this.state.group_rework.name} data={this.state.group_rework.data}/>
                    <SummaryGroup name={this.state.group_shipping.name} data={this.state.group_shipping.data}/>
                </Row>
            </Card>
        );
    }
}

Summary.propTypes = {
    name: PropTypes.string.isRequired
};