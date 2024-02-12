import { useEffect, useState } from 'react';

import datas from '../../assets/datas.json';

import LogoText from '../../components/LogoText/LogoText';

import useScreenSize from '../../lib/customHooks';

function SocialMedia() {
  const socialMedias = datas.socialMedia;

  const screenWidth = useScreenSize().width;
  const [direction, setDirection] = useState('horizontal');

  useEffect(() => {
    if (screenWidth <= 1175) {
      setDirection('vertical');
    } else {
      setDirection('horizontal');
    }
  }, [screenWidth]);

  return (
    <section id="social-media">
      <h2>Mes réseaux</h2>
      <ul className="social-media-list">
        {socialMedias.map((socialMedia, index) => (
          <LogoText
            direction={direction}
            logo={socialMedia.logo}
            title={socialMedia.title}
            link={socialMedia.link}
            key={index}
          >
            {socialMedia.title}
          </LogoText>
        ))}
      </ul>
    </section>
  );
}

export default SocialMedia;
