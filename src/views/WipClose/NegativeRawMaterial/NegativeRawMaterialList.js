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
    return(
        <ListGroup>
            {props.data.map((item, index) => {
                return <NegativeRawMaterialItem
                    name={item.name}
                    desc={item.desc}
                    onhand={item.onhand}
                    pending={item.pending}
                    balance={item.balance}
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
