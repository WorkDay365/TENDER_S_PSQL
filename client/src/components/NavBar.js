import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import { NavLink, useHistory } from 'react-router-dom';
import { TENDERUA_ROUTE } from '../utils/consts';
import {Button} from "react-bootstrap";
import { observer } from 'mobx-react-lite';
import Container from "react-bootstrap/Container";
//import {useHistory} from 'react-router-dom'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

  //   const logOut = () => {
  //     user.setUser({})
  //     user.setIsAuth(false)
  // }

    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink style ={{color:'white'}} to={TENDERUA_ROUTE}>Trender UA</NavLink>
          { user.isAuth ? 
          <Nav className="ml-auto" style ={{color:'white'}}>
            <Button variant= {'outline-light'}>Адмін панель</Button>
            <Button
                            variant={"outline-light"}
                      //      onClick={() => logOut()}
                            className="ml-4"
                        >Вийти</Button>
          </Nav>
          :
          <Nav className="ml-auto" style ={{color:'white'}}>
             <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизація</Button>
          </Nav>
          }
        </Container>
      </Navbar>

    )
})

export default NavBar