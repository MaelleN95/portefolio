import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import AboutMe from '../sections/about-me/AboutMe';
import Banner from '../sections/banner/Banner';
import Contact from '../sections/contact/Contact';
import Formation from '../sections/formation/Formation';
import GoodPractices from '../sections/good-practices/GoodPractices';
import HardSkills from '../sections/hard-skills/HardSkills';
import MyProjects from '../sections/my-projects/MyProjects';
import SocialMedia from '../sections/social-media/SocialMedia';
import SoftSkills from '../sections/soft-skills/SoftSkills';
import Tools from '../sections/tools/Tools';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <AboutMe />
        <HardSkills />
        <Tools />
        <GoodPractices />
        <SoftSkills />
        <Formation />
        <MyProjects />
        <Contact />
        <SocialMedia />
      </main>
      <Footer />
    </>
  );
}

export default Home;
