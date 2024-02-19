import { Link } from 'react-router-dom';

import projects from '../assets/projects.json';

import ProjectCard from '../components/project-card/ProjectCard';

function AdminHome() {
  return (
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
  );
}

export default AdminHome;
