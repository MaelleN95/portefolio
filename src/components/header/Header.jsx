import { Link, useParams, useNavigate } from 'react-router-dom';

import { Anchor, ConfigProvider } from 'antd';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';

import datas from '../../assets/datas.json';

function Header() {
  let { projectsId } = useParams();

  let nav = useNavigate();

  const handleGoBack = () => {
    nav(-1);
  };

  return (
    <header>
      {projectsId ? (
        <Link to="/" title={`Lien vers la page d'accueil`}>
          <img
            src={datas.logo}
            alt="icône Maelle Nioche"
            width="40"
            height="40"
          />
        </Link>
      ) : (
        <img
          src={datas.logo}
          alt="icône Maelle Nioche"
          width="40"
          height="40"
        />
      )}

      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#6C63FF',
            colorText: 'black',
            fontFamily: 'Roboto, sans-serif, Arial',
            fontSize: '1rem',
            lineWidth: 2,
            padding: '1.5rem',
          },
        }}
      >
        {projectsId ? (
          <button
            onClick={handleGoBack}
            className="go-back-button"
            title="Retour à la page précédente"
          >
            <FaRegArrowAltCircleLeft /> Retour
          </button>
        ) : (
          <Anchor
            type="primary"
            direction="horizontal"
            targetOffset="70"
            items={[
              { key: 'about-me-1', href: '#about-me', title: 'A propos' },
              {
                key: 'my-projects-1',
                href: '#my-projects',
                title: 'Mes projets',
              },
              { key: 'contact-1', href: '#contact', title: 'Contact' },
            ]}
          />
        )}
      </ConfigProvider>
    </header>
  );
}

export default Header;
