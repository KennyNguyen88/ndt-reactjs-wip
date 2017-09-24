/**
 * Created by Trung on 9/23/2017.
 */
//Libs
import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup} from 'reactstrap';
//Customs
import OitItem from './OitItem';
const OitList = (props) => {
    return (
        <ListGroup>
            {
                props.data.map((item, index) => {
                    return <OitItem key={index} name={item.name} pendingTotal={item.pending} errorTotal={item.error}/>
                })
            }
        </ListGroup>
    );
};
OitList.propTypes = {
  data: PropTypes.array.isRequired
};
export default OitList;
