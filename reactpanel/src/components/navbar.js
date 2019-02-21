import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';
export default class componentName extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
        <Navbar color="light" light  expand="md">
        <NavbarBrand onClick={()=>this.props.toggleProps()} >Gizle/Göster</NavbarBrand>
      

        <Nav className="ml-auto" navbar>
        <NavItem>
            <NavLink  >Page</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">Page</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">Page</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">Page</NavLink>
        </NavItem>
        
        </Nav>

    </Navbar>
    )
  }
}
