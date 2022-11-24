import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import '../Navbar/Navbar.css'
import logo from '../Navbar/logo.png'

function NavbarContainer() {
  const [chagneCss,setChangeCss]= useState(false)
  const navigate = useNavigate()
  const changeValueScroll =()=>{
    const scrollValue = document.documentElement.scrollTop
    if(scrollValue>200){
      setChangeCss(true)
    }
    else{
      setChangeCss(false)
    }
    
  };
  console.log(chagneCss);
  window.addEventListener('scroll',changeValueScroll)
  return (
    <Navbar className={chagneCss == true?"navbar fixed-top navbar-expand-lg scrolled transition":""} expand="lg" >
      <Container fluid>
        <Navbar.Brand><div className='image-bg'><img className='image' src={logo}></img></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='text-light' onClick={()=>navigate('/HomePage')}>Home</Nav.Link>
            <Nav.Link className='text-light' onClick={()=>navigate('/addPlace')}>Add place</Nav.Link>
            <Nav.Link className='text-light' onClick={()=>navigate('/PlacePage')}>PlacePage</Nav.Link>  
          </Nav>
          <Nav.Link className='text-light' >welcome,{localStorage.getItem('name')}</Nav.Link> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarContainer;
