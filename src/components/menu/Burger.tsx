import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

import RightNav from './RightNav';
import { getMenuList } from '../../services/menu.service';
import { Logo, Nav, StickyContainer, StyledBurger } from './styles';

const it_logo = '//itglobers.com/wp-content/uploads/2020/05/cropped-it-globers-logo.png'

const Burger = () => {
  const [open, setOpen] = useState(false)
  const [optionsData, setOptionsData] = useState([])

  const createMenuList = async () =>{
    const response = await getMenuList()
    if(response){
      setOptionsData(response)
    }else{
      setOptionsData([])
    }
  }

  useEffect(() => {
    createMenuList()
  }, [])

  return (
    <StickyContainer>
      <Nav>
        <NavLink to={'/'}>
        <Logo src={it_logo} alt="It Globers test" />
        </NavLink>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} setOpen={setOpen} options={optionsData} />
      </Nav>
    </StickyContainer>
  )
}
export default Burger