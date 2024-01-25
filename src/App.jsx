import './App.scss';
import React, { useState, useEffect } from 'react';
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { TbShoppingCartCode } from "react-icons/tb";
import { BsTwitterX } from "react-icons/bs";
import { SiWhatsapp, SiInstagram } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { ImYoutube } from "react-icons/im";
import { IoShareSocialOutline } from "react-icons/io5";
import { Route, Routes, Link } from "react-router-dom";
import Anasayfa from './packages/Anasayfa/Anasayfa';
import Hakkimizda from './packages/Hakkimizda/Hakkimizda';
import UrunDetay from './packages/UrunDetay/UrunDetay';
import { GrBasket } from "react-icons/gr";
import  Sepet  from "./packages/Sepet/Sepet";



function App() {

  const [sepet,setSepet] = useState([])

  return (
    <div className="App bg-body-secondary">

      <Navbar expand="lg" className=" fixed-top bg-light shadow">
        <Container fluid="md" className=''>
          <Navbar.Brand><Link className='Logo' to='/'><TbShoppingCartCode className='mb-1 mx-2 fw-bold' />My Store</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-4' />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link className='text-center'> <Link to='/' className='text-decoration-none text-reset fw-bold'>Anasayfa</Link></Nav.Link>
              <Nav.Link className='text-center'> <Link to='/Hakkimizda' className='text-decoration-none text-reset'>Hakkımızda</Link></Nav.Link>
              <NavDropdown title="Menü" id="basic-nav-dropdown" className='text-center'>
                <NavDropdown.Item href="#action/3.1" className=' text-center'>Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className=' text-center'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className=' text-center'>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" className=' text-center'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Link to={"/Sepet"} className='m-auto text-decoration-none text-reset me-4' >
            <div className="sepet bg-body-secondary me-5 shadow"><GrBasket /><div className="sepetGosterge shadow ">{sepet.length}</div></div>

          </Link>
        </Container>
      </Navbar>



      <Routes>

        <Route exact path='/' element={<Anasayfa sepet={sepet} setSepet={setSepet} />} />
        <Route exact path='/Hakkimizda' element={<Hakkimizda />} />
        <Route exact path="/products/:UrunId" element={<UrunDetay sepet={sepet} setSepet={setSepet}/>} />
        <Route exact path="/Sepet" element={<Sepet sepet={sepet} setSepet={setSepet} />} />
       

      </Routes>

      <footer className='bg-secondary mt-5'>
        <Container fluid="md">
          <div className="socialMedia">
            <BsTwitterX className='' />
            <SiWhatsapp />
            <FaFacebook />
            <SiInstagram />
            <SlSocialLinkedin />
            <ImYoutube />
            <IoShareSocialOutline />

          </div>
          <Link className='Logo' to='/'><TbShoppingCartCode className='mb-1 mx-2 fw-bold' />My Store</Link>
        </Container>
      </footer>



    </div>
  );
}

export default App;
