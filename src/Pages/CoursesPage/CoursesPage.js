import { AdultCourses } from 'components/AdultCourses/AdultCourses';
import { ChildrenCourses } from 'components/ChildrenCourses/ChildrenCourses';
import { useState } from 'react';

const { Courses } = require('components/Courses/Courses');

const CoursesPage = () => {
  const [showChildrenCourses, setShowChildrenCourses] = useState(false);
  const [showAdultCourses, setShowAdultCourses] = useState(false);

  return (
    <>
      <Courses
        setShowChildrenCourses={setShowChildrenCourses}
        setShowAdultCourses={setShowAdultCourses}
      />
      {showChildrenCourses && <ChildrenCourses />}
      {showAdultCourses && <AdultCourses />}
    </>
  );
};

export default CoursesPage;
