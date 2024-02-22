import { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { DevTool } from '@hookform/devtools';

import { addContactResponse } from '../../lib/common';

import Notification from '../../components/notification/Notification';

function Contact() {
  const [showNotification, setShowNotification] = useState(false);
  const [notification, setNotification] = useState({ type: '', message: '' });

  const form = useForm({ mode: 'onTouched' });
  const { register, /*control,*/ handleSubmit, formState, reset } = form;
  const { errors, isDirty, isValid } = formState;

  const onSubmit = async (data) => {
    let notif = { type: '', message: '' };
    const newContactForm = await addContactResponse(data);
    if (!newContactForm.error) {
      notif = {
        type: 'success',
        message: 'Formulaire envoyé avec succès !',
      };
      reset();
    } else {
      notif = {
        type: 'error',
        message: "Une erreur est survenue lors de l'envoi !",
      };
    }
    setNotification(notif);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  return (
    <section id="contact">
      {showNotification && (
        <Notification type={notification.type}>
          {notification.message}
        </Notification>
      )}
      <h2>Me contacter</h2>
      <div className="contact-block">
        <div>
          <p>
            Une envie de discuter à propos d&apos;un projet ou une demande ?
          </p>
          <p>
            N&apos;hésitez surtout pas à me contacter en remplissant le
            formulaire et je vous répondrai dans les plus brefs délais !
          </p>
          <p>
            Si vous préférez par mail, c’est par{' '}
            <a href="mailto:nioche.maelle@gmail.com">ici</a>.
          </p>
          <div className="img-form">
            <img
              src="/social_networking.svg"
              alt="Illustration de 2 personnes qui discutent via SMS"
            />
          </div>
        </div>

        <div className="form-block">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="name-firstname">
              <div className="input-data ">
                <label htmlFor="nom">Nom</label>
                <input
                  type="text"
                  id="nom"
                  {...register('nom', {
                    required: {
                      value: true,
                      message: 'Le champ Nom est requis',
                    },
                  })}
                  className={errors.nom?.message ? 'error-input' : null}
                  autoComplete="off"
                  autoCapitalize="none"
                  spellCheck="true"
                />
                <p className="error">{errors.nom?.message}</p>
              </div>

              <div className=" input-data">
                <label htmlFor="prenom">Prénom</label>
                <input
                  type="text"
                  id="prenom"
                  {...register('prenom', {
                    required: {
                      value: true,
                      message: 'Le champ Prénom est requis',
                    },
                  })}
                  className={errors.prenom?.message ? 'error-input' : null}
                  autoComplete="off"
                  autoCapitalize="none"
                  spellCheck="true"
                />
                <p className="error">{errors.prenom?.message}</p>
              </div>
            </div>

            <div className="input-data">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Le champ Email est requis',
                  },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.&-_~]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9_-]+)*$/,
                    message: "Format d'e-mail invalide",
                  },
                })}
                className={errors.email?.message ? 'error-input' : null}
                autoComplete="off"
                autoCapitalize="none"
                spellCheck="true"
              />
              <p className="error">{errors.email?.message}</p>
            </div>

            <div className="input-data">
              <label htmlFor="msg">Message</label>
              <textarea
                id="msg"
                cols="30"
                rows="7"
                {...register('msg', {
                  required: {
                    value: true,
                    message: 'Le champ Message est requis',
                  },
                })}
                className={errors.msg?.message ? 'error-input' : null}
                autoComplete="off"
                autoCapitalize="sentences"
                spellCheck="true"
              ></textarea>
              <p className="error">{errors.msg?.message}</p>
            </div>
            <div className="button-submit">
              <button type="submit" disabled={!isDirty || !isValid}>
                Envoyer
              </button>
            </div>
          </form>
          {/* <DevTool control={control} /> */}
        </div>
      </div>
    </section>
  );
}

export default Contact;
