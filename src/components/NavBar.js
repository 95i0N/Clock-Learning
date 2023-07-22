import React from 'react'
import '../custom/NavBar.css'
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/clock6.svg'

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('lecture');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand href="/">
            <img src={logo} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon' ></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/lecture" className={activeLink==='lecture'?'active navbar-link':'navbar-link'} onClick={()=>{onUpdateActiveLink('lecture')}}>とけいってなに？</Nav.Link>
            <Nav.Link href="/quiz" className={activeLink==='quiz'?'active navbar-link':'navbar-link'} onClick={()=>{onUpdateActiveLink('quiz')}}>とけい,
            よめる？</Nav.Link>
            <Nav.Link href="/exercise" className={activeLink==='exercise'?'active navbar-link':'navbar-link'} onClick={()=>{onUpdateActiveLink('exercise')}}>とけいであそぼ！</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar