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
import Axios from 'axios';
//Custom
import IfStatus from './IFStatus/IFStatus';
import Oit from './Oit/Oit';
import Summary from './Summary/Summary';
import NegativeRawMaterial from './NegativeRawMaterial/NegativeRawMaterial';
import TrxCode66 from './TrxCode66/TrxCode66';
import BackFlush from './Backflush/BackFlush';
import History from './History/History';
import data from './_data';
import commonURL from './_url';
import InitData from './_initData';

class WipClose extends Component {
    //Lifecycle
    constructor(props) {
        super(props);
        console.log('WipClose constructor');
        this.state = InitData;
    }

    componentDidMount() {
        console.log('componentDidMount');
        // set default data for fromdate todate : 0106 ~ 0205 --> 01, from 0101 to 0131
        this.setDefaultControl();
        // get data with default setting
        this.doSearch();
        this.interval = setInterval(this.onRefresh, 5000);
    }

    componentWillMount() {
        clearInterval(this.interval);
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
        if (e.target.checked) {
            // this.interval = setInterval(this.doSearch(),500); //5s
            this.setState({
                running: true
            })
        }
        else {
            // clearInterval(this.interval);
            this.setState({
                running: false
            })
        }
    };

    handleFromDateChange = (e) => {
        console.log('handleFromDateChange', e.target.value);
        this.setState({
            Control: {
                fromDate: e.target.value,
                toDate: this.state.Control.toDate
            }
        })
    };
    handleToDateChange = (e) => {
        console.log('handleToDateChange', e.target.value);
        this.setState({
            Control: {
                fromDate: this.state.Control.fromDate,
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
        this.searchIfStatus();
        // this.searchOit();
        // this.searchSummary();
        // this.searchNegativeRawMaterial();
        // this.searchTrxCode66();
        // this.searchBackFlush();
        // this.searchHistory();
        // this.test();
    };
    test = () => {
        console.log('TEST');
        Axios.get('http://localhost:8000/wipclose/ifstatus', {params: {fromDate: "20160901", toDate: "20160930"}})
        // Axios.get('http://172.27.24.31:8080/YARD/get-yard-start-factory-type')
            .then((res) => {
                console.log(res);
            })
            .catch((error) => console.log(error));
    };
    searchIfStatus = () => {
        // let fromDate = this.state.Control.fromDate;
        // let toDate = this.state.Control.toDate;
        let fromDate = "20160901";
        let toDate = "20160930";
        //console.log(commonURL.IFStatus,fromDate,toDate);
        Axios.get(commonURL.IFStatus, {params: {fromDate: "20160901", toDate: "20160930"}})
            .then((res) => {
                console.log(res);
                this.setState({
                    IfStatus: {
                        name: 'If Status',
                        data: res.data
                    }
                })
            })
            .catch((error) => console.log(error));
    };
    searchOit = () => {
        let fromDate = this.state.Control.fromDate;
        let toDate = this.state.Control.toDate;
        console.log('searchOit', fromDate, toDate);
        Axios.get(commonURL.Oit)
            .then((res) => {
                this.setState({
                    Oit: res.data.Oit
                })
            })
            .catch((error) => console.log(error));
    };
    searchSummary = () => {
        let fromDate = this.state.Control.fromDate;
        let toDate = this.state.Control.toDate;
        console.log('searchSummary', fromDate, toDate);
        Axios.get(commonURL.Summary)
            .then((res) => {
                this.setState({
                    Summary: res.data.Summary
                })
            })
            .catch((error) => console.log(error));
    };
    searchNegativeRawMaterial = () => {
        let fromDate = this.state.Control.fromDate;
        let toDate = this.state.Control.toDate;
        console.log('searchNegativeRawMaterial', fromDate, toDate);
        Axios.get(commonURL.Negative)
            .then((res) => {
                this.setState({
                    NegativeRawMaterial: res.data.NegativeRawMaterial
                })
            })
            .catch((error) => console.log(error));
    };
    searchTrxCode66 = () => {
        let fromDate = this.state.Control.fromDate;
        let toDate = this.state.Control.toDate;
        console.log('searchTrxCode66', fromDate, toDate);
        Axios.get(commonURL.TrxCode66)
            .then((res) => {
                this.setState({
                    TrxCode66: res.data.TrxCode66
                })
            })
            .catch((error) => console.log(error));
    };
    searchBackFlush = () => {
        let fromDate = this.state.Control.fromDate;
        let toDate = this.state.Control.toDate;
        console.log('searchBackFlush', fromDate, toDate);
        Axios.get(commonURL.BackFlush)
            .then((res) => {
                this.setState({
                    BackFlush: res.data.BackFlush
                })
            })
            .catch((error) => console.log(error));
    };
    searchHistory = () => {
        let fromDate = this.state.Control.fromDate;
        let toDate = this.state.Control.toDate;
        console.log('searchHistory', fromDate, toDate);
        Axios.get(commonURL.History)
            .then((res) => {
                this.setState({
                    History: res.data.History
                })
            })
            .catch((error) => console.log(error));
    };
    onRefresh = () => {
        if (this.state.running) {
            this.doSearch();
        }
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
                            <IfStatus
                                name={this.state.IfStatus.name}
                                data={this.state.IfStatus.data}
                                handleRefresh={this.searchIfStatus}/>
                        </Col>
                        <Col lg={3} sm={12}>
                            <Oit
                                name={this.state.Oit.name}
                                data={this.state.Oit.data}
                                handleRefresh={this.searchOit}/>
                        </Col>
                        <Col lg={6} sm={12}>
                            <Summary
                                name={this.state.Summary.name}
                                data={this.state.Summary.data}
                                handleRefresh={this.searchSummary}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3} sm={12}>
                            <NegativeRawMaterial
                                name={this.state.NegativeRawMaterial.name}
                                data={this.state.NegativeRawMaterial.data}
                                handleRefresh={this.searchNegativeRawMaterial}
                            />
                        </Col>
                        <Col lg={3} sm={12}>
                            <TrxCode66
                                name={this.state.TrxCode66.name}
                                data={this.state.TrxCode66.data}
                                handleRefresh={this.searchTrxCode66}
                            />
                        </Col>
                        <Col lg={3} sm={12}>
                            <BackFlush
                                name={this.state.BackFlush.name}
                                data={this.state.BackFlush.data}
                                handleRefresh={this.searchBackFlush}
                            />
                        </Col>
                        <Col lg={3} sm={12}>
                            <History
                                name={this.state.History.name}
                                data={this.state.History.data}
                                handleRefresh={this.searchHistory}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default WipClose;
