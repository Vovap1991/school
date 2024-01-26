import { CoursesList, CoursesListItem, CoursesTitle } from './Courses.styled';

export const Courses = ({ setShowChildrenCourses, setShowAdultCourses }) => {
  return (
    <section>
      <CoursesTitle>Наші курси</CoursesTitle>
      <CoursesList>
        <CoursesListItem>
          <button
            type="button"
            onClick={() => {
              setShowChildrenCourses(true);
              setShowAdultCourses(false);
            }}
          >
            Для дітей
          </button>
        </CoursesListItem>
        <CoursesListItem>
          <button
            type="button"
            onClick={() => {
              setShowAdultCourses(true);
              setShowChildrenCourses(false);
            }}
          >
            Для дорослих
          </button>
        </CoursesListItem>
      </CoursesList>
    </section>
  );
};
