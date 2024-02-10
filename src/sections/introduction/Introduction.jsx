import { useParams } from 'react-router-dom';

import projects from '../../assets/projects.json';

function Introduction() {
  let { projectsId } = useParams();
  console.log(projectsId);
  const project = projects.find((pro) => pro.id === projectsId);

  return (
    <section>
      <h1>{project.title}</h1>
    </section>
  );
}

export default Introduction;
