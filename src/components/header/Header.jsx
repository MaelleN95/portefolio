import { Link, useParams } from 'react-router-dom';

import { Anchor, ConfigProvider } from 'antd';

import datas from '../../assets/datas.json';

function Header() {
  let { projectsId } = useParams();

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
          <Anchor
            type="primary"
            direction="horizontal"
            targetOffset="70"
            items={[
              { key: 'about-me-1', href: '/#about-me', title: 'A propos' },
              {
                key: 'my-projects-1',
                href: '/#my-projects',
                title: 'Mes projets',
              },
              { key: 'contact-1', href: '/#contact', title: 'Contact' },
            ]}
          />
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
