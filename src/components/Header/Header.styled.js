import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px 20px;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CompName = styled.a`
  margin-right: 40px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  list-style: none;
  text-decoration: none;
  gap: 15px;
`;

export const AddressList = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  list-style: none;
  text-decoration: none;
  gap: 30px;
`;
