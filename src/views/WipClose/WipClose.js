//Libs
import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Card,
    CardBlock
} from 'reactstrap';
import SwitchButton from 'react-switch-button';
//Custom
import IfStatus from './IFStatus/IFStatus';
import Oit from './Oit/Oit';
import Summary from './Summary/Summary';
import NegativeRawMaterial from './NegativeRawMaterial/NegativeRawMaterial';
import TrxCode66 from './TrxCode66/TrxCode66';
import BackFlush from './Backflush/BackFlush';
import History from './History/History';
import data from './_data';

class WipClose extends Component {
    //Lifecycle
    constructor(props) {
        super(props);
        this.state = data;
        //this.state = {};
    }

    componentDidMount() {
        // set default data for fromdata todate : 0106 ~ 0205 --> 01, from 0101 to 0131
        this.setDefaultControl();
        // get data with default setting
        this.doSearch();

    }

    //Event
    handleFormSubmit = (e) => {
        e.preventDefault();
    };

    handleSearch = () => {
        console.log('handleSearch');
        this.doSearch();
    };

    handleMonitor = (e) => {
        console.log('handleMonitor', e.target.checked);
    };

    handleFromDateChange = (e) => {
        console.log('handleFromDateChange', e.target.value);
        this.setState({
            Control: {
                fromDate: e.target.value
            }
        })
    };

    handleToDateChange = (e) => {
        console.log('handleToDateChange', e.target.value);
        this.setState({
            Control: {
                toDate: e.target.value
            }
        })
    };

    //Helper

    setDefaultControl = () => {
        let current = new Date();
        var currentYear = current.getFullYear();
        var currentMonth = current.getMonth(); //Month from 0
        let currentDay = current.getDate();

        if (currentDay < 6) {
            if (currentMonth > 0) {
                currentMonth = currentMonth - 1;
            }
            else {
                currentYear = currentYear - 1;
                currentMonth = 11;
            }
        }
        var dayEndOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        currentYear = '' + currentYear;
        currentMonth = '' + (currentMonth + 1);

        //format string
        if (dayEndOfMonth < 10) {
            dayEndOfMonth = "0" + dayEndOfMonth;
        }
        if (currentMonth < 10) {
            currentMonth = "0" + currentMonth;
        }
        let fromDate = [currentYear, currentMonth, '01'].join('-');
        let toDate = [currentYear, currentMonth, dayEndOfMonth].join('-');

        this.setState(prevState => ({
                Control: {
                    fromDate: fromDate,
                    toDate: toDate
                }
            }
        ));
    };
    doSearch = () => {
        console.log('doSearch');
        // console.log(this.state.Control);
        // console.log('search', this.state.Control.fromDate);
        // console.log('search', this.state.Control.toDate);
    };


    render() {
        return (
            <div className="animated fadeIn">
                <Container fluid>
                    <Row>
                        <Col>
                            <Card>
                                <CardBlock>
                                    <Form inline className="d-flex justify-content-around flex-column flex-md-row"
                                          onSubmit={this.handleFormSubmit}>
                                        <FormGroup className="mr-2">
                                            <Label for="inputFromDate" className="mr-1">From Date </Label>
                                            <Input type="date" name="inputFromDate" id="inputFromDate"
                                                   value={this.state.Control.fromDate}
                                                   onChange={this.handleFromDateChange}/>
                                        </FormGroup>
                                        <FormGroup className="mr-2">
                                            <Label for="inputToDate" className="mr-1">To Date </Label>
                                            <Input type="date" name="inputToDate" id="inputToDate"
                                                   value={this.state.Control.toDate}
                                                   onChange={this.handleToDateChange}/>
                                        </FormGroup>
                                        <Button color="primary" className="mb-2 mb-md-0" onClick={this.handleSearch}>SEARCH</Button>
                                        <SwitchButton name="switch-refresh" label="Monitor"
                                                      onChange={this.handleMonitor}/>
                                    </Form>
                                </CardBlock>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3} sm={12}>
                            <IfStatus name={this.state.IfStatus.name} data={this.state.IfStatus.data}/>
                        </Col>
                        <Col lg={3} sm={12}>
                            <Oit name={this.state.Oit.name} data={this.state.Oit.data}/>
                        </Col>
                        <Col lg={6} sm={12}>
                            <Summary name={this.state.Summary.name} data={this.state.Summary.data}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3} sm={12}>
                            <NegativeRawMaterial name={this.state.NegativeRawMaterial.name}
                                                 data={this.state.NegativeRawMaterial.data}/>
                        </Col>
                        <Col lg={3} sm={12}>
                            <TrxCode66 name={this.state.TrxCode66.name} data={this.state.TrxCode66.data}/>
                        </Col>
                        <Col lg={3} sm={12}>
                            <BackFlush name={this.state.BackFlush.name} data={this.state.BackFlush.data}/>
                        </Col>
                        <Col lg={3} sm={12}>
                            <History name={this.state.History.name} data={this.state.History.data}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default WipClose;
