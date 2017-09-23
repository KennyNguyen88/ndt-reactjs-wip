import React, {Component} from 'react';
import {
    Nav,
    NavItem,
    NavbarToggler,
    NavbarBrand,
    Input,
    Button,
    Form,
    FormGroup,
    Label
} from 'reactstrap';

class Header extends Component {

    sidebarToggle(e) {
        e.preventDefault();
        document.body.classList.toggle('sidebar-hidden');
    }

    sidebarMinimize(e) {
        e.preventDefault();
        document.body.classList.toggle('sidebar-minimized');
    }

    mobileSidebarToggle(e) {
        e.preventDefault();
        document.body.classList.toggle('sidebar-mobile-show');
    }

    asideToggle(e) {
        e.preventDefault();
        document.body.classList.toggle('aside-menu-hidden');
    }

    render() {
        return (
            <header className="app-header navbar">
                <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>&#9776;</NavbarToggler>
                <NavbarBrand href="#"></NavbarBrand>
                <NavbarToggler className="d-md-down-none mr-auto" onClick={this.sidebarToggle}>&#9776;</NavbarToggler>
                <Form inline>
                    <FormGroup >
                        <Label for="inputMonth">Month </Label>
                        <Input type="text" name="inputMonth" id="inputMonth" />
                    </FormGroup>
                    <FormGroup >
                        <Label for="inputFromDate">From Date </Label>
                        <Input type="date" name="inputFromDate" id="inputFromDate" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="inputToDate">To Date </Label>
                        <Input type="date" name="inputToDate" id="inputToDate" />
                    </FormGroup>
                    <Button color="primary">SEARCH</Button>
                    <Button color="success">REFRESH</Button>
                </Form>
            </header>
        )
    }
}

export default Header;
