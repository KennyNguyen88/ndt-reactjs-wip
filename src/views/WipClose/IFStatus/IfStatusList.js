/**
 * Created by Trung on 9/23/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup} from 'reactstrap';
import IfStatusItem from './IfStatusItem';

const IfStatusList = (props) => {
    return (
        <ListGroup>
            {
                props.data.map((item, index) => {
                    return <IfStatusItem key={index} name={item.name} desc={item.desc} total={item.total}/>
                })
            }
        </ListGroup>
    )
};

IfStatusList.propTypes = {
  data: PropTypes.array.isRequired
};

export default IfStatusList;
