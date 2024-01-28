import styled from 'styled-components';

export const AdvantagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AdvantList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 0;
  padding: 0;
`;

export const AdvantListItem = styled.li`
  width: 250px;
  border: 2px solid red;
  border-radius: 12px;
  padding: 15px;
`;

export const AdvantListItemTitle = styled.h3`
  width: 150px;
  margin: 0;
  padding: 0;
  margin-bottom: 15px;
`;

export const AdvantListItemText = styled.p`
  margin: 0;
  padding: 0;
`;
