import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getProjects } from '../lib/common';

import ProjectCard from '../components/project-card/ProjectCard';

function AdminHome() {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProjectsList() {
      const projectsList = await getProjects();
      if (projectsList) {
        setProjects(projectsList);
        setLoading(false);
      }
    }
    getProjectsList();
  }, []);

  return (
    <main>
      <section id="projects-list">
        <h1>Liste des projets</h1>
        <div className="projects">
          {loading ? (
            <p>Chargement...</p>
          ) : (
            <>
              {projects.map((project, i) => {
                return (
                  <ProjectCard
                    key={i}
                    cover={project.cover}
                    projectId={project.projectId}
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
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default AdminHome;
