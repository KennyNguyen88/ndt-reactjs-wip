import React from 'react';
import PropTypes from 'prop-types';
import {ListGroupItem, UncontrolledTooltip} from 'reactstrap';

const BackFlushItem = (props) => {
    let id = 'Backflush' + props.tooltipId;
    return (
        <ListGroupItem className="animated slideInLeft">
            <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0" id={id}>{props.name}</p>
                <UncontrolledTooltip placement="top" target={id}>{props.desc}</UncontrolledTooltip>
                <p className="mb-0">{props.total}</p>
            </div>
        </ListGroupItem>
    )
};
BackFlushItem.propTypes = {
    name: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    tooltipId: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired
};

export default BackFlushItem;
