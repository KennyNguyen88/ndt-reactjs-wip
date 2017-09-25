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
import ProductionResultGroup from './ProductionResultGroup';
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
                                    <Button color="link"><i className="icon-refresh"/></Button>
                                </div>
                                <Row className="p-2">
                                    <Col sm={6}>
                                        <Card>
                                            <div className="d-flex justify-content-between">
                                                <div className="p-2 typo-card-title text-uppercase">Semi Product</div>
                                                <Button color="link"><i className="icon-refresh"/></Button>
                                            </div>
                                            <CardBlock>
                                                <Row>
                                                    <Col sm={3}>
                                                        <ProductionResultGroup name="Prod.Qty"/>
                                                    </Col>
                                                    <Col sm={3}>
                                                        <ProductionResultGroup name="Scrap"/>
                                                    </Col>
                                                    <Col sm={3}>
                                                        <ProductionResultGroup name="Ferro"/>
                                                    </Col>
                                                    <Col sm={3}>
                                                        <ProductionResultGroup name="Ore"/>
                                                    </Col>
                                                </Row>
                                            </CardBlock>
                                        </Card>
                                    </Col>
                                    <Col sm={3}>
                                        <Card>
                                            <div className="d-flex justify-content-between">
                                                <div className="p-2 typo-card-title text-uppercase">Finish Good</div>
                                                <Button color="link"><i className="icon-refresh"/></Button>
                                            </div>
                                            <CardBlock>
                                                <Row>
                                                    <Col sm={6}>
                                                        <ProductionResultGroup name="Receipt"/>
                                                    </Col>
                                                    <Col sm={6}>
                                                        <ProductionResultGroup name="Return"/>
                                                    </Col>
                                                </Row>
                                            </CardBlock>
                                        </Card>
                                    </Col>
                                    <Col sm={3}>
                                        <Card>
                                            <div className="d-flex justify-content-between">
                                                <div className="p-2 typo-card-title text-uppercase">Shipping</div>
                                                <Button color="link"><i className="icon-refresh"/></Button>
                                            </div>
                                            <CardBlock>
                                                <Row>
                                                    <Col>
                                                        <ProductionResultGroup name="Receipt"/>
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
                                    <Button color="link"><i className="icon-refresh"/></Button>
                                </div>
                                <CardBlock>
                                    <Row>
                                        <Col sm={6}>
                                            <Card>
                                                <div className="d-flex justify-content-between">
                                                    <div className="p-2 typo-card-title text-uppercase">Normal</div>
                                                    <Button color="link"><i className="icon-refresh"/></Button>
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
                                                                        className="icon-refresh"/></Button>
                                                                </div>
                                                                <CardBlock>
                                                                    <Row>
                                                                        <Col sm={6}>
                                                                            <ProductionResultGroup name="Prod.Qty"/>
                                                                        </Col>
                                                                        <Col sm={6}>
                                                                            <ProductionResultGroup name="Input"/>
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
                                                                        className="icon-refresh"/></Button>
                                                                </div>
                                                                <CardBlock>
                                                                    <Row>
                                                                        <Col sm={6}>
                                                                            <ProductionResultGroup name="Receipt"/>
                                                                        </Col>
                                                                        <Col sm={6}>
                                                                            <ProductionResultGroup name="Return"/>
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
                                                                        className="icon-refresh"/></Button>
                                                                </div>
                                                                <CardBlock>
                                                                    <Row>
                                                                        <Col>
                                                                            <ProductionResultGroup name="Issue"/>
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
                                                    <Button color="link"><i className="icon-refresh"/></Button>
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
                                                                        className="icon-refresh"/></Button>
                                                                </div>
                                                                <CardBlock>
                                                                    <Row>
                                                                        <Col sm={6}>
                                                                            <ProductionResultGroup name="Prod.Qty"/>
                                                                        </Col>
                                                                        <Col sm={6}>
                                                                            <ProductionResultGroup name="Input"/>
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
                                    <Button color="link"><i className="icon-refresh"/></Button>
                                </div>
                                <CardBlock>
                                    <Row>
                                        <Col sm={6}>
                                            <Card>
                                                <div className="d-flex justify-content-between">
                                                    <div className="p-2 typo-card-title text-uppercase">Normal</div>
                                                    <Button color="link"><i className="icon-refresh"/></Button>
                                                </div>
                                                <CardBlock>
                                                    <Row>
                                                        <Col>
                                                            <Card>
                                                                <div className="d-flex justify-content-between">
                                                                    <div className="p-2 typo-card-title text-uppercase">
                                                                        Semi Product
                                                                    </div>
                                                                    <Button color="link"><i
                                                                        className="icon-refresh"/></Button>
                                                                </div>
                                                                <CardBlock>
                                                                    <Row>
                                                                        <Col sm={6}>
                                                                            <ProductionResultGroup name="Prod.Qty"/>
                                                                        </Col>
                                                                        <Col sm={6}>
                                                                            <ProductionResultGroup name="Input"/>
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
                                                                        className="icon-refresh"/></Button>
                                                                </div>
                                                                <CardBlock>
                                                                    <Row>
                                                                        <Col sm={6}>
                                                                            <ProductionResultGroup name="Receipt"/>
                                                                        </Col>
                                                                        <Col sm={6}>
                                                                            <ProductionResultGroup name="Return"/>
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
                                                                        className="icon-refresh"/></Button>
                                                                </div>
                                                                <CardBlock>
                                                                    <Row>
                                                                        <Col>
                                                                            <ProductionResultGroup name="Issue"/>
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
                                                    <Button color="link"><i className="icon-refresh"/></Button>
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
                                                                        className="icon-refresh"/></Button>
                                                                </div>
                                                                <CardBlock>
                                                                    <Row>
                                                                        <Col sm={6}>
                                                                            <ProductionResultGroup name="Prod.Qty"/>
                                                                        </Col>
                                                                        <Col sm={6}>
                                                                            <ProductionResultGroup name="Input"/>
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
