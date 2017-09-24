/**
 * Created by Trung on 9/23/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {ListGroupItem, Button} from 'reactstrap';

const IfStatusItem = (props) =>  {
    return (
        <ListGroupItem>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <p className="mb-0 text-left">{props.name}</p>
                    <p className="mb-0 font-italic text-left">{props.desc}</p>
                </div>
                <Button color="primary" size="sm">{props.total}</Button>
            </div>
        </ListGroupItem>
    )
};
IfStatusItem.propTypes = {
    name: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired
};
export default IfStatusItem;