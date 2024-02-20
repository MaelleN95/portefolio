import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getProjects } from '../lib/common';
import Notification from '../components/notification/Notification';

import ProjectCard from '../components/project-card/ProjectCard';

function AdminHome() {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleteSuccess, setDeleteSuccess] = useState(null);

  const [showNotification, setShowNotification] = useState(false);
  const [notification, setNotification] = useState({ type: '', message: '' });

  const received = (data) => {
    // Mettre à jour l'état avec les données reçues de l'enfant
    setDeleteSuccess(data);
  };

  useEffect(() => {
    async function getProjectsList() {
      const projectsList = await getProjects();
      if (projectsList) {
        setProjects(projectsList);
        setLoading(false);
      }
    }
    getProjectsList();

    let notif = { type: '', message: '' };
    if (deleteSuccess) {
      notif = {
        type: 'success',
        message: 'Projet supprimé avec succès !',
      };
    } else if (deleteSuccess == false) {
      notif = {
        type: 'error',
        message: 'Une erreur est survenue lors de la suppression.',
      };
    } else {
      notif = {};
    }

    setNotification(notif);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  }, [deleteSuccess]);

  return (
    <main>
      {showNotification && (
        <Notification type={notification.type}>
          {notification.message}
        </Notification>
      )}
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
                    deleteSuccess={received}
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
