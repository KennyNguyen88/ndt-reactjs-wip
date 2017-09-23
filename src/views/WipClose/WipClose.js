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

class WipClose extends Component {

    render() {
        return (
            <div className="animated fadeIn">
                <Container fluid>
                    <Row>
                        <Col sm={3}>
                            <Card>
                                <div className="d-flex justify-content-between">
                                    <div className="p-2 typo-card-title text-uppercase">IF Status</div>
                                    <Button color="link"><i className="icon-refresh"></i></Button>
                                </div>
                                <CardBlock>
                                    <ListGroup>
                                        <ListGroupItem>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <p className="mb-0 text-left">NEW</p>
                                                    <p className="mb-0 font-italic text-left">New</p>
                                                </div>
                                                <Badge pill color="primary">4</Badge>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <p className="mb-0 text-left">NEW</p>
                                                    <p className="mb-0 font-italic text-left">New</p>
                                                </div>
                                                <Badge pill color="primary">4</Badge>
                                            </div>

                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <p className="mb-0 text-left">NEW</p>
                                                    <p className="mb-0 font-italic text-left">New</p>
                                                </div>
                                                <Badge pill color="primary">4</Badge>
                                            </div>

                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <p className="mb-0 text-left ">NEW</p>
                                                    <p className="mb-0 font-italic text-left">New</p>
                                                </div>
                                                <Badge pill color="primary">4</Badge>
                                            </div>

                                        </ListGroupItem>
                                    </ListGroup>
                                </CardBlock>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card>
                                <div className="d-flex justify-content-between">
                                    <div className="p-2 typo-card-title text-uppercase">OIT</div>
                                    <Button color="link"><i className="icon-refresh"></i></Button>
                                </div>
                                <CardBlock>
                                    <ListGroup>
                                        <ListGroupItem>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="mb-0">Mtl.Trx</p>
                                                <div>
                                                    <div className="d-flex justify-content-between align-items-center oit-pending">
                                                        <p className="pb-1 mb-0 mr-2 ">Pending: </p>
                                                        <Badge pill color="primary">1000</Badge>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <p className="mb-0">Error: </p>
                                                        <Badge pill color="danger">1000</Badge>
                                                    </div>

                                                </div>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="mb-0">Mtl.Trx</p>
                                                <div>
                                                    <div className="d-flex justify-content-between align-items-center oit-pending">
                                                        <p className="pb-1 mb-0 mr-2 ">Pending: </p>
                                                        <Badge pill color="primary">1000</Badge>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <p className="mb-0">Error: </p>
                                                        <Badge pill color="danger">1000</Badge>
                                                    </div>

                                                </div>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="mb-0">Mtl.Trx</p>
                                                <div>
                                                    <div className="d-flex justify-content-between align-items-center oit-pending">
                                                        <p className="pb-1 mb-0 mr-2 ">Pending: </p>
                                                        <Badge pill color="primary">1000</Badge>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <p className="mb-0">Error: </p>
                                                        <Badge pill color="danger">1000</Badge>
                                                    </div>

                                                </div>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="mb-0">Mtl.Trx</p>
                                                <div>
                                                    <div className="d-flex justify-content-between align-items-center oit-pending">
                                                        <p className="pb-1 mb-0 mr-2 ">Pending: </p>
                                                        <Badge pill color="primary">1000</Badge>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <p className="mb-0">Error: </p>
                                                        <Badge pill color="danger">1000</Badge>
                                                    </div>

                                                </div>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="mb-0">Mtl.Trx</p>
                                                <div>
                                                    <div className="d-flex justify-content-between align-items-center oit-pending">
                                                        <p className="pb-1 mb-0 mr-2 ">Pending: </p>
                                                        <Badge pill color="primary">1000</Badge>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <p className="mb-0">Error: </p>
                                                        <Badge pill color="danger">1000</Badge>
                                                    </div>

                                                </div>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="mb-0">Mtl.Trx</p>
                                                <div>
                                                    <div className="d-flex justify-content-between align-items-center oit-pending">
                                                        <p className="pb-1 mb-0 mr-2 ">Pending: </p>
                                                        <Badge pill color="primary">1000</Badge>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <p className="mb-0">Error: </p>
                                                        <Badge pill color="danger">1000</Badge>
                                                    </div>
                                                </div>
                                            </div>
                                        </ListGroupItem>
                                    </ListGroup>
                                </CardBlock>
                            </Card>
                        </Col>
                        <Col sm={6}>
                            <Card>
                                <div className="d-flex justify-content-between">
                                    <div className="p-2 typo-card-title text-uppercase">Summary</div>
                                    <Button color="link"><i className="icon-refresh"></i></Button>
                                </div>
                                <div className="d-flex justify-content-between align-items-center p-2">
                                    <Button color="primary">TO WIP_READY 9</Button>
                                    <div className="text-right">
                                        <p>TOTAL AVAILABLE: 4216</p>
                                        <p className="mb-0">TOTAL READY: 4344</p>
                                    </div>
                                </div>
                                <Row className="p-3">
                                    <Col sm={6}>
                                        <p>Semi Product</p>
                                        <ListGroup>
                                            <ListGroupItem>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-0">Steel Making</p>
                                                    <Button color="primary" size="sm">999</Button>
                                                </div>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-0">Rebar</p>
                                                    <Button color="primary" size="sm">999</Button>
                                                </div>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-0">Section</p>
                                                    <Button color="primary" size="sm">999</Button>
                                                </div>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                    <Col sm={6}>
                                        <p>Finish Good</p>
                                        <ListGroup>
                                            <ListGroupItem>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-0">Steel Making</p>
                                                     <Button color="primary" size="sm">999</Button>
                                                </div>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-0">Rebar</p>
                                                    <Button color="primary" size="sm">999</Button>
                                                </div>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-0">Section</p>
                                                    <Button color="primary" size="sm">999</Button>
                                                </div>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                    <Col sm={6}>
                                        <p>Rework</p>
                                        <ListGroup>
                                            <ListGroupItem>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-0">Rebar</p>
                                                    <Button color="primary" size="sm">999</Button>
                                                </div>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-0">Section</p>
                                                    <Button color="primary" size="sm">999</Button>
                                                </div>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                    <Col sm={6}>
                                        <p>Shipping</p>
                                        <ListGroup>
                                            <ListGroupItem>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-0">Steel Making</p>
                                                    <Button color="primary" size="sm">999</Button>
                                                </div>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-0">Rebar</p>
                                                    <Button color="primary" size="sm">999</Button>
                                                </div>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="mb-0">Section</p>
                                                    <Button color="primary" size="sm">999</Button>
                                                </div>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3}>
                            <Card>
                                <div className="d-flex justify-content-between">
                                    <div className="p-2 typo-card-title text-uppercase">Negative Raw Material</div>
                                    <Button color="link"><i className="icon-refresh"></i></Button></div>
                                <CardBlock>
                                    <ListGroup>
                                        <ListGroupItem>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <p className="mb-0">AA810V00</p>
                                                    <p className="mb-0">Description</p>
                                                </div>
                                                <div>
                                                    <div className="d-flex justify-content-between align-items-center oit-pending">
                                                        <p className="pb-1 mb-0 mr-2 ">On Hand: </p>
                                                        <Badge pill color="primary">34,432,296</Badge>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center oit-pending">
                                                        <p className="mb-0">Pending: </p>
                                                        <Badge pill color="primary">34,432,296</Badge>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <p className="mb-0">Balance: </p>
                                                        <Badge pill color="primary">34,432,296</Badge>
                                                    </div>

                                                </div>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <p className="mb-0">AA810V00</p>
                                                    <p className="mb-0">Description</p>
                                                </div>
                                                <div>
                                                    <div className="d-flex justify-content-between align-items-center oit-pending">
                                                        <p className="pb-1 mb-0 mr-2 ">On Hand: </p>
                                                        <Badge pill color="primary">34,432,296</Badge>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center oit-pending">
                                                        <p className="mb-0">Pending: </p>
                                                        <Badge pill color="primary">34,432,296</Badge>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <p className="mb-0">Balance: </p>
                                                        <Badge pill color="danger">34,432,296</Badge>
                                                    </div>

                                                </div>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <p className="mb-0">AA810V00</p>
                                                    <p className="mb-0">Description</p>
                                                </div>
                                                <div>
                                                    <div className="d-flex justify-content-between align-items-center oit-pending">
                                                        <p className="pb-1 mb-0 mr-2 ">On Hand: </p>
                                                        <Badge pill color="primary">34,432,296</Badge>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center oit-pending">
                                                        <p className="mb-0">Pending: </p>
                                                        <Badge pill color="primary">34,432,296</Badge>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <p className="mb-0">Balance: </p>
                                                        <Badge pill color="primary">34,432,296</Badge>
                                                    </div>

                                                </div>
                                            </div>
                                        </ListGroupItem>
                                    </ListGroup>
                                </CardBlock>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card>
                                <div className="d-flex justify-content-between">
                                    <div className="p-2 typo-card-title text-uppercase">Trx Code 66</div>
                                    <Button color="link"><i className="icon-refresh"></i></Button></div>
                                <CardBlock>
                                    <ListGroup>
                                        <ListGroupItem>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="mb-0">AA810V00</p>
                                                <p className="mb-0">123,456</p>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="mb-0">AA810V00</p>
                                                <p className="mb-0">123,456</p>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="mb-0">AA810V00</p>
                                                <p className="mb-0">123,456</p>
                                            </div>
                                        </ListGroupItem>
                                    </ListGroup>
                                </CardBlock>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card>
                                <div className="d-flex justify-content-between">
                                    <div className="p-2 typo-card-title text-uppercase">Backflush</div>
                                    <Button color="link"><i className="icon-refresh"></i></Button></div>
                                <CardBlock>
                                    <ListGroup>
                                        <ListGroupItem>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="mb-0">AA810V00</p>
                                                <p className="mb-0">123,456</p>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="mb-0">AA810V00</p>
                                                <p className="mb-0">123,456</p>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="mb-0">AA810V00</p>
                                                <p className="mb-0">123,456</p>
                                            </div>
                                        </ListGroupItem>
                                    </ListGroup>
                                </CardBlock>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card>
                                <div className="d-flex justify-content-between">
                                    <div className="p-2 typo-card-title text-uppercase">History</div>
                                    <Button color="link"><i className="icon-refresh"></i></Button>
                                </div>
                                <CardBlock>
                                    <ListGroup>
                                        <ListGroupItem>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="mb-0">WIP_READY</p>
                                                <div className="text-right">
                                                    <p className="pb-1 mb-0 oit-pending">1000</p>
                                                    <p className="pb-1 mb-0 font-italic">2002-05-30 09:00</p>
                                                </div>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="mb-0">WIP_READY</p>
                                                <div className="text-right">
                                                    <p className="pb-1 mb-0 oit-pending">1000</p>
                                                    <p className="pb-1 mb-0 font-italic">2002-05-30 09:00</p>
                                                </div>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="mb-0">WIP_READY</p>
                                                <div className="text-right">
                                                    <p className="pb-1 mb-0 oit-pending">1000</p>
                                                    <p className="pb-1 mb-0 font-italic">2002-05-30 09:00</p>
                                                </div>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <p className="mb-0">WIP_READY</p>
                                                <div className="text-right">
                                                    <p className="pb-1 mb-0 oit-pending">1000</p>
                                                    <p className="pb-1 mb-0 font-italic">2002-05-30 09:00</p>
                                                </div>
                                            </div>
                                        </ListGroupItem>
                                    </ListGroup>
                                </CardBlock>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default WipClose;
