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
                    return <IfStatusItem
                        key={index}
                        name={item.name}
                        desc={item.description}
                        total={item.total}
                        tooltipId={index}
                        handleClick={() => props.handleItemClickAt(item.name)}
                    />
                })
            }
        </ListGroup>
    )
};

IfStatusList.propTypes = {
    data: PropTypes.array.isRequired,
    handleItemClickAt: PropTypes.func.isRequired
};

export default IfStatusList;
