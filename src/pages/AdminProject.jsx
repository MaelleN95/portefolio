import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { ErrorBoundary } from '../components/ErrorBoundary';
import ErrorPage from './ErrorPage';

import projects from '../assets/projects.json';

function AdminProjectContent() {
  let { projectsId } = useParams();
  const project = projects.find((pro) => pro.id === projectsId);

  const form = useForm({ mode: 'onTouched' });
  const { register, /*control,*/ handleSubmit, formState, reset } = form;
  const { errors, isDirty, isValid, isSubmitSuccessful } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);
  return (
    <main>
      <h1>Modification</h1>
      <section id="modification-informations">
        <h2>Informations</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="input-data ">
            <label htmlFor="name">Nom du projet</label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className={errors.name?.message ? 'error-input' : null}
            />
            <p className="error">{errors.name?.message}</p>
          </div>

          <div className="input-data ">
            <label htmlFor="date">Date</label>
            <input
              type="text"
              id="date"
              {...register('date')}
              className={errors.date?.message ? 'error-input' : null}
            />
            <p className="error">{errors.date?.message}</p>
          </div>

          <div className="input-data ">
            <label htmlFor="hardSkills">Hard skills</label>
            {project.hardSkills.map((skill, i) => (
              <>
                <input
                  type="text"
                  id="hardSkills"
                  key={i}
                  {...register('hardSkills')}
                  className={errors.hardSkills?.message ? 'error-input' : null}
                  value={skill}
                />
              </>
            ))}
            <p className="error">{errors.hardSkills?.message}</p>
          </div>

          <div className="input-data">
            <label htmlFor="descr">Description</label>
            <textarea
              id="descr"
              cols="50"
              rows="2"
              {...register('descr')}
              className={errors.descr?.message ? 'error-input' : null}
            ></textarea>
            <p className="error">{errors.descr?.message}</p>
          </div>

          <div className="input-data ">
            <label htmlFor="gitHubLink">Lien vers le repository Git Hub</label>
            <input
              type="text"
              id="gitHubLink"
              {...register('gitHubLink')}
              className={errors.gitHubLink?.message ? 'error-input' : null}
            />
            <p className="error">{errors.gitHubLink?.message}</p>
          </div>

          <div className="input-data ">
            <label htmlFor="DeployedLink">Lien de déploiement</label>
            <input
              type="text"
              id="DeployedLink"
              {...register('DeployedLink')}
              className={errors.DeployedLink?.message ? 'error-input' : null}
            />
            <p className="error">{errors.DeployedLink?.message}</p>
          </div>

          <div className="button-submit">
            <button type="submit" disabled={!isDirty || !isValid}>
              Enregistrer
            </button>
          </div>
        </form>
      </section>
      <section id="modification-images">
        <h2>images</h2>
      </section>
    </main>
  );
}

function AdminProject() {
  return (
    <>
      <ErrorBoundary errorRedirection={<ErrorPage />}>
        <Header />
        <AdminProjectContent />
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default AdminProject;
