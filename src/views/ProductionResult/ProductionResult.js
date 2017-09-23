import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardTitle,
    CardSubtitle,
    CardBlock,
    CardText,
    Button,
    Badge,
    ListGroup,
    ListGroupItem

} from 'reactstrap';
class ProductionResult extends Component {

    render() {
        return (
            <div className="animated fadeIn">
                <Container fluid>
                    <Row>
                        <Col sm={12}>
                            <Card>
                                <div className="d-flex justify-content-between">
                                    <div className="p-2 typo-card-title text-uppercase">Steel Making</div>
                                    <Button color="link"><i className="icon-refresh"></i></Button>
                                </div>
                                <Row className="p-2">
                                    <Col sm={6}>
                                        <Card>
                                            <div className="d-flex justify-content-between">
                                                <div className="p-2 typo-card-title text-uppercase">Semi Product</div>
                                                <Button color="link"><i className="icon-refresh"></i></Button>
                                            </div>
                                            <CardBlock>
                                                <Row>
                                                    <Col sm={3}>
                                                        <Card>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="p-2 typo-card-title text-uppercase">
                                                                    Prod.Qty
                                                                </div>
                                                                <Button color="link"><i
                                                                    className="icon-refresh"></i></Button>
                                                            </div>
                                                            <CardBlock>
                                                                <ListGroup>
                                                                    <ListGroupItem>
                                                                        <div
                                                                            className="d-flex justify-content-between align-items-center">
                                                                            <p className="mb-0">ERP</p>
                                                                            <p className="mb-0">62044020</p>
                                                                        </div>
                                                                    </ListGroupItem>
                                                                    <ListGroupItem>
                                                                        <div
                                                                            className="d-flex justify-content-between align-items-center">
                                                                            <p className="mb-0">MES</p>
                                                                            <p className="mb-0">62044000</p>
                                                                        </div>
                                                                    </ListGroupItem>
                                                                    <ListGroupItem>
                                                                        <div
                                                                            className="d-flex justify-content-between align-items-center">
                                                                            <p className="mb-0"></p>
                                                                            <p className="mb-0">20</p>
                                                                        </div>
                                                                    </ListGroupItem>
                                                                </ListGroup>
                                                            </CardBlock>
                                                        </Card>
                                                    </Col>
                                                    <Col sm={3}>
                                                        <Card>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="p-2 typo-card-title text-uppercase">
                                                                    Scrap
                                                                </div>
                                                                <Button color="link"><i
                                                                    className="icon-refresh"></i></Button>
                                                            </div>
                                                            <CardBlock>
                                                                <ListGroup>
                                                                    <ListGroupItem>
                                                                        <div
                                                                            className="d-flex justify-content-between align-items-center">
                                                                            <p className="mb-0">ERP</p>
                                                                            <p className="mb-0">62044020</p>
                                                                        </div>
                                                                    </ListGroupItem>
                                                                    <ListGroupItem>
                                                                        <div
                                                                            className="d-flex justify-content-between align-items-center">
                                                                            <p className="mb-0">MES</p>
                                                                            <p className="mb-0">62044000</p>
                                                                        </div>
                                                                    </ListGroupItem>
                                                                    <ListGroupItem>
                                                                        <div
                                                                            className="d-flex justify-content-between align-items-center">
                                                                            <p className="mb-0"></p>
                                                                            <p className="mb-0">20</p>
                                                                        </div>
                                                                    </ListGroupItem>
                                                                </ListGroup>
                                                            </CardBlock>
                                                        </Card>
                                                    </Col>
                                                    <Col sm={3}>
                                                        <Card>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="p-2 typo-card-title text-uppercase">
                                                                    Ferro
                                                                </div>
                                                                <Button color="link"><i
                                                                    className="icon-refresh"></i></Button>
                                                            </div>
                                                            <CardBlock>
                                                                <ListGroup>
                                                                    <ListGroupItem>
                                                                        <div
                                                                            className="d-flex justify-content-between align-items-center">
                                                                            <p className="mb-0">ERP</p>
                                                                            <p className="mb-0">62044020</p>
                                                                        </div>
                                                                    </ListGroupItem>
                                                                    <ListGroupItem>
                                                                        <div
                                                                            className="d-flex justify-content-between align-items-center">
                                                                            <p className="mb-0">MES</p>
                                                                            <p className="mb-0">62044000</p>
                                                                        </div>
                                                                    </ListGroupItem>
                                                                    <ListGroupItem>
                                                                        <div
                                                                            className="d-flex justify-content-between align-items-center">
                                                                            <p className="mb-0"></p>
                                                                            <p className="mb-0">20</p>
                                                                        </div>
                                                                    </ListGroupItem>
                                                                </ListGroup>
                                                            </CardBlock>
                                                        </Card>
                                                    </Col>
                                                    <Col sm={3}>
                                                        <Card>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="p-2 typo-card-title text-uppercase">
                                                                    Ore
                                                                </div>
                                                                <Button color="link"><i
                                                                    className="icon-refresh"></i></Button>
                                                            </div>
                                                            <CardBlock>
                                                                <ListGroup>
                                                                    <ListGroupItem>
                                                                        <div
                                                                            className="d-flex justify-content-between align-items-center">
                                                                            <p className="mb-0">ERP</p>
                                                                            <p className="mb-0">62044020</p>
                                                                        </div>
                                                                    </ListGroupItem>
                                                                    <ListGroupItem>
                                                                        <div
                                                                            className="d-flex justify-content-between align-items-center">
                                                                            <p className="mb-0">MES</p>
                                                                            <p className="mb-0">62044000</p>
                                                                        </div>
                                                                    </ListGroupItem>
                                                                    <ListGroupItem>
                                                                        <div
                                                                            className="d-flex justify-content-between align-items-center">
                                                                            <p className="mb-0"></p>
                                                                            <p className="mb-0">20</p>
                                                                        </div>
                                                                    </ListGroupItem>
                                                                </ListGroup>
                                                            </CardBlock>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </CardBlock>
                                        </Card>
                                    </Col>
                                    <Col sm={3}>
                                        <Card>
                                            <div className="d-flex justify-content-between">
                                                <div className="p-2 typo-card-title text-uppercase">Finish Good</div>
                                                <Button color="link"><i className="icon-refresh"></i></Button>
                                            </div>
                                            <CardBlock>
                                                <Row>
                                                    <Col sm={6}>
                                                        <Card>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="p-2 typo-card-title text-uppercase">
                                                                    Receipt
                                                                </div>
                                                                <Button color="link"><i
                                                                    className="icon-refresh"></i></Button>
                                                            </div>
                                                            <CardBlock>
                                                                <ListGroup>
                                                                    <ListGroupItem>
                                                                        <div
                                                                            className="d-flex justify-content-between align-items-center">
                                                                            <p className="mb-0">ERP</p>
                                                                            <p className="mb-0">62044020</p>
                                                                        </div>
                                                                    </ListGroupItem>
                                                                    <ListGroupItem>
                                                                        <div
                                                                            className="d-flex justify-content-between align-items-center">
                                                                            <p className="mb-0">MES</p>
                                                                            <p className="mb-0">62044000</p>
                                                                        </div>
                                                                    </ListGroupItem>
                                                                    <ListGroupItem>
                                                                        <div
                                                                            className="d-flex justify-content-between align-items-center">
                                                                            <p className="mb-0"></p>
                                                                            <p className="mb-0">20</p>
                                                                        </div>
                                                                    </ListGroupItem>
                                                                </ListGroup>
                                                            </CardBlock>
                                                        </Card>
                                                    </Col>
                                                    <Col sm={6}>
                                                        <Card>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="p-2 typo-card-title text-uppercase">
                                                                    Return
                                                                </div>
                                                                <Button color="link"><i
                                                                    className="icon-refresh"></i></Button>
                                                            </div>
                                                            <CardBlock>
                                                                <ListGroup>
                                                                    <ListGroupItem>
                                                                        <div
                                                                            className="d-flex justify-content-between align-items-center">
                                                                            <p className="mb-0">ERP</p>
                                                                            <p className="mb-0">62044020</p>
                                                                        </div>
                                                                    </ListGroupItem>
                                                                    <ListGroupItem>
                                                                        <div
                                                                            className="d-flex justify-content-between align-items-center">
                                                                            <p className="mb-0">MES</p>
                                                                            <p className="mb-0">62044000</p>
                                                                        </div>
                                                                    </ListGroupItem>
                                                                    <ListGroupItem>
                                                                        <div
                                                                            className="d-flex justify-content-between align-items-center">
                                                                            <p className="mb-0"></p>
                                                                            <p className="mb-0">20</p>
                                                                        </div>
                                                                    </ListGroupItem>
                                                                </ListGroup>
                                                            </CardBlock>
                                                        </Card>
                                                    </Col>


                                                </Row>
                                            </CardBlock>
                                        </Card>
                                    </Col>
                                    <Col sm={3}>
                                        <Card>
                                            <div className="d-flex justify-content-between">
                                                <div className="p-2 typo-card-title text-uppercase">Shipping</div>
                                                <Button color="link"><i className="icon-refresh"></i></Button>
                                            </div>
                                            <CardBlock>
                                                <Row>
                                                    <Col>
                                                        <Card>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="p-2 typo-card-title text-uppercase">
                                                                    Receipt
                                                                </div>
                                                                <Button color="link"><i
                                                                    className="icon-refresh"></i></Button>
                                                            </div>
                                                            <CardBlock>
                                                                <ListGroup>
                                                                    <ListGroupItem>
                                                                        <div
                                                                            className="d-flex justify-content-between align-items-center">
                                                                            <p className="mb-0">ERP</p>
                                                                            <p className="mb-0">62044020</p>
                                                                        </div>
                                                                    </ListGroupItem>
                                                                    <ListGroupItem>
                                                                        <div
                                                                            className="d-flex justify-content-between align-items-center">
                                                                            <p className="mb-0">MES</p>
                                                                            <p className="mb-0">62044000</p>
                                                                        </div>
                                                                    </ListGroupItem>
                                                                    <ListGroupItem>
                                                                        <div
                                                                            className="d-flex justify-content-between align-items-center">
                                                                            <p className="mb-0"></p>
                                                                            <p className="mb-0">20</p>
                                                                        </div>
                                                                    </ListGroupItem>
                                                                </ListGroup>
                                                            </CardBlock>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </CardBlock>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col sm={6}>
                            <Card>
                                <div className="d-flex justify-content-between">
                                    <div className="p-2 typo-card-title text-uppercase">Deformed Bar</div>
                                    <Button color="link"><i className="icon-refresh"></i></Button>
                                </div>
                                <CardBlock>
                                    <Row>
                                        <Col sm={6}>
                                            <Card>
                                                <div className="d-flex justify-content-between">
                                                    <div className="p-2 typo-card-title text-uppercase">Normal</div>
                                                    <Button color="link"><i className="icon-refresh"></i></Button>
                                                </div>
                                                <CardBlock>
                                                    <Row>
                                                        <Col>
                                                            <Card>
                                                                <div className="d-flex justify-content-between">
                                                                    <div className="p-2 typo-card-title text-uppercase">
                                                                        Semi
                                                                        Product
                                                                    </div>
                                                                    <Button color="link"><i
                                                                        className="icon-refresh"></i></Button>
                                                                </div>
                                                                <CardBlock>
                                                                    <Row>
                                                                        <Col sm={6}>
                                                                            <Card>
                                                                                <div className="d-flex justify-content-between">
                                                                                    <div className="p-2 typo-card-title text-uppercase">
                                                                                        Prod.Qty
                                                                                    </div>
                                                                                    <Button color="link"><i
                                                                                        className="icon-refresh"></i></Button>
                                                                                </div>
                                                                                <CardBlock>
                                                                                    <ListGroup>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">ERP</p>
                                                                                                <p className="mb-0">62044020</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">MES</p>
                                                                                                <p className="mb-0">62044000</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0"></p>
                                                                                                <p className="mb-0">20</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                    </ListGroup>
                                                                                </CardBlock>
                                                                            </Card>
                                                                        </Col>
                                                                        <Col sm={6}>
                                                                            <Card>
                                                                                <div className="d-flex justify-content-between">
                                                                                    <div className="p-2 typo-card-title text-uppercase">
                                                                                        Input
                                                                                    </div>
                                                                                    <Button color="link"><i
                                                                                        className="icon-refresh"></i></Button>
                                                                                </div>
                                                                                <CardBlock>
                                                                                    <ListGroup>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">ERP</p>
                                                                                                <p className="mb-0">62044020</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">MES</p>
                                                                                                <p className="mb-0">62044000</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0"></p>
                                                                                                <p className="mb-0">20</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                    </ListGroup>
                                                                                </CardBlock>
                                                                            </Card>
                                                                        </Col>


                                                                    </Row>
                                                                </CardBlock>
                                                            </Card>
                                                        </Col>
                                                    </Row>
                                                </CardBlock>
                                                <CardBlock>
                                                    <Row>
                                                        <Col>
                                                            <Card>
                                                                <div className="d-flex justify-content-between">
                                                                    <div className="p-2 typo-card-title text-uppercase">
                                                                        Finish Good
                                                                    </div>
                                                                    <Button color="link"><i
                                                                        className="icon-refresh"></i></Button>
                                                                </div>
                                                                <CardBlock>
                                                                    <Row>
                                                                        <Col sm={6}>
                                                                            <Card>
                                                                                <div className="d-flex justify-content-between">
                                                                                    <div className="p-2 typo-card-title text-uppercase">
                                                                                        Receipt
                                                                                    </div>
                                                                                    <Button color="link"><i
                                                                                        className="icon-refresh"></i></Button>
                                                                                </div>
                                                                                <CardBlock>
                                                                                    <ListGroup>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">ERP</p>
                                                                                                <p className="mb-0">62044020</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">MES</p>
                                                                                                <p className="mb-0">62044000</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0"></p>
                                                                                                <p className="mb-0">20</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                    </ListGroup>
                                                                                </CardBlock>
                                                                            </Card>
                                                                        </Col>
                                                                        <Col sm={6}>
                                                                            <Card>
                                                                                <div className="d-flex justify-content-between">
                                                                                    <div className="p-2 typo-card-title text-uppercase">
                                                                                        Return
                                                                                    </div>
                                                                                    <Button color="link"><i
                                                                                        className="icon-refresh"></i></Button>
                                                                                </div>
                                                                                <CardBlock>
                                                                                    <ListGroup>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">ERP</p>
                                                                                                <p className="mb-0">62044020</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">MES</p>
                                                                                                <p className="mb-0">62044000</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0"></p>
                                                                                                <p className="mb-0">20</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                    </ListGroup>
                                                                                </CardBlock>
                                                                            </Card>
                                                                        </Col>


                                                                    </Row>
                                                                </CardBlock>
                                                            </Card>
                                                        </Col>
                                                    </Row>
                                                </CardBlock>
                                                <CardBlock>
                                                    <Row>
                                                        <Col>
                                                            <Card>
                                                                <div className="d-flex justify-content-between">
                                                                    <div className="p-2 typo-card-title text-uppercase">
                                                                        Shipping
                                                                    </div>
                                                                    <Button color="link"><i
                                                                        className="icon-refresh"></i></Button>
                                                                </div>
                                                                <CardBlock>
                                                                    <Row>
                                                                        <Col>
                                                                            <Card>
                                                                                <div className="d-flex justify-content-between">
                                                                                    <div className="p-2 typo-card-title text-uppercase">
                                                                                        Issue
                                                                                    </div>
                                                                                    <Button color="link"><i
                                                                                        className="icon-refresh"></i></Button>
                                                                                </div>
                                                                                <CardBlock>
                                                                                    <ListGroup>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">ERP</p>
                                                                                                <p className="mb-0">62044020</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">MES</p>
                                                                                                <p className="mb-0">62044000</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0"></p>
                                                                                                <p className="mb-0">20</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                    </ListGroup>
                                                                                </CardBlock>
                                                                            </Card>
                                                                        </Col>


                                                                    </Row>
                                                                </CardBlock>
                                                            </Card>
                                                        </Col>
                                                    </Row>
                                                </CardBlock>
                                            </Card>
                                        </Col>
                                        <Col sm={6}>
                                            <Card>
                                                <div className="d-flex justify-content-between">
                                                    <div className="p-2 typo-card-title text-uppercase">Rework</div>
                                                    <Button color="link"><i className="icon-refresh"></i></Button>
                                                </div>
                                                <CardBlock>
                                                    <Row>
                                                        <Col>
                                                            <Card>
                                                                <div className="d-flex justify-content-between">
                                                                    <div className="p-2 typo-card-title text-uppercase">
                                                                        Semi
                                                                        Product
                                                                    </div>
                                                                    <Button color="link"><i
                                                                        className="icon-refresh"></i></Button>
                                                                </div>
                                                                <CardBlock>
                                                                    <Row>
                                                                        <Col sm={6}>
                                                                            <Card>
                                                                                <div className="d-flex justify-content-between">
                                                                                    <div className="p-2 typo-card-title text-uppercase">
                                                                                        Prod.Qty
                                                                                    </div>
                                                                                    <Button color="link"><i
                                                                                        className="icon-refresh"></i></Button>
                                                                                </div>
                                                                                <CardBlock>
                                                                                    <ListGroup>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">ERP</p>
                                                                                                <p className="mb-0">62044020</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">MES</p>
                                                                                                <p className="mb-0">62044000</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0"></p>
                                                                                                <p className="mb-0">20</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                    </ListGroup>
                                                                                </CardBlock>
                                                                            </Card>
                                                                        </Col>
                                                                        <Col sm={6}>
                                                                            <Card>
                                                                                <div className="d-flex justify-content-between">
                                                                                    <div className="p-2 typo-card-title text-uppercase">
                                                                                        Input
                                                                                    </div>
                                                                                    <Button color="link"><i
                                                                                        className="icon-refresh"></i></Button>
                                                                                </div>
                                                                                <CardBlock>
                                                                                    <ListGroup>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">ERP</p>
                                                                                                <p className="mb-0">62044020</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">MES</p>
                                                                                                <p className="mb-0">62044000</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0"></p>
                                                                                                <p className="mb-0">20</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                    </ListGroup>
                                                                                </CardBlock>
                                                                            </Card>
                                                                        </Col>


                                                                    </Row>
                                                                </CardBlock>
                                                            </Card>
                                                        </Col>
                                                    </Row>
                                                </CardBlock>
                                            </Card>
                                        </Col>
                                    </Row>
                                </CardBlock>

                            </Card>

                        </Col>
                        <Col sm={6}>
                            <Card>
                                <div className="d-flex justify-content-between">
                                    <div className="p-2 typo-card-title text-uppercase">Section</div>
                                    <Button color="link"><i className="icon-refresh"></i></Button>
                                </div>
                                <CardBlock>
                                    <Row>
                                        <Col sm={6}>
                                            <Card>
                                                <div className="d-flex justify-content-between">
                                                    <div className="p-2 typo-card-title text-uppercase">Normal</div>
                                                    <Button color="link"><i className="icon-refresh"></i></Button>
                                                </div>
                                                <CardBlock>
                                                    <Row>
                                                        <Col>
                                                            <Card>
                                                                <div className="d-flex justify-content-between">
                                                                    <div className="p-2 typo-card-title text-uppercase">
                                                                        Semi
                                                                        Product
                                                                    </div>
                                                                    <Button color="link"><i
                                                                        className="icon-refresh"></i></Button>
                                                                </div>
                                                                <CardBlock>
                                                                    <Row>
                                                                        <Col sm={6}>
                                                                            <Card>
                                                                                <div className="d-flex justify-content-between">
                                                                                    <div className="p-2 typo-card-title text-uppercase">
                                                                                        Prod.Qty
                                                                                    </div>
                                                                                    <Button color="link"><i
                                                                                        className="icon-refresh"></i></Button>
                                                                                </div>
                                                                                <CardBlock>
                                                                                    <ListGroup>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">ERP</p>
                                                                                                <p className="mb-0">62044020</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">MES</p>
                                                                                                <p className="mb-0">62044000</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0"></p>
                                                                                                <p className="mb-0">20</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                    </ListGroup>
                                                                                </CardBlock>
                                                                            </Card>
                                                                        </Col>
                                                                        <Col sm={6}>
                                                                            <Card>
                                                                                <div className="d-flex justify-content-between">
                                                                                    <div className="p-2 typo-card-title text-uppercase">
                                                                                        Input
                                                                                    </div>
                                                                                    <Button color="link"><i
                                                                                        className="icon-refresh"></i></Button>
                                                                                </div>
                                                                                <CardBlock>
                                                                                    <ListGroup>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">ERP</p>
                                                                                                <p className="mb-0">62044020</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">MES</p>
                                                                                                <p className="mb-0">62044000</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0"></p>
                                                                                                <p className="mb-0">20</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                    </ListGroup>
                                                                                </CardBlock>
                                                                            </Card>
                                                                        </Col>


                                                                    </Row>
                                                                </CardBlock>
                                                            </Card>
                                                        </Col>
                                                    </Row>
                                                </CardBlock>
                                                <CardBlock>
                                                    <Row>
                                                        <Col>
                                                            <Card>
                                                                <div className="d-flex justify-content-between">
                                                                    <div className="p-2 typo-card-title text-uppercase">
                                                                        Finish Good
                                                                    </div>
                                                                    <Button color="link"><i
                                                                        className="icon-refresh"></i></Button>
                                                                </div>
                                                                <CardBlock>
                                                                    <Row>
                                                                        <Col sm={6}>
                                                                            <Card>
                                                                                <div className="d-flex justify-content-between">
                                                                                    <div className="p-2 typo-card-title text-uppercase">
                                                                                        Receipt
                                                                                    </div>
                                                                                    <Button color="link"><i
                                                                                        className="icon-refresh"></i></Button>
                                                                                </div>
                                                                                <CardBlock>
                                                                                    <ListGroup>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">ERP</p>
                                                                                                <p className="mb-0">62044020</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">MES</p>
                                                                                                <p className="mb-0">62044000</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0"></p>
                                                                                                <p className="mb-0">20</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                    </ListGroup>
                                                                                </CardBlock>
                                                                            </Card>
                                                                        </Col>
                                                                        <Col sm={6}>
                                                                            <Card>
                                                                                <div className="d-flex justify-content-between">
                                                                                    <div className="p-2 typo-card-title text-uppercase">
                                                                                        Return
                                                                                    </div>
                                                                                    <Button color="link"><i
                                                                                        className="icon-refresh"></i></Button>
                                                                                </div>
                                                                                <CardBlock>
                                                                                    <ListGroup>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">ERP</p>
                                                                                                <p className="mb-0">62044020</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">MES</p>
                                                                                                <p className="mb-0">62044000</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0"></p>
                                                                                                <p className="mb-0">20</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                    </ListGroup>
                                                                                </CardBlock>
                                                                            </Card>
                                                                        </Col>


                                                                    </Row>
                                                                </CardBlock>
                                                            </Card>
                                                        </Col>
                                                    </Row>
                                                </CardBlock>
                                                <CardBlock>
                                                    <Row>
                                                        <Col>
                                                            <Card>
                                                                <div className="d-flex justify-content-between">
                                                                    <div className="p-2 typo-card-title text-uppercase">
                                                                        Shipping
                                                                    </div>
                                                                    <Button color="link"><i
                                                                        className="icon-refresh"></i></Button>
                                                                </div>
                                                                <CardBlock>
                                                                    <Row>
                                                                        <Col>
                                                                            <Card>
                                                                                <div className="d-flex justify-content-between">
                                                                                    <div className="p-2 typo-card-title text-uppercase">
                                                                                        Issue
                                                                                    </div>
                                                                                    <Button color="link"><i
                                                                                        className="icon-refresh"></i></Button>
                                                                                </div>
                                                                                <CardBlock>
                                                                                    <ListGroup>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">ERP</p>
                                                                                                <p className="mb-0">62044020</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">MES</p>
                                                                                                <p className="mb-0">62044000</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0"></p>
                                                                                                <p className="mb-0">20</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                    </ListGroup>
                                                                                </CardBlock>
                                                                            </Card>
                                                                        </Col>


                                                                    </Row>
                                                                </CardBlock>
                                                            </Card>
                                                        </Col>
                                                    </Row>
                                                </CardBlock>
                                            </Card>
                                        </Col>
                                        <Col sm={6}>
                                            <Card>
                                                <div className="d-flex justify-content-between">
                                                    <div className="p-2 typo-card-title text-uppercase">Rework</div>
                                                    <Button color="link"><i className="icon-refresh"></i></Button>
                                                </div>
                                                <CardBlock>
                                                    <Row>
                                                        <Col>
                                                            <Card>
                                                                <div className="d-flex justify-content-between">
                                                                    <div className="p-2 typo-card-title text-uppercase">
                                                                        Semi
                                                                        Product
                                                                    </div>
                                                                    <Button color="link"><i
                                                                        className="icon-refresh"></i></Button>
                                                                </div>
                                                                <CardBlock>
                                                                    <Row>
                                                                        <Col sm={6}>
                                                                            <Card>
                                                                                <div className="d-flex justify-content-between">
                                                                                    <div className="p-2 typo-card-title text-uppercase">
                                                                                        Prod.Qty
                                                                                    </div>
                                                                                    <Button color="link"><i
                                                                                        className="icon-refresh"></i></Button>
                                                                                </div>
                                                                                <CardBlock>
                                                                                    <ListGroup>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">ERP</p>
                                                                                                <p className="mb-0">62044020</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">MES</p>
                                                                                                <p className="mb-0">62044000</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0"></p>
                                                                                                <p className="mb-0">20</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                    </ListGroup>
                                                                                </CardBlock>
                                                                            </Card>
                                                                        </Col>
                                                                        <Col sm={6}>
                                                                            <Card>
                                                                                <div className="d-flex justify-content-between">
                                                                                    <div className="p-2 typo-card-title text-uppercase">
                                                                                        Input
                                                                                    </div>
                                                                                    <Button color="link"><i
                                                                                        className="icon-refresh"></i></Button>
                                                                                </div>
                                                                                <CardBlock>
                                                                                    <ListGroup>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">ERP</p>
                                                                                                <p className="mb-0">62044020</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0">MES</p>
                                                                                                <p className="mb-0">62044000</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                        <ListGroupItem>
                                                                                            <div
                                                                                                className="d-flex justify-content-between align-items-center">
                                                                                                <p className="mb-0"></p>
                                                                                                <p className="mb-0">20</p>
                                                                                            </div>
                                                                                        </ListGroupItem>
                                                                                    </ListGroup>
                                                                                </CardBlock>
                                                                            </Card>
                                                                        </Col>


                                                                    </Row>
                                                                </CardBlock>
                                                            </Card>
                                                        </Col>
                                                    </Row>
                                                </CardBlock>
                                            </Card>
                                        </Col>
                                    </Row>
                                </CardBlock>

                            </Card>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ProductionResult;
