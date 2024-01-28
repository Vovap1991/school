import { Advantages } from 'components/Advantages/Advantages';
import { CallBack } from 'components/CallBack/CallBack';
import { Hero } from 'components/Hero/Hero';
import { PopularCourses } from 'components/PopularCourses/PopularCourses';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Advantages />
      <PopularCourses />
      <CallBack />
    </>
  );
};

export default HomePage;
