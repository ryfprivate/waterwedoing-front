import React from "react";
import styled from "styled-components";

const NavBar = styled.div`
  position: fixed;
  width: 100vw;
  text-align: left;
  background-color: #fff;
  padding: 10px 5px;
  display: grid;
  grid-template-columns: auto 1fr;
`;

const Logo = styled.div`
  display: inline-block;
  color: blueviolet;
  cursor: pointer;
  font-weight: bold;
`;

const Menu = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 20px;
  text-align: left;
  width: 80vw;
`;

const MenuButton = styled.div`
  display: inline-block;
  font-weight: bold;
  margin: 0 0.5rem;
  cursor: pointer;
  color: white;
  padding: 0 10px;
  background: #007bff;
  border-radius: 4px;
`;

const Header = props => {
  return (
    <NavBar>
      <Logo>Water We Doing</Logo>
      <Menu>
        <MenuButton>Home</MenuButton>
        <MenuButton>About</MenuButton>
      </Menu>
    </NavBar>
  );
};

export default Header;
