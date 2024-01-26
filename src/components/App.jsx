import { Courses } from './Courses/Courses';
import { Header } from './Header/Header';
import { Hero } from './Hero/Hero';

export const App = () => {
  return (
    <div>
      <Header />
      <hr />
      <Hero />
      <Courses />
    </div>
  );
};
