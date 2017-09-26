//Libs
import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardBlock, Col, Row} from 'reactstrap';
//Customs
import ProductionResultGroupListHeader from './ProductionResultGroupListHeader';
import ProductionResultGroup from './ProductionResultGroup';
const ProductionResultGroupList = (props) => {
    return(
        <Card>
            <ProductionResultGroupListHeader name={props.name} handleClick={props.handleRefresh} />
            <CardBlock>
                <Row>
                    {props.data.map((item, index) => {
                        return (
                            <Col key={index}>
                                <ProductionResultGroup name={item.name} switchName={item.switchName} erp={item.erp} mes={item.mes}/>
                            </Col>
                        )
                    })}
                </Row>
            </CardBlock>
        </Card>
    )
};

ProductionResultGroupList.propTypes = {
    name: PropTypes.string.isRequired,
    handleRefresh: PropTypes.func.isRequired,
    data: PropTypes.array.isRequired
};

export default ProductionResultGroupList;