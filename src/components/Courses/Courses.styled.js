import styled from 'styled-components';

export const CoursesTitle = styled.h2`
  display: flex;
  justify-content: center;
`;

export const CoursesList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 50px;
`;

export const CoursesListItem = styled.li`
  padding: 15px 10px;
  height: 200px;
  width: 150px;
  border: 1px solid red;
  border-radius: 12px;
`;
