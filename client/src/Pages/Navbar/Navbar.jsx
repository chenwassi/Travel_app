import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import '../Navbar/Navbar.css'
import logo from '../Navbar/logo.png'
import { FaUserAlt } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';

function NavbarContainer() {
  const [chagneCss,setChangeCss]= useState(false)
  const navigate = useNavigate()
  const changeValueScroll =()=>{
    const scrollValue = document.documentElement.scrollTop
    if(scrollValue>50){
      setChangeCss(true)
    }
    else{
      setChangeCss(false)
    } 
  };
  const scroll = ()=>{
    window.scroll({top:0,behavior:'smooth'})
    }

  window.addEventListener('scroll',changeValueScroll)
  return (
    <Navbar className={chagneCss?"navbar fixed-top navbar-expand-lg scrolled transition":"transition"} expand="lg" >
      <Container fluid className='d-flex flex-row-reverse'>
          <Navbar.Brand><div className='image-bg'><img className='image' src={logo}></img></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll ">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
      <Dropdown >
      <Dropdown.Toggle className='user-logout text-light d-md-flex d-none align-items-center' id="dropdown-basic">
        <div><FaUserAlt/></div>
       {localStorage.getItem('name')}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>{localStorage.clear();navigate('/')}}>Log out</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
          </Nav>
          <div className='d-md-flex justify-content-md-around align-items-md-center w-25'>
            <Nav.Link className='text-light' onClick={()=>{navigate('/Map/34.8112720/31.8927730');}}>מפה</Nav.Link>
            <Nav.Link className='text-light' onClick={()=>navigate('/HomePage/allData')}>לכל המקומות</Nav.Link>  
            <Nav.Link className='text-light' onClick={()=>navigate('/HomePage')}>דף הבית</Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarContainer;
