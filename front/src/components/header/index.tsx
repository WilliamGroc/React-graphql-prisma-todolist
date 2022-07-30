import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
  width: 100%;
  height: 46px;
  border-bottom: 1px solid black;
  display: flex;
`;

const NavItem = styled(Link)`
  width: 42px;
  padding: 8px;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: lightgrey;
    color: white;
  }
`;

function Header() {
  return (
    <NavBar>
      <NavItem to="/">List</NavItem>
      <NavItem to="/new">Create</NavItem>
    </NavBar>
  );
}

export default Header;
