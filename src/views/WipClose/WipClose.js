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
import AlertContainer from 'react-alert';

//Custom
import IfStatus from './IFStatus/IFStatus';
import Oit from './Oit/Oit';
import Summary from './Summary/Summary';
import NegativeRawMaterial from './NegativeRawMaterial/NegativeRawMaterial';
import TrxCode66 from './TrxCode66/TrxCode66';
import BackFlush from './Backflush/BackFlush';
import History from './History/History';

import commonURL from './_url';
import InitData from './_initData';

class WipClose extends Component {

    //Lifecycle
    constructor(props) {
        super(props);
        this.state = InitData;
    }

    componentWillMount() {
        // default setting for fromdate todate : 0106 ~ 0205 --> 01, from 0101 to 0131
        this.setDefaultControl();
    }

    componentDidMount() {
        // get data with default setting
        this.doSearch(this.state.SearchCategory);
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    //Event
    handleFormSubmit = (e) => {
        e.preventDefault();
    };

    handleSearch = () => {
        this.doSearch(this.state.SearchCategory);
    };

    handleMonitor = (e) => {

        if (e.target.checked) {
            let intervalId = setInterval(this.doMonitor,1000);
            this.setState({
               intervalId: intervalId
            });
        }
        else {
            clearInterval(this.state.intervalId);
            this.setState({Counter: 0});
        }
    };

    handleFromDateChange = (e) => {
        this.setState({
            Control: {
                fromDate: e.target.value,
                toDate: this.state.Control.toDate
            }
        })
    };

    handleToDateChange = (e) => {
        this.setState({
            Control: {
                fromDate: this.state.Control.fromDate,
                toDate: e.target.value
            }
        })
    };

    handleToWipReady = (numberOfWipReady) => {

        if (!this.canUpdateToWipReady(numberOfWipReady)){
            return false;
        }

        const fromDate = this.formatDateForQuery(this.state.Control.fromDate);
        const toDate = this.formatDateForQuery(this.state.Control.toDate);
        //fortest
        // let fromDate = '20170601';
        // let toDate = '20170630';

        this.updateToWipReady(fromDate, toDate);

    };

    handleItemUpdateClick = (groupName, itemName) => {

        let id = `${groupName} ${itemName}`;

        if (!this.canUpdateToNew(id)){
            return false;
        }

        const fromDate = this.formatDateForQuery(this.state.Control.fromDate);
        const toDate = this.formatDateForQuery(this.state.Control.toDate);
        //for Test
        // let fromDate = '20170601';
        // let toDate = '20170630';

        this.updateToNew(fromDate,toDate,id);
    };

    doSearch = (_searchs) => {

        _searchs.forEach(s => {
           switch (s){
               case "IFSTATUS" :
                   this.searchIfStatus();
                   break;
               case "OIT":
                   this.searchOit();
                   break;
               case "SUMMARY":
                   this.searchSummary();
                   break;
               case "NEGATIVERAW":
                   this.searchNegativeRawMaterial();
                   break;
               case "TRX66":
                   this.searchTrxCode66();
                   break;
               case "BACKFLUSH":
                   this.searchBackFlush();
                   break;
               default:
                   this.searchHistory();
                   break;
           }
        });

    };

    searchIfStatus = () => {
        this.setState({
            IfStatus:{
                ...this.state.IfStatus,
                running: true
            }
        });

        const fromDate = this.formatDateForQuery(this.state.Control.fromDate);
        const toDate = this.formatDateForQuery(this.state.Control.toDate);
        //for test
        // const fromDate = "20170601";
        // const toDate = "20170630";

        Axios.get(commonURL.IFStatus, {params: {fromDate: fromDate, toDate: toDate}})
            .then((res) => {
                this.setState({
                    IfStatus: {
                        ...this.state.IfStatus,
                        running: false,
                        data: res.data
                    }
                })
            })
            .catch((error) => {

                this.checkRequestEror(error);

                this.setState({
                    IfStatus: {
                        ...this.state.IfStatus,
                        running: false,
                        data: []
                    }
                })
            });
    };

    searchOit = () => {

        this.setState({
            Oit:{
                ...this.state.Oit,
                running: true
            }
        });

        Axios.get(commonURL.Oit)
            .then((res) => {
                this.setState({
                    Oit: {
                        ...this.state.Oit,
                        running: false,
                        data: res.data
                    }
                })
            })
            .catch((error) => {

                this.checkRequestEror(error);

                this.setState({
                    Oit: {
                        ...this.state.Oit,
                        running: false,
                        data: []
                    }
                })
            });
    };

    searchSummary = () => {

        this.setState({
            Summary:{
                ...this.state.Summary,
                running: true
            }
        });

        const fromDate = this.formatDateForQuery(this.state.Control.fromDate);
        const toDate = this.formatDateForQuery(this.state.Control.toDate);
        //forTest
        // const fromDate = "20170601";
        // const toDate = "20170630";

        Axios.get(commonURL.Summary, {params: {fromDate: fromDate, toDate: toDate}})
            .then((res) => {
                this.setState({
                    Summary: {
                        ...this.state.Summary,
                        running: false,
                        data: res.data
                    }}

                );
            })
            .catch((error) => {
                this.checkRequestEror(error);

                this.setState({
                    Summary: {
                        ...this.state.Summary,
                        running: false,
                        data: []
                    }}

                );
            });
    };

    searchNegativeRawMaterial = () => {

        this.setState({
            NegativeRawMaterial:{
                ...this.state.NegativeRawMaterial,
                running: true
            }
        });

        const fromDate = this.formatDateForQuery(this.state.Control.fromDate);
        const toDate = this.formatDateForQuery(this.state.Control.toDate);

        //for Test
        // const fromDate = "20170601";
        // const toDate = "20170630";
        Axios.get(commonURL.Negative, {params: {fromDate: fromDate, toDate: toDate}})
            .then((res) => {
                this.setState({
                    NegativeRawMaterial: {
                        ...this.state.NegativeRawMaterial,
                        running: false,
                        data: res.data
                    }
                });
            })
            .catch((error) => {
                this.checkRequestEror(error);

                this.setState({
                    NegativeRawMaterial: {
                        ...this.state.NegativeRawMaterial,
                        running: false,
                        data: []
                    }
                });
            });
    };

    searchTrxCode66 = () => {

        this.setState({
            TrxCode66:{
                ...this.state.TrxCode66,
                running: true
            }
        });

        const fromDate = this.formatDateForQuery(this.state.Control.fromDate);
        const toDate = this.formatDateForQuery(this.state.Control.toDate);
        //forTest
        // const fromDate = "20170601";
        // const toDate = "20170630";
        Axios.get(commonURL.TrxCode66, {params: {fromDate: fromDate, toDate: toDate}})
            .then((res) => {
                this.setState({
                    TrxCode66: {
                        ...this.state.TrxCode66,
                        running: false,
                        data: res.data
                    }
                })
            })
            .catch((error) => {
                this.checkRequestEror(error);

                this.setState({
                    TrxCode66: {
                        ...this.state.TrxCode66,
                        running: false,
                        data: []
                    }
                })
            });
    };

    searchBackFlush = () => {

        this.setState({
            BackFlush:{
                ...this.state.BackFlush,
                running: true
            }
        });

        const fromDate = this.formatDateForQuery(this.state.Control.fromDate);
        const toDate = this.formatDateForQuery(this.state.Control.toDate);
        //for test
        // const fromDate = "20170601";
        // const toDate = "20170630";

        Axios.get(commonURL.BackFlush, {params: {fromDate: fromDate, toDate: toDate}})
            .then((res) => {
                this.setState({
                    BackFlush: {
                        ...this.state.BackFlush,
                        running: false,
                        data: res.data
                    }
                })
            })
            .catch((error) => {
                this.checkRequestEror(error);

                this.setState({
                    BackFlush: {
                        ...this.state.BackFlush,
                        running: false,
                        data: []
                    }
                })
            });
    };

    searchHistory = () => {

        this.setState({
            History: this.readHistory()
        })

    };

    refreshRate = 5;
    _searchs = ['IFSTATUS', 'OIT' , 'SUMMARY'];

    doMonitor = () => {

        let counter = this.state.Counter + 1;
        this.setState({Counter: counter});

        if (this.canDoMonitor(counter)){
            this.doSearch(this._searchs);
        }
    };

    updateToWipReady = (fromDate, toDate) => {

        let params = {fromDate: fromDate, toDate: toDate};

        Axios.post(
            commonURL.UpdateToWipReady
            , params)
            .then((res) => {

                const successRows = res.data;
                const id = "WIP_READY";

                if (successRows > 0){
                    this.doFeedBack(`Updated ${successRows} row(s) in ${id}!` );
                    this.writeHistory(id,successRows);
                    //research
                    this.searchSummary();
                    this.searchHistory();
                }
                else{
                    this.doFeedBack(`Nothing updated !`);
                }

            })
            .catch((error) => console.log(error));
    };

    updateToNew = (fromDate, toDate, id) => {

        let params = {fromDate: fromDate, toDate: toDate, id: id};

        Axios.post(
            commonURL.UpdateToNew
            , params)
            .then((res) => {

                const successRows = res.data;

                if (successRows > 0){
                    this.doFeedBack(`Updated ${successRows} row(s) in ${id}!` );
                    this.writeHistory(id,successRows);
                    //research
                    this.searchSummary();
                    this.searchHistory();
                }
                else{
                    this.doFeedBack(`Nothing updated !`);
                }
            })
            .catch((error) => console.log(error));


    };

    //Helper

    canUpdateToWipReady = (numberOfWipReady) => {
        return confirm(`Do you want to update ${numberOfWipReady} row(s) to WIP_READY ?`);
    };

    canUpdateToNew = (id) => {
        return confirm(`Do you want to update ${id} ?`);
    };

    canDoMonitor = (counter) => {
        return counter > 0 && (counter % this.refreshRate) === 0;
    };

    writeHistory = (id, count) => {

        const time = new Date().toLocaleString();
        const history = {
          name: id,
          total: count,
          happenTime: time
        };

        let histories = localStorage.getItem("history");
        if (histories === '' || histories === null){
            //not existed
            let arr = [];
            arr.push(history);
            localStorage.setItem("history",JSON.stringify(arr));
            return;
        }
        //existed
        const max = 5;
        let arr = JSON.parse(localStorage.getItem("history"));
        let topFilter = arr.filter((item,index) => {
            return index < max-1;
        });
        topFilter.unshift(history);
        localStorage.setItem("history",JSON.stringify(topFilter));
    };

    readHistory = () => {

        let history = {
            name: 'History',
            data: []
        };

        let histories = localStorage.getItem("history");
        if (histories === '' || histories === null){
            return history;
        }
        history = {
            ...history,
            data: JSON.parse(localStorage.getItem("history"))
        };
        return history;
    };

    alertOptions = {
        offset: 14,
        position: 'bottom right',
        theme: 'dark',
        time: 5000,
        transition: 'scale'
    };

    doFeedBack = (message) => {
        this.msg.show(message);
    };

    setDefaultControl = () => {
        //fromDate, toDate
        const current = new Date();
        let currentYear = current.getFullYear();
        let currentMonth = current.getMonth(); //Month from 0
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
        let dayEndOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        currentYear = '' + currentYear;
        currentMonth = '' + (currentMonth + 1);

        //format string
        if (dayEndOfMonth < 10) {
            dayEndOfMonth = "0" + dayEndOfMonth;
        }
        if (currentMonth < 10) {
            currentMonth = "0" + currentMonth;
        }

        const fromDate = [currentYear, currentMonth, '01'].join('-');
        const toDate = [currentYear, currentMonth, dayEndOfMonth].join('-');

        //for test
        // const fromDate = '2017-06-01';
        // const toDate = '2017-06-30';

        this.setState(prevState => ({
                Control: {
                    fromDate: fromDate,
                    toDate: toDate
                }
            }
        ));
    };

    formatDateForQuery = (dateToFormat) => {
        return dateToFormat.replace(/-/g,'');
    };

    checkRequestEror = (error) => {
        console.log(error);
        if(error.request){
            this.doFeedBack('Request cannot be sent or server cannot be reached !');
        }
    };

    render() {

        let showCounter = [0,4,3,2,1];

        return (
            <div className="animated fadeIn">
                <AlertContainer ref={a => this.msg = a} { ...this.alertOptions}/>
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
                                        <div>{this.state.Counter > 0 ? "Refresh in " + showCounter[this.state.Counter % this.refreshRate] : ""}</div>
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
                                running={this.state.IfStatus.running}
                                handleRefresh={this.searchIfStatus}/>
                        </Col>
                        <Col lg={3} sm={12}>
                            <Oit
                                name={this.state.Oit.name}
                                data={this.state.Oit.data}
                                running={this.state.Oit.running}
                                handleRefresh={this.searchOit}/>
                        </Col>
                        <Col lg={6} sm={12}>
                            <Summary
                                name={this.state.Summary.name}
                                data={this.state.Summary.data}
                                handleRefresh={this.searchSummary}
                                handleToWipReady={(numberOfWipReady) => this.handleToWipReady(numberOfWipReady)}
                                handleItemUpdateClick={this.handleItemUpdateClick}
                                running={this.state.Summary.running}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={3} sm={12}>
                            <NegativeRawMaterial
                                name={this.state.NegativeRawMaterial.name}
                                data={this.state.NegativeRawMaterial.data}
                                handleRefresh={this.searchNegativeRawMaterial}
                                running={this.state.NegativeRawMaterial.running}
                            />
                        </Col>
                        <Col lg={3} sm={12}>
                            <TrxCode66
                                name={this.state.TrxCode66.name}
                                data={this.state.TrxCode66.data}
                                handleRefresh={this.searchTrxCode66}
                                running={this.state.TrxCode66.running}
                            />
                        </Col>
                        <Col lg={3} sm={12}>
                            <BackFlush
                                name={this.state.BackFlush.name}
                                data={this.state.BackFlush.data}
                                handleRefresh={this.searchBackFlush}
                                running={this.state.TrxCode66.running}
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
