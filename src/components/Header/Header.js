import { NavLink } from 'react-router-dom';
import { HeaderWrapper, NavList, AddressList, Nav } from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <NavLink to="/">Logo</NavLink>
        <NavList>
          <li>
            <NavLink to="/">Головна</NavLink>
          </li>

          <li>
            <NavLink to="courses">Курси</NavLink>
          </li>

          <li>
            <a href="/">Контакти</a>
          </li>
        </NavList>
      </Nav>
      <address>
        <AddressList>
          <li>
            <a href="mailto:panchenkotravel@gmail.com">
              panchenkotravel@gmail.com
            </a>
          </li>

          <li>
            <a href="tel:+380634320878">+38 (063) 432 08 78</a>
          </li>
        </AddressList>
      </address>
    </HeaderWrapper>
  );
};
