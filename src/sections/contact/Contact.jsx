function Contact() {
  return (
    <section id="contact">
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
          <p>Si vous préférez par mail, c’est par ici.</p>
          <div className="img-form">
            <img
              src="/src/assets/icons/illustrations/social_networking.svg"
              alt=""
            />
          </div>
        </div>
        <div className="form-block">
          <form>
            <div className="name-firstname">
              <div className="input-data ">
                <label htmlFor="nom">Nom</label>
                <input type="text" name="nom" id="nom" />
              </div>

              <div className=" input-data">
                <label htmlFor="prenom">Prénom</label>
                <input type="text" name="prenom" id="prenom" />
              </div>
            </div>

            <div className="input-data">
              <label htmlFor="email">E-mail</label>
              <input type="text" name="email" id="email" />
            </div>

            <div className="input-data">
              <label htmlFor="msg">Message</label>
              <textarea name="msg" id="msg" cols="30" rows="7"></textarea>
            </div>
            <div className="button-submit">
              <button type="submit">Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
