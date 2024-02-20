import ProjectFormInfo from '../components/project-form/ProjectFormInfo';

function AdminAddProject() {
  return (
    <main className="modification">
      <h1>Création</h1>
      <section id="modification-informations">
        <h2>Informations</h2>
        <ProjectFormInfo />
      </section>
    </main>
  );
}

export default AdminAddProject;
