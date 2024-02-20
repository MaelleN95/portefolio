import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ProjectFormInfo from '../components/project-form/ProjectFormInfo';
import { ErrorBoundary } from '../utils/ErrorBoundary';
import ErrorPage from './ErrorPage';

import { getProject } from '../lib/common';

function AdminProject() {
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState(null);

  const params = useParams();

  useEffect(() => {
    async function getItem() {
      const data = await getProject(params.projectsId);
      if (data) {
        setProject(data);
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
    getItem();
  }, [params.projectsId]);

  return (
    <>
      <ErrorBoundary errorRedirection={<ErrorPage />}>
        <main className="modification">
          <h1>Modification</h1>
          <section id="modification-informations">
            <h2>Informations</h2>
            {loading ? (
              <p>Chargement...</p>
            ) : (
              <ProjectFormInfo project={project} />
            )}
          </section>
        </main>
      </ErrorBoundary>
    </>
  );
}

export default AdminProject;
