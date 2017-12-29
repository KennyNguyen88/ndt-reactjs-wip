/**
 * Created by Trung on 9/23/2017.
 */
//Libs
import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup} from 'reactstrap';
//Customs
import NegativeRawMaterialItem from './NegativeRawMaterialItem';

const NegativeMaterialList = (props) => {

    let minusOnly = props.data.filter((item) => {
        return (item.onhand - item.pending) < 0;
    });

    return(
        <ListGroup>
            {minusOnly.map((item, index) => {
                return <NegativeRawMaterialItem
                    name={item.name}
                    desc={item.desc}
                    onhand={item.onhand}
                    pending={item.pending}
                    tooltipId={index}
                    key={index}
                />
            })}
        </ListGroup>
    )
};
NegativeMaterialList.propTypes = {
    data: PropTypes.array.isRequired
};
export default NegativeMaterialList;
