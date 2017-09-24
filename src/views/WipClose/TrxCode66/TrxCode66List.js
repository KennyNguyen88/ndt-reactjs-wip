/**
 * Created by Trung on 9/23/2017.
 */
//Libs
import React from 'react';
import PropTypes from 'prop-types';
import {ListGroup} from 'reactstrap';
//Customs
import TrxCode66Item from './TrxCode66Item';

const TrxCode66List = (props) => {
    return(
        <ListGroup>
            {props.data.map((item, index) => {
                return <TrxCode66Item
                    name={item.name}
                    total={item.total}
                    key={index}
                />
            })}
        </ListGroup>
    )
};
TrxCode66List.propTypes = {
    data: PropTypes.array.isRequired
};
export default TrxCode66List;
