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
                                    <Col sm={12} xl={6}>
                                        <Card>
                                            <div className="d-flex justify-content-between">
                                                <div className="p-2 typo-card-title text-uppercase">Semi Product</div>
                                                <Button color="link"><i className="icon-refresh"/></Button>
                                            </div>
                                            <CardBlock>
                                                <Row>
                                                    <Col sm={6} xl={3}>
                                                        <ProductionResultGroup name="Prod.Qty" switchName="SteelMaking.SemiProduct.ProdQty" erp={100} mes={100}/>
                                                    </Col>
                                                    <Col sm={6} xl={3}>
                                                        <ProductionResultGroup name="Scrap" switchName="SteelMaking.SemiProduct.Scrap" erp={100} mes={100}/>
                                                    </Col>
                                                    <Col sm={6} xl={3}>
                                                        <ProductionResultGroup name="Ferro" switchName="SteelMaking.SemiProduct.Ferro" erp={100} mes={100}/>
                                                    </Col>
                                                    <Col sm={6} xl={3}>
                                                        <ProductionResultGroup name="Ore" switchName="SteelMaking.SemiProduct.Ore" erp={100} mes={100}/>
                                                    </Col>
                                                </Row>
                                            </CardBlock>
                                        </Card>
                                    </Col>
                                    <Col sm={6} xl={3}>
                                        <Card>
                                            <div className="d-flex justify-content-between">
                                                <div className="p-2 typo-card-title text-uppercase">Finish Good</div>
                                                <Button color="link"><i className="icon-refresh"/></Button>
                                            </div>
                                            <CardBlock>
                                                <Row>
                                                    <Col sm={12} xl={6}>
                                                        <ProductionResultGroup name="Receipt" switchName="SteelMaking.FinishGood.Receipt"/>
                                                    </Col>
                                                    <Col sm={12} xl={6}>
                                                        <ProductionResultGroup name="Return" switchName="SteelMaking.FinishGood.Return"/>
                                                    </Col>
                                                </Row>
                                            </CardBlock>
                                        </Card>
                                    </Col>
                                    <Col sm={6} xl={3}>
                                        <Card>
                                            <div className="d-flex justify-content-between">
                                                <div className="p-2 typo-card-title text-uppercase">Shipping</div>
                                                <Button color="link"><i className="icon-refresh"/></Button>
                                            </div>
                                            <CardBlock>
                                                <Row>
                                                    <Col>
                                                        <ProductionResultGroup name="Receipt" switchName="SteelMaking.Shipping.Receipt"/>
                                                    </Col>
                                                </Row>
                                            </CardBlock>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col sm={12} xl={6}>
                            <Card>
                                <div className="d-flex justify-content-between">
                                    <div className="p-2 typo-card-title text-uppercase">Deformed Bar</div>
                                    <Button color="link"><i className="icon-refresh"/></Button>
                                </div>
                                <CardBlock>
                                    <Row>
                                        <Col sm={12} xl={6}>
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
                                                                        <Col sm={12} xl={6}>
                                                                            <ProductionResultGroup name="Prod.Qty" switchName="DeformedBar.Normal.SemiProduct.ProdQty"/>
                                                                        </Col>
                                                                        <Col sm={12} xl={6}>
                                                                            <ProductionResultGroup name="Input" switchName="DeformedBar.Normal.SemiProduct.Input"/>
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
                                                                        <Col sm={12} xl={6}>
                                                                            <ProductionResultGroup name="Receipt" switchName="DeformedBar.Normal.FinishGood.Receipt"/>
                                                                        </Col>
                                                                        <Col sm={12} xl={6}>
                                                                            <ProductionResultGroup name="Return" switchName="DeformedBar.Normal.FinishGood.Return"/>
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
                                                                            <ProductionResultGroup name="Issue" switchName="DeformedBar.Normal.Shipping.Issue"/>
                                                                        </Col>
                                                                    </Row>
                                                                </CardBlock>
                                                            </Card>
                                                        </Col>
                                                    </Row>
                                                </CardBlock>
                                            </Card>
                                        </Col>
                                        <Col sm={12} xl={6}>
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
                                                                        <Col sm={12} xl={6}>
                                                                            <ProductionResultGroup name="Prod.Qty" switchName="DeformedBar.Rework.SemiProduct.ProdQty"/>
                                                                        </Col>
                                                                        <Col sm={12} xl={6}>
                                                                            <ProductionResultGroup name="Input" switchName="DeformedBar.Rework.SemiProduct.Input"/>
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
                        <Col sm={12} xl={6}>
                            <Card>
                                <div className="d-flex justify-content-between">
                                    <div className="p-2 typo-card-title text-uppercase">Section</div>
                                    <Button color="link"><i className="icon-refresh"/></Button>
                                </div>
                                <CardBlock>
                                    <Row>
                                        <Col sm={12} xl={6}>
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
                                                                        <Col sm={12} xl={6}>
                                                                            <ProductionResultGroup name="Prod.Qty" switchName="Section.Normal.SemiProduct.ProdQty"/>
                                                                        </Col>
                                                                        <Col sm={12} xl={6}>
                                                                            <ProductionResultGroup name="Input" switchName="Section.Normal.SemiProduct.Input"/>
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
                                                                        <Col sm={12} xl={6}>
                                                                            <ProductionResultGroup name="Receipt" switchName="Section.Normal.FinishGood.Receipt"/>
                                                                        </Col>
                                                                        <Col sm={12} xl={6}>
                                                                            <ProductionResultGroup name="Return" switchName="Section.Normal.FinishGood.Return"/>
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
                                                                            <ProductionResultGroup name="Issue" switchName="Section.Normal.Shipping.Issue"/>
                                                                        </Col>
                                                                    </Row>
                                                                </CardBlock>
                                                            </Card>
                                                        </Col>
                                                    </Row>
                                                </CardBlock>
                                            </Card>
                                        </Col>
                                        <Col sm={12} xl={6}>
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
                                                                        <Col sm={12} xl={6}>
                                                                            <ProductionResultGroup name="Prod.Qty" switchName="Section.Rework.SemiProduct.ProdQty"/>
                                                                        </Col>
                                                                        <Col sm={12} xl={6}>
                                                                            <ProductionResultGroup name="Input" switchName="Section.Rework.SemiProduct.Input"/>
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
