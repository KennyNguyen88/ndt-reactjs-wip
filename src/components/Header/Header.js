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
                        <Label for="fromDate">From Date </Label>{' '}
                        <Input type="date" name="fromDate" id="fromDate" />
                    </FormGroup>{' '}
                    <FormGroup>
                        <Label for="toDate">To Date </Label>{' '}
                        <Input type="date" name="toDate" id="toDate" />
                    </FormGroup>{' '}
                    <Button color="primary">SEARCH</Button>
                    <Button color="success">REFRESH</Button>
                </Form>
            </header>
        )
    }
}

export default Header;
