//Libs
import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup} from 'reactstrap';
//Customs
import HistoryItem from './HistoryItem';

const HistoryList = (props) => {
    return(
        <ListGroup>
            {props.data.map((item, index) => {
                return <HistoryItem
                    name={item.name}
                    total={item.total}
                    happenTime={item.happenTime}
                    key={index}
                />
            })}
        </ListGroup>
    )
};
HistoryList.propTypes = {
    data: PropTypes.array.isRequired
};
export default HistoryList;
