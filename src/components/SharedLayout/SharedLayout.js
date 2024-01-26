import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header/Header';
// import { ToastOptions } from '../StyledComponents/ToastOption';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      {/* <Toaster toastOptions={ToastOptions} /> */}
    </>
  );
};
