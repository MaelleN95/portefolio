import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import useScreenSize from '../../lib/customHooks';

import { Anchor, ConfigProvider } from 'antd';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';

import datas from '../../assets/datas.json';

function Header() {
  let { projectsId } = useParams();

  let nav = useNavigate();

  const handleGoBack = () => {
    nav(-1);
  };

  const screenWidth = useScreenSize().width;

  const [mobilHeader, setMobilHeader] = useState(false);
  const [openHamburger, setOpenHamburger] = useState(false);

  useEffect(() => {
    if (screenWidth <= 720) {
      setMobilHeader(true);
    } else {
      setMobilHeader(false);
    }
  }, [screenWidth]);

  const handleHamburger = () => {
    setOpenHamburger(!openHamburger);
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
        ) : mobilHeader ? (
          <>
            {openHamburger ? (
              <>
                <div className="hamburger open" onClick={handleHamburger}>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
                <div className="header-modal-mobil">
                  <ul>
                    <li>
                      <a
                        href="#about-me"
                        title="Section à propos de moi"
                        onClick={handleHamburger}
                      >
                        A propos
                      </a>
                    </li>
                    <li>
                      <a
                        href="#my-projects"
                        title="Section mes projets"
                        onClick={handleHamburger}
                      >
                        Mes projets
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        title="Section contact"
                        onClick={handleHamburger}
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div className="hamburger" onClick={handleHamburger}>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </div>
                <div className="header-modal-mobil header-modal-mobil__close"></div>
              </>
            )}
          </>
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
