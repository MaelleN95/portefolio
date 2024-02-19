import { Link } from 'react-router-dom';

import Illustration404 from '../assets/icons/illustrations/page_not_found.svg';

function ErrorPage() {
  return (
    <main>
      <section id="error404">
        <img
          src={Illustration404}
          alt="Illustration erreur 404"
          className="error404-illu"
        />
        <p>Oups ! La page que vous demandez n&apos;existe pas.</p>
        <Link to="/">Retourner sur la page d&apos;accueil</Link>
      </section>
    </main>
  );
}

export default ErrorPage;
