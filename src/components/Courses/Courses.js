import {
  CoursesList,
  CoursesListItem,
  CoursesListItemLink,
  CoursesTitle,
} from './Courses.styled';

export const Courses = () => {
  return (
    <section>
      <CoursesTitle>Наші курси</CoursesTitle>
      <CoursesList>
        <CoursesListItem>
          <CoursesListItemLink href="">Для дітей</CoursesListItemLink>
        </CoursesListItem>
        <CoursesListItem>
          <CoursesListItemLink href="">Для дорослих</CoursesListItemLink>
        </CoursesListItem>
      </CoursesList>
    </section>
  );
};
