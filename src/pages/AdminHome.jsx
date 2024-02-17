import { Link } from 'react-router-dom';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import projects from '../assets/projects.json';

import ProjectCard from '../components/project-card/ProjectCard';

function AdminHome() {
  return (
    <>
      <Header />
      <main>
        <section id="projects-list">
          <h1>Liste des projets</h1>
          <div className="projects">
            {projects.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  cover={project.cover}
                  projectsId={project.id}
                  adminPage={true}
                >
                  {project.title}
                </ProjectCard>
              );
            })}
            <Link
              to={`/admin/MN95/projects/createProject`}
              title={`Création de projet`}
              className="project-card add-button"
            >
              +
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default AdminHome;
