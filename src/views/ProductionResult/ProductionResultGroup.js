/**
 * Created by Trung on 9/24/2017.
 */
//Libs
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardBlock, Button} from 'reactstrap';
import ProductionResultGroupHeader from './ProductionResultGroupHeader';
//Custom
import ProductionResultList from './ProductionResultList';
class ProductionResultGroup extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: true,
            erp: 0,
            mes: 0
        };
    }

    //Life Cycle

    componentWillReceiveProps(nextProp){
        this.state = {
            ...this.state,
            erp: nextProp.erp,
            mes: nextProp.mes
        };

        this.setState(prevState => this.state)
    }

    //Event

    handleToggleSwitch = (e) => {
        console.log('toggleSwitch',this.props.switchName, e.target.checked);
        this.state = {
            active: !this.state.active,
            erp: this.state.erp,
            mes: this.state.mes
        };
        this.setState(prevState => this.state);
    };

    render(){
        return (
            <Card>
                <ProductionResultGroupHeader
                    name={this.props.name}
                    handleToggleSwitch={(e) => this.handleToggleSwitch(e)}
                    switchName={this.props.switchName}
                    switchChecked={this.state.active}
                />
                <CardBlock>
                    <ProductionResultList erp={this.state.erp} mes={this.state.mes}/>
                </CardBlock>
            </Card>
        )
    }
}
ProductionResultGroup.propTypes = {
    name: PropTypes.string.isRequired,
    switchName: PropTypes.string.isRequired
};
export default ProductionResultGroup;