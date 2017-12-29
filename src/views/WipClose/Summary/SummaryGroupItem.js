import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ListGroupItem, Button} from 'reactstrap';

export default class SummaryGroupItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListGroupItem>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">{this.props.name}</p>
                    <Button
                        color="primary"
                        size="sm"
                        onClick={this.props.handleClick}>{this.props.total}</Button>
                </div>
            </ListGroupItem>
        );
    }
};

SummaryGroupItem.propTypes = {
    name: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired
};

