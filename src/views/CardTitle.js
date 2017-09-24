/**
 * Created by Trung on 9/24/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';
const CardTitle = (props) => {
  return (
      <div className="d-flex justify-content-between">
          <div className="p-2 typo-card-title text-uppercase">{props.name}</div>
          <Button color="link"><i className="icon-refresh"></i></Button>
      </div>
  )
};
CardTitle.propTypes = {
    name: PropTypes.string.isRequired
};
export default CardTitle;