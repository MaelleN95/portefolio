import { useEffect, useState } from 'react';

import { getProjects } from '../../lib/common';

import ProjectCard from '../../components/project-card/ProjectCard';
import Loader from '../../components/loader/Loader';

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
        Découvrez une sélection de mes réalisations professionnelles et
        personnelles pour avoir un aperçu de mon travail !
      </p>
      <ul className="projects">
        {loading ? (
          <Loader size="20%" color="black" />
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
      </ul>
    </section>
  );
}

export default MyProjects;
