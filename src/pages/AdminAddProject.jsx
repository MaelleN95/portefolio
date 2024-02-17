import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ProjectFormImages from '../components/project-form/ProjectFormImages';
import ProjectFormInfo from '../components/project-form/ProjectFormInfo';

function AdminAddProject() {
  return (
    <>
      <Header />
      <main className="modification">
        <h1>Création</h1>
        <section id="modification-informations">
          <h2>Informations</h2>
          <ProjectFormInfo />
        </section>

        <section id="modification-images">
          <h2>images</h2>
          <ProjectFormImages />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default AdminAddProject;
