import React from 'react';
import PropTypes from 'prop-types';
import {ListGroupItem, Badge, UncontrolledTooltip} from 'reactstrap';

const NegativeRawMaterialItem = (props) => {
    let balance = props.onhand - props.pending;
    let id = 'Negative'+props.tooltipId;
    return (
        <ListGroupItem className="animated slideInLeft">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <p className="mb-0" id={id}>{props.name}</p>
                    <UncontrolledTooltip placement="top" target={id}> {props.desc} </UncontrolledTooltip>
                </div>
                <div>
                    <div
                        className="d-flex justify-content-between align-items-center oit-pending">
                        <p className="pb-1 mb-0 mr-2 ">On Hand: </p>
                        <Badge color="light">{props.onhand}</Badge>
                    </div>
                    <div
                        className="d-flex justify-content-between align-items-center oit-pending">
                        <p className="mb-0">Pending: </p>
                        <Badge color="light">{props.pending}</Badge>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">Balance: </p>
                        <Badge color={balance < 0 ? "danger" : "light"}>{balance}</Badge>
                    </div>

                </div>
            </div>
        </ListGroupItem>
    )
};
NegativeRawMaterialItem.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    onhand: PropTypes.number.isRequired,
    pending: PropTypes.number.isRequired,
    tooltipId: PropTypes.number.isRequired
};

export default NegativeRawMaterialItem;
