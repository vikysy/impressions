import React, { useState } from "react";
import { Image, Nav, Navbar, NavbarBrand, NavLink } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import logo from "../images/logo.svg";
import Catalog from "../pages/Catalog.js";
import Contacts from "../pages/Contacts.js";
import Sale from "../pages/Sale.js";
import MyModalImpress from "./modal/impresses/MyModalImpress";
import MyModal from "./modal/MyModal";
import ModalRequest from "./modal/request/ModalRequest";
import cl from "./NaviBar.module.css";
import Instagram from "./social/Instagram";
import Vk from "./social/Vk";

const NaviBar = () => {
  const [modal, setModal] = useState(false);
  const [modalImpress, setModalImpress] = useState(false);
  const [impress, setImpress] = useState("");

  function returnImpress(elem) {
    setImpress(elem);
  }

  return (
    <div className={cl.container_my}>
      <BrowserRouter>
        <Navbar
          collapseOnSelect
          expand="lg"
          className={cl.myNavbar}
          style={{ justifyContent: "space-between" }}
        >
          <NavbarBrand to="/" className="p-0 m-0 float-left">
            <NavLink>
              <Link to="/">
                <Image src={logo} />
              </Link>
            </NavLink>
          </NavbarBrand>
          <NavbarToggle
            aria-controls="responsive-navbar-nav"
            style={{ maxWidth: "56px" }}
          />
          <NavbarCollapse
            id="responsive-navbar-nav"
            className={cl.myNavbarRight}
          >
            <Nav>
              <NavLink className="p-0">
                <Link to="/" style={{ marginRight: "40px" }}>
                  Каталог
                </Link>
              </NavLink>
              <NavLink className="p-0">
                <Link to="/sale" style={{ marginRight: "40px" }}>
                  Акции
                </Link>
              </NavLink>
              <NavLink className="p-0">
                <Link to="/contacts">Контакты</Link>
              </NavLink>
            </Nav>
            <div className={cl.divRight}>
              <a onClick={(e) => e.preventDefault()} href="tel:+79991234567">
                +7 (999) 123-45-67
              </a>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "100px",
                  justifyContent: "space-between",
                }}
              >
                <Vk style={{ marginRight: "20px", marginLeft: "30px" }} />
                <Instagram />
              </div>
            </div>
          </NavbarCollapse>
        </Navbar>

        <Routes>
          <Route
            path="/"
            element={
              <Catalog
                modal={modal}
                setModal={setModal}
                modalImpress={modalImpress}
                setModalImpress={setModalImpress}
                setImpress={setImpress}
                returnImpress={returnImpress}
              />
            }
          />
          <Route path="/contacts" element={<Contacts />} />
          <Route
            path="/sale"
            element={
              <Sale
                visible={modal}
                setVisible={setModal}
                visibleImpress={modalImpress}
                setVisibleImpress={setModalImpress}
                setImpress={setImpress}
                returnImpress={returnImpress}
              />
            }
          />
        </Routes>

        <MyModal visible={modal} setVisible={setModal}>
          <ModalRequest />
        </MyModal>

        <MyModal
          visibleImpress={modalImpress}
          setVisibleImpress={setModalImpress}
        >
          <MyModalImpress
            elem={impress}
            visibleImpress={modalImpress}
            setVisibleImpress={setModalImpress}
            visible={modal}
            setVisible={setModal}
          />
        </MyModal>
      </BrowserRouter>
    </div>
  );
};

export default NaviBar;
