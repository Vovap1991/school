import {
  HeaderWrapper,
  NavList,
  AddressList,
  Nav,
  CompName,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <CompName href="/">Logo</CompName>
        <NavList>
          <li>
            <a href="/">Головна</a>
          </li>

          <li>
            <a href="/">Курси</a>
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
