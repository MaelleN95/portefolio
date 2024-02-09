import projects from '../../assets/projects.json';

import ProjectCard from '../../components/project-card/ProjectCard';

function MyProjects() {
  return (
    <section id="my-projects">
      <h2>Mes projets</h2>
      {projects.map((project) => {
        return <ProjectCard key={projects.id}>{project.title}</ProjectCard>;
      })}
    </section>
  );
}

export default MyProjects;
