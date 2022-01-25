import React from "react";
import styled from "styled-components";
import { bool } from "prop-types";
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { logout } from "../../../store/features/user/userSlice";

const Menu = ({ open, setOpen }) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  
  const handleLogout = (e) => {
    dispatch(logout())
  }
  
  return (
    <StyledMenu open={open}>
      <Link to="search" onClick={() => setOpen()}>Search</Link>
      <Link to="profile" onClick={() => setOpen()}>Profile</Link>
      {user.role === 'admin' ? <Link to="admin" onClick={() => setOpen()}>Admin</Link> : null}
      <div onClick={handleLogout}>Logout</div>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;

export const StyledMenu = styled.nav`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  background: #FFFFFF;
  height: calc(100% - 65px);
  text-align: left;
  box-sizing: border-box;
  padding: 2rem;
  position: absolute;
  top: 65px;
  left: 0;
  width: 100%;
  font-size: 1.5rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    text-align: right;
    left: 60%;
    width: 40%;
  }

  @media screen and (min-width: 1024px) {
    left: 75%;
    width: 25%;
  }

  a, div {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #001011;
    text-decoration: none;
    transition: color 0.3s linear;
    cursor: pointer;

    &:hover {
      color: primaryHover: #343078;
    }
  }
`;
