import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Details from '../sections/details/Details';
import Introduction from '../sections/introduction/Introduction';
import Problems from '../sections/problems/Problems';

function Projects() {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <Details />
        <Problems />
      </main>
      <Footer />
    </>
  );
}

export default Projects;
