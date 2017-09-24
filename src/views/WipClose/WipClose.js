//Libs
import React, {Component} from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

//Components
import IfStatus from './IFStatus/IFStatus';
import Oit from './Oit/Oit';
import Summary from './Summary/Summary';
import NegativeRawMaterial from './NegativeRawMaterial/NegativeRawMaterial';
import TrxCode66 from './TrxCode66/TrxCode66';
import BackFlush from './Backflush/BackFlush';
import History from './History/History';

class WipClose extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <Container fluid>
                    <Row>
                        <Col lg={3} sm={12}>
                            <IfStatus name="If Status"/>
                        </Col>
                        <Col lg={3} sm={12}>
                            <Oit name="Oit"/>
                        </Col>
                        <Col lg={6} sm={12}>
                            <Summary name="Summary"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3} sm={12}>
                            <NegativeRawMaterial name="Negative Raw Material"/>
                        </Col>
                        <Col lg={3} sm={12}>
                            <TrxCode66 name="Trx Code 66"/>
                        </Col>
                        <Col lg={3} sm={12}>
                            <BackFlush name="Back Flush"/>
                        </Col>
                        <Col lg={3} sm={12}>
                            <History name="History" />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default WipClose;
