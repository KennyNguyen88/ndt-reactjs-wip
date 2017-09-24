/**
 * Created by Trung on 9/23/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {ListGroupItem} from 'reactstrap';

const BackFlushItem = (props) => {
    return (
        <ListGroupItem>
            <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0">{props.name}</p>
                <p className="mb-0">{props.total}</p>
            </div>
        </ListGroupItem>
    )
};
BackFlushItem.propTypes = {
    name: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired
};

export default BackFlushItem;
