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
import Axios from 'axios';
class ProductionResult extends Component {

    constructor(props){
        super(props);
        console.log('constructor');
        this.state = InitData;
    }

    //Life cycles

    componentWillMount(){
        console.log('componentWillMount');
        this.setDefaultControl();
    }

    componentDidMount() {
        console.log('componentDidMount');
        // get data with default setting
        this.doSearch();
    }

    //Events

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.doSearch();
    };
    handleMonthChange = (e) => {
        this.setState({
            Control: {
                inputMonth: e.target.value
            }
        })
    };

    doSearch = () => {
        this.searchSteelMaking();
        this.searchDeformedBar();
        this.searchSection();
    };
        //Steel making
    searchSteelMaking = () => {
        this.searchSteelMakingSemi();
        this.searchSteelMakingFinish();
        this.searchSteelMakingShipping();
    };
    searchSteelMakingSemi = () => {

        this.setState({
            SteelMaking:{
                ...this.state.SteelMaking,
                SemiProduct: {
                    ...this.state.SteelMaking.SemiProduct,
                    running: true
                }
            }
        });

        let sMonth = this.getSelectedMonth();
        Axios.get(commonURL.SteelMakingSemi, {params: {month: sMonth}})
            .then((res) => {

                this.setState({
                    SteelMaking: {
                        ...this.state.SteelMaking,
                        SemiProduct: {
                            ...this.state.SteelMaking.SemiProduct,
                            running: false,
                            data: res.data
                        }
                    }
                });


            })
            .catch((error) => {
                console.log(error);
                this.checkRequestEror(error);

                this.setState({
                    SteelMaking: {
                        ...this.state.SteelMaking,
                        SemiProduct: {
                            ...this.state.SteelMaking.SemiProduct,
                            running: false,
                            data: []
                        }
                    }
                })
            });

    };
    searchSteelMakingFinish = () => {

        this.setState({
            SteelMaking:{
                ...this.state.SteelMaking,
                FinishedGood: {
                    ...this.state.SteelMaking.FinishedGood,
                    running: true
                }
            }
        });

        let sMonth = this.getSelectedMonth();

        Axios.get(commonURL.SteelMakingFinish, {params: {month: sMonth}})
            .then((res) => {

                this.setState({
                    SteelMaking: {
                        ...this.state.SteelMaking,
                        FinishedGood: {
                            ...this.state.SteelMaking.FinishedGood,
                            running: false,
                            data: res.data
                        }
                    }
                });

            })
            .catch((error) => {
                console.log(error);
                this.checkRequestEror(error);

                this.setState({
                    SteelMaking: {
                        ...this.state.SteelMaking,
                        FinishedGood: {
                            ...this.state.SteelMaking.FinishedGood,
                            running: false,
                            data: []
                        }
                    }
                })
            });
    };
    searchSteelMakingShipping = () => {

        this.setState({
            SteelMaking:{
                ...this.state.SteelMaking,
                Shipping: {
                    ...this.state.SteelMaking.Shipping,
                    running: true
                }
            }
        });

        let sMonth = this.getSelectedMonth();

        Axios.get(commonURL.SteelMakingShipping, {params: {month: sMonth}})
            .then((res) => {

                this.setState({
                    SteelMaking: {
                        ...this.state.SteelMaking,
                        Shipping: {
                            ...this.state.SteelMaking.Shipping,
                            running: false,
                            data: res.data
                        }
                    }
                });


            })
            .catch((error) => {
                console.log(error);
                this.checkRequestEror(error);

                this.setState({
                    SteelMaking: {
                        ...this.state.SteelMaking,
                        Shipping: {
                            ...this.state.SteelMaking.Shipping,
                            running: false,
                            data: []
                        }
                    }
                })
            });
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
        this.setState({
            DeformedBar:{
                ...this.state.DeformedBar,
                Normal: {
                    ...this.state.DeformedBar.Normal,
                    SemiProduct: {
                        ...this.state.DeformedBar.Normal.SemiProduct,
                        running: true,
                    }
                }
            }
        });

        let sMonth = this.getSelectedMonth();

        Axios.get(commonURL.RebarSemi, {params: {month: sMonth}})
            .then((res) => {

                this.setState({
                    DeformedBar:{
                        ...this.state.DeformedBar,
                        Normal: {
                            ...this.state.DeformedBar.Normal,
                            SemiProduct: {
                                ...this.state.DeformedBar.Normal.SemiProduct,
                                running: false,
                                data:res.data
                            }
                        }
                    }
                });


            })
            .catch((error) => {
                console.log(error);
                this.checkRequestEror(error);

                this.setState({
                    DeformedBar:{
                        ...this.state.DeformedBar,
                        Normal: {
                            ...this.state.DeformedBar.Normal,
                            SemiProduct: {
                                ...this.state.DeformedBar.Normal.SemiProduct,
                                running: false,
                                data:[]
                            }
                        }
                    }
                })
            });
    };
    searchDeformedBarNormalFinish = () => {
        this.setState({
            DeformedBar:{
                ...this.state.DeformedBar,
                Normal: {
                    ...this.state.DeformedBar.Normal,
                    FinishedGood: {
                        ...this.state.DeformedBar.Normal.FinishedGood,
                        running: true,
                    }
                }
            }
        });

        let sMonth = this.getSelectedMonth();

        Axios.get(commonURL.RebarFinish, {params: {month: sMonth}})
            .then((res) => {

                this.setState({
                    DeformedBar:{
                        ...this.state.DeformedBar,
                        Normal: {
                            ...this.state.DeformedBar.Normal,
                            FinishedGood: {
                                ...this.state.DeformedBar.Normal.FinishedGood,
                                running: false,
                                data:res.data
                            }
                        }
                    }
                });


            })
            .catch((error) => {
                console.log(error);
                this.checkRequestEror(error);

                this.setState({
                    DeformedBar:{
                        ...this.state.DeformedBar,
                        Normal: {
                            ...this.state.DeformedBar.Normal,
                            FinishedGood: {
                                ...this.state.DeformedBar.Normal.FinishedGood,
                                running: false,
                                data:[]
                            }
                        }
                    }
                })
            });
    };
    searchDeformedBarNormalShipping = () => {
        this.setState({
            DeformedBar:{
                ...this.state.DeformedBar,
                Normal: {
                    ...this.state.DeformedBar.Normal,
                    Shipping: {
                        ...this.state.DeformedBar.Normal.Shipping,
                        running: true,
                    }
                }
            }
        });

        let sMonth = this.getSelectedMonth();

        Axios.get(commonURL.RebarShipping, {params: {month: sMonth}})
            .then((res) => {

                this.setState({
                    DeformedBar:{
                        ...this.state.DeformedBar,
                        Normal: {
                            ...this.state.DeformedBar.Normal,
                            Shipping: {
                                ...this.state.DeformedBar.Normal.Shipping,
                                running: false,
                                data:res.data
                            }
                        }
                    }
                });


            })
            .catch((error) => {
                console.log(error);
                this.checkRequestEror(error);

                this.setState({
                    DeformedBar:{
                        ...this.state.DeformedBar,
                        Normal: {
                            ...this.state.DeformedBar.Normal,
                            Shipping: {
                                ...this.state.DeformedBar.Normal.Shipping,
                                running: false,
                                data:[]
                            }
                        }
                    }
                })
            });
    };
    searchDeformedBarRework = () => {
        console.log('Search Deformed Bar - Rework');
        this.searchDeformedBarReworkSemi();
    };
    searchDeformedBarReworkSemi = () => {
        this.setState({
            DeformedBar:{
                ...this.state.DeformedBar,
                Rework: {
                    ...this.state.DeformedBar.Rework,
                    SemiProduct:{
                        ...this.state.DeformedBar.Rework.SemiProduct,
                        running: true
                    }

                }
            }
        });

        let sMonth = this.getSelectedMonth();

        Axios.get(commonURL.RebarRework, {params: {month: sMonth}})
            .then((res) => {

                this.setState({
                    DeformedBar:{
                        ...this.state.DeformedBar,
                        Rework: {
                            ...this.state.DeformedBar.Rework,
                            SemiProduct:{
                                ...this.state.DeformedBar.Rework.SemiProduct,
                                running: false,
                                data:res.data
                            }
                        }
                    }
                });


            })
            .catch((error) => {
                console.log(error);
                this.checkRequestEror(error);

                this.setState({
                    DeformedBar:{
                        ...this.state.DeformedBar,
                        Rework: {
                            ...this.state.DeformedBar.Rework,
                            SemiProduct:{
                                ...this.state.DeformedBar.Rework.SemiProduct,
                                running: false,
                                data:[]
                            }
                        }
                    }
                })
            });
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
        this.setState({
            Section:{
                ...this.state.Section,
                Normal: {
                    ...this.state.Section.Normal,
                    SemiProduct:{
                        ...this.state.Section.Normal.SemiProduct,
                        running: true
                    }

                }
            }
        });

        let sMonth = this.getSelectedMonth();

        Axios.get(commonURL.SectionSemi, {params: {month: sMonth}})
            .then((res) => {

                this.setState({
                    Section:{
                        ...this.state.Section,
                        Normal: {
                            ...this.state.Section.Normal,
                            SemiProduct:{
                                ...this.state.Section.Normal.SemiProduct,
                                running: false,
                                data:res.data
                            }
                        }
                    }
                });


            })
            .catch((error) => {
                console.log(error);
                this.checkRequestEror(error);

                this.setState({
                    Section:{
                        ...this.state.Section,
                        Normal: {
                            ...this.state.Section.Normal,
                            SemiProduct:{
                                ...this.state.Section.Normal.SemiProduct,
                                running: false,
                                data:[]
                            }
                        }
                    }
                })
            });
    };
    searchSectionNormalFinish = () => {
        this.setState({
            Section:{
                ...this.state.Section,
                Normal: {
                    ...this.state.Section.Normal,
                    FinishedGood:{
                        ...this.state.Section.Normal.FinishedGood,
                        running: true
                    }

                }
            }
        });

        let sMonth = this.getSelectedMonth();

        Axios.get(commonURL.SectionFinish, {params: {month: sMonth}})
            .then((res) => {

                this.setState({
                    Section:{
                        ...this.state.Section,
                        Normal: {
                            ...this.state.Section.Normal,
                            FinishedGood:{
                                ...this.state.Section.Normal.FinishedGood,
                                running: false,
                                data:res.data
                            }
                        }
                    }
                });


            })
            .catch((error) => {
                console.log(error);
                this.checkRequestEror(error);

                this.setState({
                    Section:{
                        ...this.state.Section,
                        Normal: {
                            ...this.state.Section.Normal,
                            FinishedGood:{
                                ...this.state.Section.Normal.FinishedGood,
                                running: false,
                                data:[]
                            }
                        }
                    }
                })
            });
    };
    searchSectionNormalShipping = () => {
        this.setState({
            Section:{
                ...this.state.Section,
                Normal: {
                    ...this.state.Section.Normal,
                    Shipping:{
                        ...this.state.Section.Normal.Shipping,
                        running: true
                    }

                }
            }
        });

        let sMonth = this.getSelectedMonth();

        Axios.get(commonURL.SectionShipping, {params: {month: sMonth}})
            .then((res) => {

                this.setState({
                    Section:{
                        ...this.state.Section,
                        Normal: {
                            ...this.state.Section.Normal,
                            Shipping:{
                                ...this.state.Section.Normal.Shipping,
                                running: false,
                                data:res.data
                            }
                        }
                    }
                });


            })
            .catch((error) => {
                console.log(error);
                this.checkRequestEror(error);

                this.setState({
                    Section:{
                        ...this.state.Section,
                        Normal: {
                            ...this.state.Section.Normal,
                            Shipping:{
                                ...this.state.Section.Normal.Shipping,
                                running: false,
                                data:[]
                            }
                        }
                    }
                })
            });
    };
    searchSectionRework = () => {
        console.log('Search Section - Rework');
        this.searchSectionReworkSemi();
    };
    searchSectionReworkSemi = () => {
        this.setState({
            Section:{
                ...this.state.Section,
                Rework: {
                    ...this.state.Section.Rework,
                    SemiProduct:{
                        ...this.state.Section.Rework.SemiProduct,
                        running: true
                    }

                }
            }
        });

        let sMonth = this.getSelectedMonth();

        Axios.get(commonURL.SectionRework, {params: {month: sMonth}})
            .then((res) => {

                this.setState({
                    Section:{
                        ...this.state.Section,
                        Rework: {
                            ...this.state.Section.Rework,
                            SemiProduct:{
                                ...this.state.Section.Rework.SemiProduct,
                                running: false,
                                data:res.data
                            }
                        }
                    }
                });


            })
            .catch((error) => {
                console.log(error);
                this.checkRequestEror(error);

                this.setState({
                    Section:{
                        ...this.state.Section,
                        Rework: {
                            ...this.state.Section.Rework,
                            SemiProduct:{
                                ...this.state.Section.Rework.SemiProduct,
                                running: false,
                                data:[]
                            }
                        }
                    }
                })
            });
    };
    //Helper

    setDefaultControl = () => {
        let current = new Date();
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
    formatDateForQuery = (dateToFormat) => {
        return dateToFormat.replace(/-/g,'');
    };

    checkRequestEror = (error) => {
        console.log(error);
        if(error.request){
            this.doFeedBack('Request cannot be sent or server cannot be reached !');
        }
    };
    getSelectedMonth = () => {
        return this.formatDateForQuery(this.state.Control.inputMonth);
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
                                        <ProductionResultGroupList name="Semi Product" data={this.state.SteelMaking.SemiProduct.data} handleRefresh={this.searchSteelMakingSemi}/>
                                    </Col>
                                    <Col sm={6} xl={3}>
                                        <ProductionResultGroupList name="Finished Good" data={this.state.SteelMaking.FinishedGood.data} handleRefresh={this.searchSteelMakingFinish}/>
                                    </Col>
                                    <Col sm={6} xl={3}>
                                        <ProductionResultGroupList name="Shipping" data={this.state.SteelMaking.Shipping.data} handleRefresh={this.searchSteelMakingShipping}/>
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
                                                            <ProductionResultGroupList name="Semi Product" data={this.state.DeformedBar.Normal.SemiProduct.data} handleRefresh={this.searchDeformedBarNormalSemi}/>
                                                        </Col>
                                                    </Row>
                                                </CardBlock>
                                                <CardBlock>
                                                    <Row>
                                                        <Col>
                                                            <ProductionResultGroupList name="Finished Good" data={this.state.DeformedBar.Normal.FinishedGood.data} handleRefresh={this.searchDeformedBarNormalFinish}/>
                                                        </Col>
                                                    </Row>
                                                </CardBlock>
                                                <CardBlock>
                                                    <Row>
                                                        <Col>
                                                            <ProductionResultGroupList name="Shipping" data={this.state.DeformedBar.Normal.Shipping.data} handleRefresh={this.searchDeformedBarNormalShipping}/>
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
                                                            <ProductionResultGroupList name="Semi Product" data={this.state.DeformedBar.Rework.SemiProduct.data} handleRefresh={this.searchDeformedBarReworkSemi}/>
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
                                                            <ProductionResultGroupList name="Semi Product" data={this.state.Section.Normal.SemiProduct.data} handleRefresh={this.searchSectionNormalSemi}/>
                                                        </Col>
                                                    </Row>
                                                </CardBlock>
                                                <CardBlock>
                                                    <Row>
                                                        <Col>
                                                            <ProductionResultGroupList name="Finished Good" data={this.state.Section.Normal.FinishedGood.data} handleRefresh={this.searchSectionNormalFinish}/>
                                                        </Col>
                                                    </Row>
                                                </CardBlock>
                                                <CardBlock>
                                                    <Row>
                                                        <Col>
                                                            <ProductionResultGroupList name="Shipping" data={this.state.Section.Normal.Shipping.data} handleRefresh={this.searchSectionNormalShipping}/>
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
                                                            <ProductionResultGroupList name="Semi Product" data={this.state.Section.Normal.Shipping.data} handleRefresh={this.searchSectionReworkSemi}/>
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
