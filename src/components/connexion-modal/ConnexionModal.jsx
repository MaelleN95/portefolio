import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import useScreenSize from '../../lib/customHooks';

import { FaUserLock } from 'react-icons/fa6';
import { FaKey } from 'react-icons/fa';

import Modal from 'antd/es/modal/Modal';

function ConnexionModal() {
  const form = useForm({ mode: 'onTouched' });
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isDirty, isValid, isSubmitSuccessful } = formState;

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    reset();
    setIsModalOpen(false);
  };

  const screenWidth = useScreenSize().width;

  const [widthModalConnexion, setWidthModalConnexion] = useState('40%');

  useEffect(() => {
    if (screenWidth <= 1175) {
      setWidthModalConnexion('70%');
    } else {
      setWidthModalConnexion('40%');
    }
  }, [screenWidth]);
  return (
    <>
      <button onClick={showModal} className="button-modale-connexion">
        <FaKey />
      </button>
      <Modal
        open={isModalOpen}
        footer={[]}
        onCancel={handleCancel}
        width={widthModalConnexion}
        className="modal-connexion"
        title="Connexion admninistrateur"
      >
        <div className="attention-msg">
          <FaUserLock />
          Cet espace est réservé à l’administrateur du site
        </div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="input-data">
            <label htmlFor="prenom">Identifiant</label>
            <input
              type="text"
              id="usersame"
              {...register('usersame', {
                required: {
                  value: true,
                  message: 'Le champ Identifiant est requis',
                },
                pattern: {
                  value:
                    /^[a-zA-Z0-9.&-_~]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9_-]+)*$/,
                  message: 'Format invalide',
                },
              })}
              className={errors.usersame?.message ? 'error-input' : null}
            />
            <p className="error">{errors.usersame?.message}</p>
          </div>

          <div className="input-data">
            <label htmlFor="pw">Mot de passe</label>
            <input
              type="text"
              id="pw"
              {...register('pw', {
                required: {
                  value: true,
                  message: 'Le champ Mot de passe est requis',
                },
              })}
              className={errors.pw?.message ? 'error-input' : null}
            />
            <p className="error">{errors.pw?.message}</p>
          </div>

          <div className="button-submit">
            <button type="submit" disabled={!isDirty || !isValid}>
              Se connecter
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default ConnexionModal;
