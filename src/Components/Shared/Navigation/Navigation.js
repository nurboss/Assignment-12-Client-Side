import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';
import logo from '../../../images/car-logo.png';
import useAuth from '../../../Hook/useAuth';

const Navigation = () => {
    const {user, logOut} = useAuth();
    return (
        <>
        <Navbar  variant="light" className="nav-res" sticky="top" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand> <img src={logo} alt="" /> <span className="logo-font">HeroCars</span> </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link className="link" as={Link} to="/home">Home</Nav.Link>

                    
                        <Nav.Link className="link" as={Link} to="/dashbord">Dashbord</Nav.Link>


                        {user?.email ?
                        <button onClick={logOut} className="car-bttn ms-3 log-b">LogOut</button> :
                            <Nav.Link className="link" as={Link} to="/login">Login</Nav.Link>}

                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>

    );
};

export default Navigation;