/**
 * Created by Trung on 9/23/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {ListGroupItem, Badge} from 'reactstrap';

const OitItem = (props) => {
  return(

      <ListGroupItem>
          <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0">{props.name}</p>
              <div>
                  <div
                      className="d-flex justify-content-between align-items-center oit-pending">
                      <p className="pb-1 mb-0 mr-2 ">Pending: </p>
                      <Badge color={props.pendingTotal != 0 ? "info" : "light"}>{props.pendingTotal}</Badge>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                      <p className="mb-0">Error: </p>
                      <Badge color={props.errorTotal != 0 ? "danger" : "light"}>{props.errorTotal}</Badge>
                  </div>
              </div>
          </div>
      </ListGroupItem>
  );
};

OitItem.propTypes = {
    name: PropTypes.string.isRequired,
    pendingTotal: PropTypes.number.isRequired,
    errorTotal: PropTypes.number.isRequired
};

export default OitItem;