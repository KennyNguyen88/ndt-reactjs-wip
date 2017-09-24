/**
 * Created by Trung on 9/24/2017.
 */
//Libs
import React from 'react';
import PropTypes from 'prop-types';
import {Card, CardBlock, Button} from 'reactstrap';
import SwitchButton from 'react-switch-button';
//Custom
import ProductionResultList from './ProductionResultList';
const ProductionResultGroup = (props) => {
    let data = {
        erp: 62044020,
        mes: 62044021
    };
    return (
        <Card>
            <div className="d-flex justify-content-between">
                <div className="p-2 typo-card-title text-uppercase">
                    {props.name}
                </div>
                <div className="p-2">
                    <SwitchButton/>
                </div>

            </div>
            <CardBlock>
                <ProductionResultList erp={data.erp} mes={data.mes}/>
            </CardBlock>
        </Card>
    )
};
ProductionResultGroup.propTypes = {
    name: PropTypes.string.isRequired
};
export default ProductionResultGroup;