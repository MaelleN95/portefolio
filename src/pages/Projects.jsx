import ErrorPage from './ErrorPage';
import { ErrorBoundary } from '../utils/ErrorBoundary';

import ProjectModal from '../components/project-modal/ProjectModal';

import { useParams } from 'react-router-dom';

import { FaCalendarAlt } from 'react-icons/fa';

import { Glow, GlowCapture } from '@codaworks/react-glow';

import projects from '../assets/projects.json';
import percentages from '../assets/icons/illustrations/percentages.svg';

function ProjectContentPage() {
  let { projectsId } = useParams();
  const project = projects.find((pro) => pro.id === projectsId);

  return (
    <main>
      <GlowCapture>
        <section id="project-introduction">
          <h1>{project.title}</h1>
          {project.description ? (
            <p className="description">{project.description}</p>
          ) : null}

          {project.hardSkills ? (
            <ul className="hardskills-list">
              {project.hardSkills.map((hardSkill, index) => (
                <li key={index} className="hardskills-list__element">
                  {hardSkill}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="project-cover">
            <div className="project-cover__image">
              <img src={project.cover} alt="" />
              {project.pictures ? (
                <ProjectModal pictures={project.pictures} />
              ) : null}
            </div>
            <div className="project-cover__pc-core"></div>
            <div className="project-cover__pc-base"></div>
          </div>

          <div className="project-links">
            <a
              href={project.linkGithub}
              target="_blank"
              rel="noopener noreferrer"
              title="Ouvrir la page du code dans un nouvel onglet"
              className="project-link"
            >
              Consulter le code
            </a>
            {project.deployedLink ? (
              <a
                href={project.deployedLink}
                target="_blank"
                rel="noopener noreferrer"
                title="Ouvrir la page du site dans un nouvel onglet"
                className="project-link"
              >
                Visiter le site
              </a>
            ) : null}
          </div>
          <div className="date">
            <FaCalendarAlt /> {project.date}
          </div>
        </section>
        <section className="details">
          <Glow>
            <section id="project-mission">
              <h2>Mission</h2>
              <p>{project.mission}</p>
            </section>
          </Glow>

          <div id="project-skill">
            <Glow>
              <section className="skills-developed-part">
                <h2>Compétences développées</h2>
                <ul className="skills-developed-list">
                  {project.skills.map((skill, index) => (
                    <li key={index} className="skills-developed-list__element">
                      {skill}
                    </li>
                  ))}
                </ul>
              </section>
            </Glow>
            <div className="illustration">
              <img
                src={percentages}
                alt="personnage avec des barres de progression"
              />
            </div>
          </div>
        </section>
      </GlowCapture>
    </main>
  );
}

function Projects() {
  return (
    <ErrorBoundary errorRedirection={<ErrorPage />}>
      <ProjectContentPage />
    </ErrorBoundary>
  );
}

export default Projects;
