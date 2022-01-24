import React from "react";
import styled from "styled-components";
import { bool } from "prop-types";
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { logout } from "../../../store/features/user/userSlice";

const Menu = ({ open }) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  
  const handleLogout = (e) => {
    dispatch(logout())
  }
  
  return (
    <StyledMenu open={open}>
      <Link to="profile">Profile</Link>
      {user.role === 'admin' ? <Link to="admin">Admin</Link> : null}
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
  background: ${({ theme }) => theme.primaryLight};
  height: calc(100% - 65px);
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 65px;
  left: 0;
  width: 100%;

  a, div {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
