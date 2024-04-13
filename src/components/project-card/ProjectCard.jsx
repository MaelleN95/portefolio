import { Link } from 'react-router-dom';
// import { useState } from 'react';

import {
  FaGithub,
  FaExternalLinkAlt,
  FaPenAlt,
  FaTrashAlt,
} from 'react-icons/fa';

import { deleteProject } from '../../lib/common';

function ProjectCard(props) {
  const {
    hardskills,
    cover,
    githubLink,
    deployedLink,
    projectId,
    adminPage,
    deleteSuccess,
  } = props;

  const onDelete = async (e) => {
    if (e.key && e.key !== 'Enter') {
      return;
    }
    const check = confirm(
      'Etes vous sûr de vouloir supprimer ce projet ?\nCette action est irréversible.'
    );
    if (check) {
      const del = await deleteProject(projectId);
      if (del) {
        deleteSuccess(true);
      } else {
        deleteSuccess(false);
      }
    }
  };

  return (
    <li className="project-card">
      <Link
        to={`/projects/${projectId}`}
        title={`Lien vers la page du projet ${props.children}`}
      >
        <img
          className="project-card__cover"
          src={cover}
          alt={`${props.children} cover`}
          height="255px"
          width="100%"
          loading="lazy"
        />

        <div className="project-card__hover-effect">
          <h3>{props.children}</h3>
        </div>
      </Link>

      <h3 className="title-mobil">{props.children}</h3>

      <div className="project-links">
        {githubLink ? (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Ouvrir la page du code dans un nouvel onglet"
            className="project-link"
          >
            <span>
              <FaGithub className="icon" />
            </span>
          </a>
        ) : null}
        {deployedLink ? (
          <a
            href={deployedLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Ouvrir la page du site dans un nouvel onglet"
            className="project-link"
          >
            <span>
              <FaExternalLinkAlt className="icon" />
            </span>
          </a>
        ) : null}
        {adminPage ? (
          <>
            <button className="project-link admin-link">
              <Link
                to={`/admin/MN95/projects/${projectId}`}
                title={`Lien vers la page du projet ${props.children}`}
              >
                <FaPenAlt />
              </Link>
            </button>
            <button className="project-link admin-link" onClick={onDelete}>
              <FaTrashAlt />
            </button>
          </>
        ) : null}
      </div>

      {hardskills ? (
        <ul className="hardskills-list">
          {hardskills.map((hardSkill, index) => (
            <li key={index} className="hardskills-list__element">
              {hardSkill}
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default ProjectCard;
