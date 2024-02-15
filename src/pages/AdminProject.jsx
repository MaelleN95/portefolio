import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { ErrorBoundary } from '../components/ErrorBoundary';
import ErrorPage from './ErrorPage';

import { FaTrashAlt } from 'react-icons/fa';

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
      // reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <main className="modification">
      <h1>Modification</h1>

      {/* section 1 */}
      <section id="modification-informations">
        <h2>Informations</h2>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="inline center">
            <div className="input-data ">
              <label htmlFor="name">Nom du projet</label>
              <input
                type="text"
                id="name"
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Ce champ est obligatoire',
                  },
                })}
                defaultValue={project.title}
                className={errors.name?.message ? 'error-input' : null}
              />
              <p className="error">{errors.name?.message}</p>
            </div>

            <div className="input-data ">
              <label htmlFor="date">Date</label>
              <input
                type="number"
                id="date"
                min={2023}
                {...register('date', {
                  required: {
                    value: true,
                    message: 'Ce champ est obligatoire',
                  },
                })}
                defaultValue={project.date}
                className={errors.date?.message ? 'error-input' : null}
              />
              <p className="error">{errors.date?.message}</p>
            </div>
          </div>

          <div className="input-data ">
            <label htmlFor="hardSkills">Hard skills</label>
            <div className="inline">
              {project.hardSkills.map((skill, i) => (
                <div key={i} className="one-skill">
                  <input
                    type="text"
                    id={`hardSkills-${skill}`}
                    {...register(`hardSkills-${skill}`)}
                    className={errors.hardSkills?.[i] ? 'error-input' : null}
                    defaultValue={skill}
                  />
                  <button>
                    <FaTrashAlt />
                  </button>
                </div>
              ))}
            </div>
            <p className="error">{errors.hardSkills?.message}</p>
          </div>

          <div className="input-data">
            <label htmlFor="descr">Présentation rapide du projet</label>
            <textarea
              id="descr"
              cols="50"
              rows="2"
              {...register('descr', {
                required: {
                  value: true,
                  message: 'Ce champ est obligatoire',
                },
              })}
              defaultValue={project.description}
              className={errors.descr?.message ? 'error-input' : null}
            ></textarea>
            <p className="error">{errors.descr?.message}</p>
          </div>

          <div className="input-data">
            <label htmlFor="mission">Objectif du projet</label>
            <textarea
              id="mission"
              cols="50"
              rows="4"
              {...register('mission', {
                required: {
                  value: true,
                  message: 'Ce champ est obligatoire',
                },
              })}
              defaultValue={project.mission}
              className={errors.mission?.message ? 'error-input' : null}
            ></textarea>
            <p className="error">{errors.mission?.message}</p>
          </div>

          <div className="input-data">
            <label htmlFor="developedSkills">
              Compétences développées sur ce projet
            </label>
            <div className="incolumn">
              {project.skills.map((skill, i) => (
                <div key={i} className="one-skill">
                  <input
                    type="text"
                    id={`developedSkills-${i}`}
                    {...register(`developedSkills-${i}`, {
                      required: {
                        value: true,
                        message: 'Ce champ est obligatoire',
                      },
                    })}
                    className={
                      errors.developedSkills?.[i] ? 'error-input' : null
                    }
                    defaultValue={skill}
                  />
                  <button>
                    <FaTrashAlt />
                  </button>
                </div>
              ))}
            </div>
            <p className="error">{errors.developedSkills?.message}</p>
          </div>

          <div className="input-data ">
            <label htmlFor="gitHubLink">Lien vers le repository Git Hub</label>
            <input
              type="text"
              id="gitHubLink"
              {...register('gitHubLink')}
              className={errors.gitHubLink?.message ? 'error-input' : null}
              defaultValue={project.linkGithub}
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
              defaultValue={project.deployedLink}
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
