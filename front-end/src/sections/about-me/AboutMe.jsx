/* eslint-disable react/no-unescaped-entities */
import './AboutMe.scss';
import devActivitySVG from '../../assets/icons/illustrations/developer_activity.svg';

function AboutMe() {
  return (
    <section id="about-me">
      <h2>A propos de moi</h2>
      <div className="presentation">
        <div>
          <p>
            Bonjour et bienvenue sur mon site ! Je suis développeuse web
            polyvalente et passionnée.
          </p>
          <p>
            Spécialisée dans le <strong>front-end</strong>, je favorise la
            création, l’accessibilité et l'optimisation d'une application web en
            plaçant{' '}
            <strong>
              les besoins et les préférences des utilisateurs au centre de la
              conception et du développement
            </strong>
            .
          </p>
          <p>
            De plus, mes compétences en développement back-end me permettent une
            vision globale des projets et facilite la cohésion en équipe !
          </p>
        </div>
        <img src={devActivitySVG} alt="développeur entrain de coder" />
      </div>
    </section>
  );
}

export default AboutMe;
