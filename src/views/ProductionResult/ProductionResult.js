import React, {Component} from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    CardBlock,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
//Customs
import ProductionResultGroupList from './ProductionResultGroupList';
import ProductionResultGroupListHeader from './ProductionResultGroupListHeader';
import InitData from './_initData';
import commonURL from './_url';
class ProductionResult extends Component {

    constructor(props){
        super(props);
        console.log('constructor');
        this.state = InitData;
    }

    //Life cycles

    componentDidMount() {
        console.log('componentDidMount');
        // set default data for fromdate todate : 0106 ~ 0205 --> 01, from 0101 to 0131
        this.setDefaultControl();
        // get data with default setting
        this.doSearch();
    }

    //Events

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('handleFormSubmit')
    };
    handleMonthChange = (e) => {
        console.log('handleMonthChange',e.target.value);
        this.setState({
            Control: {
                inputMonth: e.target.value
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


        currentYear = '' + currentYear;
        currentMonth = '' + (currentMonth + 1);

        //format string
        if (currentMonth < 10) {
            currentMonth = "0" + currentMonth;
        }
        let inputMonth = [currentYear, currentMonth].join('-');

        this.setState(prevState => ({
                Control: {
                    inputMonth: inputMonth
                }
            }
        ));
    };
    doSearch = () => {
        console.log('Search');
        this.searchSteelMaking();
        this.searchDeformedBar();
        this.searchSection();
    };
        //Steel making
    searchSteelMaking = () => {
        console.log('Search Steel making');
        this.searchSteelMakingSemi();
        this.searchSteelMakingFinish();
        this.searchSteelMakingShipping();
    };
    searchSteelMakingSemi = () => {
        let sMonth = this.state.Control.inputMonth;
        console.log('Search Steel making - Semi');
    };
    searchSteelMakingFinish = () => {
        let sMonth = this.state.Control.inputMonth;
        console.log('Search Steel making - Finish');
    };
    searchSteelMakingShipping = () => {
        let sMonth = this.state.Control.inputMonth;
        console.log('Search Steel making - Shipping');
    };
        //Deformed Bar
    searchDeformedBar = () => {
        console.log('Search Deformed Bar');
        this.searchDeformedBarNormal();
        this.searchDeformedBarRework()
    };
    searchDeformedBarNormal = () => {
        console.log('Search Deformed Bar - Normal');
        this.searchDeformedBarNormalSemi();
        this.searchDeformedBarNormalFinish();
        this.searchDeformedBarNormalShipping();
    };
    searchDeformedBarNormalSemi = () => {
        let sMonth = this.state.Control.inputMonth;
        console.log ('Search Deformed Bar - Normal - Semi');
    };
    searchDeformedBarNormalFinish = () => {
        let sMonth = this.state.Control.inputMonth;
        console.log('Search Deformed Bar - Normal - Finish');
    };
    searchDeformedBarNormalShipping = () => {
        let sMonth = this.state.Control.inputMonth;
        console.log('Search Deformed Bar - Normal - Shipping');
    };
    searchDeformedBarRework = () => {
        console.log('Search Deformed Bar - Rework');
        this.searchDeformedBarReworkSemi();
    };
    searchDeformedBarReworkSemi = () => {
        let sMonth = this.state.Control.inputMonth;
        console.log('Search Deformed Bar - Rework - Semi');
    };
        //Section
    searchSection = () => {
        console.log('Section');
        this.searchSectionNormal();
        this.searchSectionRework();
    };
    searchSectionNormal = () => {
        console.log('Search Section - Normal');
        this.searchSectionNormalSemi();
        this.searchSectionNormalFinish();
        this.searchSectionNormalShipping();
    };
    searchSectionNormalSemi = () => {
        let sMonth = this.state.Control.inputMonth;
        console.log ('Search Section - Normal - Semi');
    };
    searchSectionNormalFinish = () => {
        let sMonth = this.state.Control.inputMonth;
        console.log('Search Section - Normal - Finish');
    };
    searchSectionNormalShipping = () => {
        let sMonth = this.state.Control.inputMonth;
        console.log('Search Section - Normal - Shipping');
    };
    searchSectionRework = () => {
        console.log('Search Section - Rework');
        this.searchSectionReworkSemi();
    };
    searchSectionReworkSemi = () => {
        let sMonth = this.state.Control.inputMonth;
        console.log('Search Section - Rework - Semi');
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
                                            <Label for="inputMonth" className="mr-1">Month </Label>
                                            <Input type="month" name="inputMonth" id="inputMonth"
                                                   value={this.state.Control.inputMonth}
                                                   onChange={this.handleMonthChange}/>
                                        </FormGroup>
                                        <Button color="primary" className="mb-2 mb-md-0" onClick={this.doSearch}>SEARCH</Button>
                                    </Form>
                                </CardBlock>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Card>
                                <ProductionResultGroupListHeader name="Steel Making" handleClick={this.searchSteelMaking} />
                                <Row className="p-2">
                                    <Col sm={12} xl={6}>
                                        <ProductionResultGroupList name="Semi Product" data={InitData.SteelMaking.SemiProduct.data} handleRefresh={this.searchSteelMakingSemi}/>
                                    </Col>
                                    <Col sm={6} xl={3}>
                                        <ProductionResultGroupList name="Finished Good" data={InitData.SteelMaking.FinishedGood.data} handleRefresh={this.searchSteelMakingFinish}/>
                                    </Col>
                                    <Col sm={6} xl={3}>
                                        <ProductionResultGroupList name="Shipping" data={InitData.SteelMaking.Shipping.data} handleRefresh={this.searchSteelMakingShipping}/>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col sm={12} xl={6}>
                            <Card>
                                <ProductionResultGroupListHeader name="Deformed Bar" handleClick={this.searchDeformedBar} />
                                <CardBlock>
                                    <Row>
                                        <Col sm={12} xl={6}>
                                            <Card>
                                                <ProductionResultGroupListHeader name="Normal" handleClick={this.searchDeformedBarNormal} />
                                                <CardBlock>
                                                    <Row>
                                                        <Col>
                                                            <ProductionResultGroupList name="Semi Product" data={InitData.DeformedBar.Normal.SemiProduct.data} handleRefresh={this.searchDeformedBarNormalSemi}/>
                                                        </Col>
                                                    </Row>
                                                </CardBlock>
                                                <CardBlock>
                                                    <Row>
                                                        <Col>
                                                            <ProductionResultGroupList name="Finished Good" data={InitData.DeformedBar.Normal.FinishedGood.data} handleRefresh={this.searchDeformedBarNormalFinish}/>
                                                        </Col>
                                                    </Row>
                                                </CardBlock>
                                                <CardBlock>
                                                    <Row>
                                                        <Col>
                                                            <ProductionResultGroupList name="Shipping" data={InitData.DeformedBar.Normal.Shipping.data} handleRefresh={this.searchDeformedBarNormalShipping}/>
                                                        </Col>
                                                    </Row>
                                                </CardBlock>
                                            </Card>
                                        </Col>
                                        <Col sm={12} xl={6}>
                                            <Card>
                                                <ProductionResultGroupListHeader name="Rework" handleClick={this.searchDeformedBarRework} />
                                                <CardBlock>
                                                    <Row>
                                                        <Col>
                                                            <ProductionResultGroupList name="Semi Product" data={InitData.DeformedBar.Rework.SemiProduct.data} handleRefresh={this.searchDeformedBarReworkSemi}/>
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
                                <ProductionResultGroupListHeader name="Section" handleClick={this.searchSection} />
                                <CardBlock>
                                    <Row>
                                        <Col sm={12} xl={6}>
                                            <Card>
                                                <ProductionResultGroupListHeader name="Normal" handleClick={this.searchSectionNormal} />
                                                <CardBlock>
                                                    <Row>
                                                        <Col>
                                                            <ProductionResultGroupList name="Semi Product" data={InitData.Section.Normal.SemiProduct.data} handleRefresh={this.searchSectionNormalSemi}/>
                                                        </Col>
                                                    </Row>
                                                </CardBlock>
                                                <CardBlock>
                                                    <Row>
                                                        <Col>
                                                            <ProductionResultGroupList name="Finished Good" data={InitData.Section.Normal.FinishedGood.data} handleRefresh={this.searchSectionNormalFinish}/>
                                                        </Col>
                                                    </Row>
                                                </CardBlock>
                                                <CardBlock>
                                                    <Row>
                                                        <Col>
                                                            <ProductionResultGroupList name="Shipping" data={InitData.Section.Normal.Shipping.data} handleRefresh={this.searchSectionNormalShipping}/>
                                                        </Col>
                                                    </Row>
                                                </CardBlock>
                                            </Card>
                                        </Col>
                                        <Col sm={12} xl={6}>
                                            <Card>
                                                <ProductionResultGroupListHeader name="Rework" handleClick={this.searchSectionRework} />
                                                <CardBlock>
                                                    <Row>
                                                        <Col>
                                                            <ProductionResultGroupList name="Semi Product" data={InitData.Section.Normal.Shipping.data} handleRefresh={this.searchSectionReworkSemi}/>
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
