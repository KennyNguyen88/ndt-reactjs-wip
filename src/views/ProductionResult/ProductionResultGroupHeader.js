import React from 'react';
import PropTypes from 'prop-types';
import SwitchButton from 'react-switch-button';
const ProductionResultGroupHeader = (props) => {
    return (
        <div className="d-flex justify-content-between">
            <div className="p-2 typo-card-title text-uppercase">
                {props.name}
            </div>
            <div className="p-2">
                <SwitchButton
                    onChange={props.handleToggleSwitch}
                    name={props.switchName}
                />
            </div>

        </div>
    )
};

ProductionResultGroupHeader.propTypes = {
    name: PropTypes.string.isRequired,
    handleToggleSwitch: PropTypes.func.isRequired
};

export default ProductionResultGroupHeader;