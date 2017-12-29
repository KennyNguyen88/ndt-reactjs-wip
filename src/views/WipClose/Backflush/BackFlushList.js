/**
 * Created by Trung on 9/23/2017.
 */
//Libs
import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup} from 'reactstrap';
//Customs
import BackFlushItem from './BackFlushItem';

const BackFlushList = (props) => {
    return(
        <ListGroup>
            {props.data.map((item, index) => {
                return <BackFlushItem
                    name={item.name}
                    total={item.total}
                    desc={item.description}
                    tooltipId={index}
                    key={index}
                />
            })}
        </ListGroup>
    )
};
BackFlushList.propTypes = {
    data: PropTypes.array.isRequired
};
export default BackFlushList;
