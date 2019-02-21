import React, { Component } from 'react';
import { 
    Collapse,    
    ListGroup, 
    ListGroupItem  
} from 'reactstrap';

class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  toggle2() {
    this.setState({ collapse2: !this.state.collapse2 });
  }

  render() {
    return (
    <div className="">
        <nav id="sidebar" className="sticky-top" >
            <div className="sidebar-header">
                    <h5 className="display-5">Sende Hisset!</h5>
            </div>
         
            <ul className="list-unstyled components">
                <p>Dummy Heading</p>
                <li className="">
                    <a data-toggle="collapse" style={{color:'white'}} aria-expanded="false" className="dropdown-toggle"  onClick={this.toggle}  >Home</a>
                    <Collapse isOpen={this.state.collapse}>
                        <ListGroup flush   >
                            <ListGroupItem style={{backgroundColor:'#6D7FCC',color:'white'}} disabled tag="a" href="#">Cras justo odio</ListGroupItem>
                            <ListGroupItem style={{backgroundColor:'#6D7FCC',color:'white'}} tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem style={{backgroundColor:'#6D7FCC',color:'white'}} tag="a" href="#">Morbi leo risus</ListGroupItem>
                            <ListGroupItem style={{backgroundColor:'#6D7FCC',color:'white'}} tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                            <ListGroupItem style={{backgroundColor:'#6D7FCC',color:'white'}} tag="a" href="#">Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                    </Collapse>
                   
                </li>
                <li>
                    <a href="#" style={{color:'white'}}>About</a>
                </li>
                <li>
                    <a href="#pageSubmenu" style={{color:'white'}} data-toggle="collapse" aria-expanded="false" onClick={this.toggle2} className="dropdown-toggle">Pages</a>
                    
                    <Collapse isOpen={this.state.collapse2}>
                        <ListGroup flush    >
                            <ListGroupItem style={{backgroundColor:'#6D7FCC',color:'white'}} disabled tag="a" href="#">Cras justo odio</ListGroupItem>
                            <ListGroupItem style={{backgroundColor:'#6D7FCC',color:'white'}} tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem style={{backgroundColor:'#6D7FCC',color:'white'}} tag="a" href="#">Morbi leo risus</ListGroupItem>
                            <ListGroupItem style={{backgroundColor:'#6D7FCC',color:'white'}} tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                            <ListGroupItem style={{backgroundColor:'#6D7FCC',color:'white'}} tag="a" href="#">Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                    </Collapse>
                </li>
                <li>
                    <a href="#" style={{color:'white'}} >Portfolio</a>
                </li>
                <li>
                    <a href="#" style={{color:'white'}} >Contact</a>
                </li>
            </ul>

            <ul className="list-unstyled CTAs">
               <div style={{minHeight:80}} >

               </div>
            </ul>
        </nav>
    </div>

    );
  }
}

export default Example;



/*


   <ListGroup flush   style={{backgroundColor:'#6D7FCC'}} >
                        <ListGroupItem style={{backgroundColor:'#6D7FCC',color:'white'}} disabled tag="a" href="#">Cras justo odio</ListGroupItem>
                        <ListGroupItem style={{backgroundColor:'#6D7FCC',color:'white'}} tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
                        <ListGroupItem style={{backgroundColor:'#6D7FCC',color:'white'}} tag="a" href="#">Morbi leo risus</ListGroupItem>
                        <ListGroupItem style={{backgroundColor:'#6D7FCC',color:'white'}} tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
                        <ListGroupItem style={{backgroundColor:'#6D7FCC',color:'white'}} tag="a" href="#">Vestibulum at eros</ListGroupItem>
                    </ListGroup>
*/