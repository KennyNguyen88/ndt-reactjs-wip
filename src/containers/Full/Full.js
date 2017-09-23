import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import WipClose from '../../views/WipClose/WipClose';
import CrossCheck from '../../views/CrossCheck/CrossCheck';
import ProductionResult from '../../views/ProductionResult/ProductionResult';
import KPI from '../../views/KPI/KPI';


class Full extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <div className="app-body">
                    <Sidebar {...this.props}/>
                    <main className="main">
                        <Breadcrumb/>
                        <Container fluid>
                            <Switch>
                                <Route path="/wipclose" name="WipClose" component={WipClose}/>
                                <Route path="/crosscheck" name="CrossCheck" component={CrossCheck} />
                                <Route path="/productionresult" name="ProductionResult" component={ProductionResult} />
                                <Route path="/kpi" name="KPI" component={KPI} />
                                <Redirect from="/" to="/wipclose"/>
                            </Switch>
                        </Container>
                    </main>
                    <Aside/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Full;
