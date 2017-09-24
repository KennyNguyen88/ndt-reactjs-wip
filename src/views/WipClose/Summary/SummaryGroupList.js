/**
 * Created by Trung on 9/23/2017.
 */
//Libs
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ListGroup} from 'reactstrap';
//Customs
import SummaryGroupItem from './SummaryGroupItem';
export default class SummaryGroupList extends Component {
  render(){
      return(
          <ListGroup>
              {this.props.data.map((item, index) => {
                  return <SummaryGroupItem key={index} name={item.name} total={item.total}/>
              })}
          </ListGroup>
      );
  }
};

SummaryGroupList.propTypes = {
  data: PropTypes.array.isRequired
};
