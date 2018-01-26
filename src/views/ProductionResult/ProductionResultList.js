/**
 * Created by Trung on 9/24/2017.
 */
//Libs
import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup,ListGroupItem } from 'reactstrap';
const ProductionResultList = (props) => {

    let mesTon = Math.round(props.mes/1000);
    let diff = props.erp - mesTon;
    return (
        <ListGroup>
            <ListGroupItem>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">ERP</p>
                    <p className="mb-0">{props.erp}</p>
                </div>
            </ListGroupItem>
            <ListGroupItem>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">MES</p>
                    <p className="mb-0">{mesTon}</p>
                </div>
            </ListGroupItem>
            <ListGroupItem className={diff != 0 ? "different" : ""}>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0"> </p>
                    <p className="mb-0">{diff}</p>
                </div>
            </ListGroupItem>
        </ListGroup>
    )
};
ProductionResultList.propTypes = {
    erp: PropTypes.number.isRequired,
    mes: PropTypes.number.isRequired
};
export default ProductionResultList;
