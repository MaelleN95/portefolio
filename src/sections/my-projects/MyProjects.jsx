import projects from '../../assets/projects.json';

import ProjectCard from '../../components/project-card/ProjectCard';

function MyProjects() {
  return (
    <section id="my-projects">
      <h2>Mes projets</h2>
      <p>
        Découvrez une sélection de mes réalisations professionnelles pour avoir
        un aperçu de mon travail !
      </p>
      <div className="projects">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              deployedLink={project.deployedLink}
              githubLink={project.linkGithub}
              hardskills={project.hardSkills}
              cover={project.cover}
              projectsId={project.id}
            >
              {project.title}
            </ProjectCard>
          );
        })}
      </div>
    </section>
  );
}

export default MyProjects;
