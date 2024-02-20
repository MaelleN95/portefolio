import { useEffect, useState } from 'react';

import { getProjects } from '../../lib/common';

import ProjectCard from '../../components/project-card/ProjectCard';

function MyProjects() {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getProjectsList() {
      const projects = await getProjects();
      if (projects) {
        setProjects(projects);
        setLoading(false);
      }
    }
    getProjectsList();
  }, []);

  return (
    <section id="my-projects">
      <h2>Mes projets</h2>
      <p>
        Découvrez une sélection de mes réalisations professionnelles pour avoir
        un aperçu de mon travail !
      </p>
      <div className="projects">
        {loading ? (
          <p>Chargement...</p>
        ) : (
          projects.map((project, i) => {
            return (
              <ProjectCard
                key={i}
                deployedLink={project.linkDeployedSite}
                githubLink={project.linkGitHub}
                hardskills={project.hardSkills}
                cover={project.cover}
                projectId={project.projectId}
              >
                {project.title}
              </ProjectCard>
            );
          })
        )}
      </div>
    </section>
  );
}

export default MyProjects;
