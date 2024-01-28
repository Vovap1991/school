import {
  PopulCourseWrapper,
  PopulCourseList,
  PopulCourseListItem,
  PopulCourseListTitle,
  PopulCourseListText,
} from './PopularCourses.styled';

export const PopularCourses = () => {
  return (
    <PopulCourseWrapper>
      <h2>Популярні курси</h2>
      <PopulCourseList>
        <PopulCourseListItem>
          <PopulCourseListTitle>Англійська мова</PopulCourseListTitle>
          <PopulCourseListText>Рівень: A2</PopulCourseListText>
          <PopulCourseListText>Тривалість: 6 місяців</PopulCourseListText>
        </PopulCourseListItem>
        <PopulCourseListItem>
          <PopulCourseListTitle>HTML / CSS</PopulCourseListTitle>
          <PopulCourseListText>Рівень: Beginner</PopulCourseListText>
          <PopulCourseListText>Тривалість: 4 місяці</PopulCourseListText>
        </PopulCourseListItem>
        <PopulCourseListItem>
          <PopulCourseListTitle>Англійська мова</PopulCourseListTitle>
          <PopulCourseListText>Рівень: B1</PopulCourseListText>
          <PopulCourseListText>Тривалість: 6 місяців</PopulCourseListText>
        </PopulCourseListItem>
      </PopulCourseList>
    </PopulCourseWrapper>
  );
};
