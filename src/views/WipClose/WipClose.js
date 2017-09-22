import React, {Component} from 'react';
import {Container,
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
                                <CardTitle>IF Status <Button color="link"><i className="icon-refresh"></i></Button></CardTitle>
                                <CardBlock>
                                    <ListGroup>
                                        <ListGroupItem>
                                            <p>NEW</p>
                                            <p>New</p>
                                            <Badge pill>4</Badge>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p>NEW</p>
                                            <p>New</p>
                                            <Badge pill>4</Badge>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p>NEW</p>
                                            <p>New</p>
                                            <Badge pill>4</Badge>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p>NEW</p>
                                            <p>New</p>
                                            <Badge pill>4</Badge>
                                        </ListGroupItem>
                                    </ListGroup>
                                </CardBlock>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card>
                                <CardTitle>OIT <Button color="link"><i className="icon-refresh"></i></Button></CardTitle>
                                <CardBlock>
                                    <ListGroup>
                                        <ListGroupItem>
                                            <p>Mtl.Trx</p>
                                            <p>Pending: 0</p>
                                            <p>Error: 0</p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p>Mtl.Trx</p>
                                            <p>Pending: 0</p>
                                            <p>Error: 0</p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p>Mtl.Trx</p>
                                            <p>Pending: 0</p>
                                            <p>Error: 0</p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p>Mtl.Trx</p>
                                            <p>Pending: 0</p>
                                            <p>Error: 0</p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p>Mtl.Trx</p>
                                            <p>Pending: 0</p>
                                            <p>Error: 0</p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p>Mtl.Trx</p>
                                            <p>Pending: 0</p>
                                            <p>Error: 0</p>
                                        </ListGroupItem>
                                    </ListGroup>
                                </CardBlock>
                            </Card>
                        </Col>
                        <Col sm={6}>
                            <Card>
                                <CardTitle>Summary <Button color="link"><i className="icon-refresh"></i></Button></CardTitle>
                                <Row>
                                    <Button color="success">TO WIP_READY 9</Button>
                                    <p>TOTAL AVAILABLE: 4216</p>
                                    <p>TOTAL READY: 4344</p>
                                </Row>
                                <Row>
                                    <Col sm={6}>
                                        <p>Semi Product</p>
                                        <ListGroup>
                                            <ListGroupItem>
                                                <p>Steel Making</p>
                                                <Badge>9</Badge>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <p>Rebar</p>
                                                <Badge>9</Badge>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <p>Section</p>
                                                <Badge>9</Badge>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                    <Col sm={6}>
                                        <p>Finish Good</p>
                                        <ListGroup>
                                            <ListGroupItem>
                                                <p>Steel Making</p>
                                                <Badge>9</Badge>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <p>Rebar</p>
                                                <Badge>9</Badge>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <p>Section</p>
                                                <Badge>9</Badge>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                    <Col sm={6}>
                                        <p>Rework</p>
                                        <ListGroup>
                                            <ListGroupItem>
                                                <p>Rebar</p>
                                                <Badge>9</Badge>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <p>Section</p>
                                                <Badge>9</Badge>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                    <Col sm={6}>
                                        <p>Shipping</p>
                                        <ListGroup>
                                            <ListGroupItem>
                                                <p>Steel Making</p>
                                                <Badge>9</Badge>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <p>Rebar</p>
                                                <Badge>9</Badge>
                                            </ListGroupItem>
                                            <ListGroupItem>
                                                <p>Section</p>
                                                <Badge>9</Badge>
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
                                <CardTitle>Negative Raw Material <Button color="link"><i className="icon-refresh"></i></Button></CardTitle>
                                <CardBlock>
                                    <ListGroup>
                                        <ListGroupItem>
                                            <p>AA810V00</p>
                                            <p>Description</p>
                                            <p>On Hand 34,432,296</p>
                                            <p>Pending 34,432,296</p>
                                            <p>Balance 34,432,296</p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p>AA810V00</p>
                                            <p>Description</p>
                                            <p>On Hand 34,432,296</p>
                                            <p>Pending 34,432,296</p>
                                            <p>Balance 34,432,296</p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p>AA810V00</p>
                                            <p>Description</p>
                                            <p>On Hand 34,432,296</p>
                                            <p>Pending 34,432,296</p>
                                            <p>Balance 34,432,296</p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p>AA810V00</p>
                                            <p>Description</p>
                                            <p>On Hand 34,432,296</p>
                                            <p>Pending 34,432,296</p>
                                            <p>Balance 34,432,296</p>
                                        </ListGroupItem>
                                    </ListGroup>
                                </CardBlock>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card>
                                <CardTitle>Trx Code 66 <Button color="link"><i className="icon-refresh"></i></Button></CardTitle>
                                <CardBlock>
                                    <ListGroup>
                                        <ListGroupItem>
                                            <p>AA810V00</p>
                                            <p>123,456</p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p>AA810V00</p>
                                            <p>123,456</p>
                                        </ListGroupItem>
                                    </ListGroup>
                                </CardBlock>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card>
                                <CardTitle>Backflush <Button color="link"><i className="icon-refresh"></i></Button></CardTitle>
                                <CardBlock>
                                    <ListGroup>
                                        <ListGroupItem>
                                            <p>AA810V00</p>
                                            <p>123,456</p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p>AA810V00</p>
                                            <p>123,456</p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p>AA810V00</p>
                                            <p>123,456</p>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <p>AA810V00</p>
                                            <p>123,456</p>
                                        </ListGroupItem>
                                    </ListGroup>
                                </CardBlock>
                            </Card>
                        </Col>
                        <Col sm={3}>
                            <Card>
                                <CardTitle>History <Button color="link"><i className="icon-refresh"></i></Button></CardTitle>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default WipClose;
