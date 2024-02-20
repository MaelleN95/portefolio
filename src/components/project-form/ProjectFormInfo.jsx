import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

import { addProject, updateProject } from '../../lib/common';

import { FaPenAlt, FaTrashAlt } from 'react-icons/fa';
import Notification from '../notification/Notification';

export function ProjectFormInfo({ project }) {
  const [showNotification, setShowNotification] = useState(false);
  const [notification, setNotification] = useState({ type: '', message: '' });
  const form = useForm({
    mode: 'onTouched',
    defaultValues: {
      hardSkills: project?.hardSkills || [],
      developedSkills: project?.skills || [],
    },
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors, isDirty, isValid } = formState;

  const {
    fields: fieldsHS,
    append: appendHS,
    remove: removeHS,
  } = useFieldArray({
    control,
    name: 'hardSkills',
  });

  const {
    fields: fieldsDS,
    append: appendDS,
    remove: removeDS,
  } = useFieldArray({
    control,
    name: 'developedSkills',
  });

  // console.log('isDirty : ', isDirty);
  // console.log('isValid : ', isValid);

  const [selectedImage, setSelectedImage] = useState(project?.cover);
  const [selectedFile, setSelectedFile] = useState(project?.cover);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    const fileUrl = URL.createObjectURL(file);
    setSelectedImage(fileUrl);
  };

  const onSubmit = async (data) => {
    let notif = { type: '', message: '' };
    if (project) {
      if (selectedFile !== project.cover) {
        data.file = selectedFile;
      }

      let updatedProject = await updateProject(data, project.projectId);
      if (!updatedProject.error) {
        notif = {
          type: 'success',
          message: 'Projet modifié avec succès !',
        };
      } else {
        notif = {
          type: 'error',
          message: 'Une erreur est survenue.',
        };
        console.log(updateProject.message);
      }
    } else {
      data.file = selectedFile;
      let newProject = await addProject(data);

      if (!data.file) {
        notif = {
          type: 'error',
          message: 'Vous devez ajouter une image de couverture',
        };
      }
      if (!newProject.error) {
        notif = {
          type: 'success',
          message: 'Projet créé avec succès !',
        };
      } else {
        notif = {
          type: 'error',
          message: 'Une erreur est survenue.',
        };
        alert(newProject.message);
      }
    }
    setNotification(notif);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="admin-form">
      {showNotification && (
        <Notification type={notification.type}>
          {notification.message}
        </Notification>
      )}
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
            defaultValue={project?.title || ''}
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
            defaultValue={project?.date || ''}
            className={errors.date?.message ? 'error-input' : null}
          />
          <p className="error">{errors.date?.message}</p>
        </div>
      </div>

      <div className="input-data ">
        <div className="label inline center">Image de couverture</div>
        <div className="incolumn upload-block">
          <div className="upload-edit">
            <input
              type="file"
              id="cover"
              accept="image/png, image/jpeg, image/webp"
              {...register('cover')}
              className={errors.cover?.message ? 'error-input file' : 'file'}
              onChange={handleImageChange}
              value={selectedFile?.file}
            />
            <label htmlFor="cover">
              <FaPenAlt />
            </label>
          </div>
          <div className="upload-preview">
            {selectedImage && <img src={selectedImage} alt="Preview" />}
          </div>
        </div>
        <p className="error">{errors.cover?.message}</p>
      </div>

      <div className="input-data ">
        <label htmlFor="hardSkills">Hard skills</label>
        <div className="inline">
          {fieldsHS.map((item, i) => (
            <div key={item.id} className="one-skill">
              <input
                type="text"
                id={`hardSkills.${i}`}
                {...register(`hardSkills.${i}`, {
                  required: {
                    value: true,
                    message: 'Ce champ est obligatoire',
                  },
                })}
                className={
                  errors.hardSkills?.root?.message ? 'error-input' : ''
                }
              />
              <button type="button" onClick={() => removeHS(i)}>
                <FaTrashAlt />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendHS('...')}
            className={
              'append-button ' +
              (errors.hardSkills?.root?.message ? 'error-input' : '')
            }
          >
            +
          </button>
        </div>
        <p className="error">{errors.hardSkills?.root?.message}</p>
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
          defaultValue={project?.description || ''}
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
          defaultValue={project?.mission || ''}
          className={errors.mission?.message ? 'error-input' : null}
        ></textarea>
        <p className="error">{errors.mission?.message}</p>
      </div>

      <div className="input-data ">
        <label htmlFor="developedSkills">
          Compétences développées sur ce projet
        </label>
        <div className="incolumn">
          {fieldsDS.map((item, i) => (
            <div key={item.id} className="one-skill">
              <input
                type="text"
                id={`developedSkills.${i}`}
                {...register(`developedSkills.${i}`, {
                  required: {
                    value: true,
                    message: 'Ce champ est obligatoire',
                  },
                })}
                className={
                  errors.developedSkills?.root?.message ? 'error-input' : ''
                }
              />
              <button type="button" onClick={() => removeDS(i)}>
                <FaTrashAlt />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendDS('...')}
            className={
              'append-button ' +
              (errors.developedSkills?.root?.message ? 'error-input' : '')
            }
          >
            +
          </button>
        </div>
        <p className="error">{errors.developedSkills?.root?.message}</p>
      </div>

      <div className="input-data ">
        <label htmlFor="gitHubLink">Lien vers le repository Git Hub</label>
        <input
          type="text"
          id="gitHubLink"
          {...register('gitHubLink')}
          className={errors.gitHubLink?.message ? 'error-input' : null}
          defaultValue={project?.linkGitHub || ''}
        />
        <p className="error">{errors.gitHubLink?.message}</p>
      </div>

      <div className="input-data ">
        <label htmlFor="deployedLink">Lien de déploiement</label>
        <input
          type="text"
          id="deployedLink"
          {...register('deployedLink')}
          className={errors.deployedLink?.message ? 'error-input' : null}
          defaultValue={project?.linkDeployedSite || ''}
        />
        <p className="error">{errors.deployedLink?.message}</p>
      </div>

      <button type="submit" disabled={!isDirty || !isValid}>
        Enregistrer
      </button>
      <DevTool control={control} />
    </form>
  );
}

export default ProjectFormInfo;
