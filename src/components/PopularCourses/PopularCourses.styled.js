import styled from 'styled-components';

export const PopulCourseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PopulCourseList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const PopulCourseListItem = styled.li`
  border: 2px solid red;
  border-radius: 12px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PopulCourseListTitle = styled.h3`
  margin: 0;
`;

export const PopulCourseListText = styled.h3`
  margin: 0;
  font-weight: 400;
`;
