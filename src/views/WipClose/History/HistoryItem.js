import React from 'react';
import PropTypes from 'prop-types';
import {ListGroupItem} from 'reactstrap';

const HistoryItem = (props) => {
    return (
        <ListGroupItem>
            <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0">{props.name}</p>
                <div className="text-right">
                    <p className="pb-1 mb-0 oit-pending">{props.total}</p>
                    <p className="pb-1 mb-0 font-italic">{props.happenTime}</p>
                </div>
            </div>
        </ListGroupItem>
    )
};
HistoryItem.propTypes = {
    name: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    happenTime: PropTypes.string.isRequired
};

export default HistoryItem;
