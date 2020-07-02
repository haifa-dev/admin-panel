import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";

// var Navbar = ReactBootstrap.Navbar;
// import { Navbar } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/View";
import ProfileCreate from "./pages/Profile/Create";
// import ProfileEdit from "./pages/Profile/Edit";
import Event from "./pages/Event/Event";
import Project from "./pages/Project/Project";
import Request from "./pages/Request/Request";
// import { render } from "@testing-library/react";

const navItems = [
  { displayName: "Home", href: "/Home", className: "fa fa-home" },
  { displayName: "Profile", href: "/Profile", className: "fa fa-user" },
  { displayName: "Events", href: "/Event", className: "fa fa-calendar" },
  { displayName: "Projects", href: "/Project", className: "fa fa-diamond" },
  { displayName: "Requests", href: "/Request", className: "fa fa-paper-plane-o" }
];


const MyNav = (props) => {
  const navItems = props.navItems;
  const listItems = navItems.map((navItem) =>
    <a className="list-group-item list-group-item-action bg-black" href={navItem.href} key={navItem.displayName}>
      <i className={navItem.className} aria-hidden="true"></i>
      {navItem.displayName}
    </a>
  );
  return (
    <div className="list-group list-group-flush">
      {listItems}
    </div>

  );
}



class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    return (<BrowserRouter>
      <div id="wrapper" className={this.state.isToggleOn ? 'd-flex toggled' : 'd-flex'}>
        {/* <!-- Sidebar --> */}
        <div className="" id="sidebar-wrapper">
          <div className="sidebar-heading  ">
            <div className="logo small">
              <span>:dev</span>
              {/* <span className='d-block' style={{ fontSize: '0.8rem' }}>community</span> */}
            </div>
            {/* <div className="logo big">
              haifa<span>:dev</span>
              <span className='d-block' style={{ fontSize: '0.8rem' }}>developers community</span>
            </div> */}
          </div>
          <MyNav navItems={navItems} />
        </div >
        {/* <!-- /#sidebar-wrapper --> */}
        {/* <!-- Page Content --> */}
        <div id="page-content-wrapper">

          <Navbar collapseOnSelect expand="lg" bg="" variant="dark" className="border-bottom">
            <button className="navbar-toggler navbar-toggler-dark btn-circle m-1" id="menu-toggle" onClick={this.handleClick}>
              {/* <i className="fa fa-bars" aria-hidden="true"></i>
                <span className="sr-only">Toggle Menu</span> */}
              <span className="navbar-toggler-icon"></span>
            </button>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className=" btn-circle m-1" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#User">User</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <div className="container-fluid">

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Home" component={Home} />
              <Route exact path="/Profile" component={Profile} />
              <Route exact path="/Profile/Create" component={ProfileCreate} />
              {/* <Route exact path="/Profile/Edit" component={ProfileEdit} /> */}
              <Route exact path="/Event" component={Event} />
              <Route exact path="/Project" component={Project} />
              <Route exact path="/Request" component={Request} />
            </Switch>
            {/* <script src="lib/bootstrap/dist/js/bootstrap.bundle.js"></script> */}
          </div>
        </div>
        {/* <!-- /#page-content-wrapper --> */}
      </div>

    </BrowserRouter >
    )
  }
};

export default App;
