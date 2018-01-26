import React from 'react';
import PropTypes from 'prop-types';
import {ListGroupItem, Button, UncontrolledTooltip} from 'reactstrap';

const IfStatusItem = (props) =>  {

    let isDisable = (props.name === 'WIP_CANCEL' || props.name === '000');
    let color = "";
    if (props.name === 'WIP_CANCEL' || props.name === '000'){
        color = "secondary"; //grey
    }
    else if(props.name === 'WIP_READY' || props.name === 'NEW'){
        color = "success"; //green
    }else{
        color = "danger";
    }
    let id = 'IfStatusItem'+props.tooltipId;
    return (
        <ListGroupItem className="animated slideInLeft">
            <div className="d-flex justify-content-between align-items-center ">
                <div>
                    <p className="mb-0 text-left" id={id}>{props.name}</p>
                    {/*<p className="mb-0 font-italic text-left">{props.desc}</p>*/}
                    <UncontrolledTooltip placement="top" target={id}> {props.desc} </UncontrolledTooltip>
                </div>
                <Button
                    color={color}
                    size="sm"
                    disabled={isDisable}
                    onClick={props.handleClick}>{props.total}</Button>
            </div>
        </ListGroupItem>
    )
};
IfStatusItem.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
    tooltipId: PropTypes.number.isRequired
};
export default IfStatusItem;