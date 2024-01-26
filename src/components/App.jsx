import { Route, Routes } from 'react-router-dom';

import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import HomePage from 'Pages/HomePage/HomePage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
