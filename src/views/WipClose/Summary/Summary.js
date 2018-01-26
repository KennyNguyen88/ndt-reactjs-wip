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
    }

    //Life cycles

    componentWillReceiveProps(nextProps){
        this.state = { data: nextProps.data };
        this.setState(prevState => this.state)
    }

    //Event

    //Helper

    isStateHaveData = () => {
        return ( this.state && this.state.data.length > 0);
    };

    getToWipReady = (commons) => {
        if (commons.length > 0) {
            let twr = commons.filter(common => common.name === "TO_WIP_READY");
            if (twr)
                return twr[0].total;
        }
        return 0;
    };

    getTotalAvailable = (summaries) => {
        if (summaries.length > 0) {
            let notcom = summaries.filter(summary => summary.group !== "COMMON");
            if (notcom.length > 0)
                return notcom.reduce((count, step) => {
                    return count + step.total;
                },0);
        }
        return 0;
    };

    getTotalReady = (commons) => {
        if (commons.length > 0){
            let tr = commons.filter(common => common.name === "TOTAL_READY");
            if (tr.length > 0)
                return tr[0].total;
        }
        return 0;
    };

    render() {
        let filterCommons = [];
        let filterSemiProducts = [];
        let filterFinishedGoods = [];
        let filterReworks = [];
        let filterShippings = [];
        let numberOfWipReady = 0;
        let numberOfTotalAvailable = 0;
        let numberOfTotalReady = 0;
        const GROUP = {
            COMMON: "COMMON",
            SEMI_PRODUCT: "SEMI PRODUCT",
            FINISHED_GOOD: "FINISHED GOOD",
            REWORK: "REWORK",
            SHIPPING: "SHIPPING"
        };

        if (this.isStateHaveData()){
            const summaries = this.state.data;
            filterCommons = summaries.filter(summary => summary.group === GROUP.COMMON);
            filterSemiProducts = summaries.filter(summary => summary.group === GROUP.SEMI_PRODUCT);
            filterFinishedGoods = summaries.filter(summary => summary.group === GROUP.FINISHED_GOOD);
            filterReworks = summaries.filter(summary => summary.group === GROUP.REWORK);
            filterShippings = summaries.filter(summary => summary.group === GROUP.SHIPPING);
            numberOfWipReady = this.getToWipReady(filterCommons);
            numberOfTotalAvailable = this.getTotalAvailable(summaries);
            numberOfTotalReady = this.getTotalReady(filterCommons);
        }

        return (
            <Card>
                <CardTitle running={this.props.running} name={this.props.name} handleClick={() => this.props.handleRefresh()}/>
                <div className="d-flex justify-content-between align-items-center p-2">
                    <Button color="primary" onClick={() => this.props.handleToWipReady(numberOfWipReady)}>TO WIP_READY {numberOfWipReady}</Button>
                    <div className="text-right">
                        <p>TOTAL AVAILABLE: {numberOfTotalAvailable}</p>
                        <p className="mb-0">TOTAL READY: {numberOfTotalReady}</p>
                    </div>
                </div>
                <Row className="p-3">
                    <SummaryGroup name={GROUP.SEMI_PRODUCT} data={filterSemiProducts} handleItemClick={(groupName, itemName) => this.props.handleItemUpdateClick(groupName, itemName)}/>
                    <SummaryGroup name={GROUP.FINISHED_GOOD} data={filterFinishedGoods} handleItemClick={(groupName, itemName) => this.props.handleItemUpdateClick(groupName, itemName)}/>
                    <SummaryGroup name={GROUP.REWORK} data={filterReworks} handleItemClick={(groupName, itemName) => this.props.handleItemUpdateClick(groupName, itemName)}/>
                    <SummaryGroup name={GROUP.SHIPPING} data={filterShippings} handleItemClick={(groupName, itemName) => this.props.handleItemUpdateClick(groupName, itemName)}/>
                </Row>
            </Card>
        );
    }
}

Summary.propTypes = {
    name: PropTypes.string.isRequired
};