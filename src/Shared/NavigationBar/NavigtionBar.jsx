import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const NavigtionBar = () => {
    const {user,logOut}=useContext(AuthContext)
    const handleLogOut =()=>{
      logOut()
      .then(result =>{})
      .catch(error =>console.error(error));
  }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
              <Link  to="/category/0">Home</Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>

           
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><FaUser></FaUser></Nav.Link>
            {
              user ?<Link to='/login'><Button variant="dark"onClick={handleLogOut} >LogOut</Button></Link>  :
              <Link to='/login'><Button variant="dark">Log In</Button></Link>
            }
            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            
        </Container>
    );
};

export default NavigtionBar;