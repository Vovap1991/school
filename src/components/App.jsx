import { Route, Routes } from 'react-router-dom';

import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import HomePage from 'Pages/HomePage/HomePage';
import CoursesPage from 'Pages/CoursesPage/CoursesPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="courses" element={<CoursesPage />} />
        </Route>
      </Routes>
    </>
  );
};
