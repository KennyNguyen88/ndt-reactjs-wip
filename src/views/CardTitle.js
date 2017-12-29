import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';
import "animate.css";
const CardTitle = (props) => {
    let classes = props.running? "animated rotateIn infinite" : "";
  return (
      <div className="d-flex justify-content-between">
          <div className="p-2 typo-card-title text-uppercase">{props.name}</div>
          <Button className={classes} color="link" onClick={props.handleClick}><i className="icon-refresh"/></Button>
      </div>
  )
};
CardTitle.propTypes = {
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
};
export default CardTitle;