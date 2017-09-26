import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';

const ProductionResultGroupListHeader = (props) => {
    return(
        <div className="d-flex justify-content-between">
            <div className="p-2 typo-card-title text-uppercase">{props.name}</div>
            <Button color="link" onClick={props.handleClick}><i className="icon-refresh"/></Button>
        </div>
    );
};

ProductionResultGroupListHeader.propTypes = {
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default ProductionResultGroupListHeader;