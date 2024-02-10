import datas from '../../assets/datas.json';

import LogoText from '../../components/LogoText/LogoText';

function SocialMedia() {
  const socialMedias = datas.socialMedia;
  return (
    <section id="social-media">
      <h2>Mes réseaux</h2>
      <ul className="social-media-list">
        {socialMedias.map((socialMedia, index) => (
          <LogoText
            direction="horizontal"
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
