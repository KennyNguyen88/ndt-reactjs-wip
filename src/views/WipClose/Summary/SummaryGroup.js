/**
 * Created by Trung on 9/23/2017.
 */
//Libs
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col} from 'reactstrap';
//Customs
import SummaryGroupList from './SummaryGroupList';
export default class SummaryGroup extends Component {
    render() {
        return (
            <Col sm={6} className="mb-1">
                <p className="typo-group-title">{this.props.name}</p>
                <SummaryGroupList data={this.props.data}/>
            </Col>
        );
    }
}
SummaryGroup.propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
};
