import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import useScreenSize from '../../lib/customHooks';
import { LogIn, storeInLocalStorage } from '../../lib/common';
import Notification from '../notification/Notification';

import { FaUserLock } from 'react-icons/fa6';
import { FaKey } from 'react-icons/fa';
import { GiPadlockOpen } from 'react-icons/gi';

import Modal from 'antd/es/modal/Modal';

function ConnexionModal({ user, setUser }) {
  const [showNotification, setShowNotification] = useState(false);
  const [notification, setNotification] = useState({ type: '', message: '' });

  const nav = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(false);

  const form = useForm({ mode: 'onTouched' });
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isDirty, isValid } = formState;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    reset();
    setIsModalOpen(false);
  };

  const onSubmit = async (data) => {
    let notif = { type: '', message: '' };
    try {
      setIsLoading(true);
      let response = await LogIn(data);
      if (!response?.data?.token) {
        notif = {
          type: 'error',
          message: 'Une erreur est survenue !',
        };
      } else {
        notif = {
          type: 'success',
          message: 'Connectée !',
        };
        storeInLocalStorage(
          response.data.token,
          response.data.userId,
          response.data.userType,
          new Date()
        );
        setUser(response.data);
        setIsModalOpen(false);
        nav('/admin/MN95/projects');
        setErrorStatus(false);
      }
    } catch (err) {
      setErrorStatus(true);
      notif = {
        type: 'error',
        message: 'Une erreur est survenue !',
      };
    } finally {
      setIsLoading(false);
    }
    setNotification(notif);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  const disconnect = () => {
    let notif = { type: 'success', message: 'Déconnectée !' };
    localStorage.clear();
    setUser(null);
    nav('/');
    setNotification(notif);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
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
      {showNotification && (
        <Notification type={notification.type}>
          {notification.message}
        </Notification>
      )}
      {!user ? (
        <button
          onClick={showModal}
          className="button-modale-connexion"
          title="Accès connexion admninistrateur"
        >
          <FaKey />
        </button>
      ) : (
        <button
          type="button"
          onClick={disconnect}
          className="button-disconnect"
        >
          Se déconnecter
          <GiPadlockOpen />
        </button>
      )}

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
              id="username"
              {...register('username', {
                required: {
                  value: true,
                  message: 'Le champ Identifiant est requis',
                },
                minLength: {
                  value: 5,
                },
                maxLength: {
                  value: 30,
                },
                pattern: {
                  value: /^[a-zA-Z0-9.&-_]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9_-]+)*$/,
                  message: 'Format invalide',
                },
              })}
              className={errors.username?.message ? 'error-input' : null}
              autoComplete="username"
              autoCapitalize="none"
              spellCheck="false"
            />
            <p className="error">{errors.username?.message}</p>
          </div>

          <div className="input-data">
            <label htmlFor="pw">Mot de passe</label>
            <input
              type="password"
              id="pw"
              {...register('pw', {
                required: {
                  value: true,
                  message: 'Le champ Mot de passe est requis',
                },
              })}
              className={errors.pw?.message ? 'error-input' : null}
              autoComplete="username"
              autoCapitalize="none"
              spellCheck="false"
              min="5"
              max="40"
            />
            <p className="error">{errors.pw?.message}</p>
          </div>
          {errorStatus ? (
            <div className="error">Identifiant ou mot de passe invalide.</div>
          ) : null}
          <div className="button-submit">
            <button type="submit" disabled={!isDirty || !isValid || isLoading}>
              {isLoading ? 'Chargement...' : 'Se connecter'}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default ConnexionModal;
