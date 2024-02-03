import './AboutMe.scss';

import devActivitySVG from '../../assets/icons/illustrations/developer_activity.svg';

import datas from '../../assets/datas.json';

function AboutMe() {
  return (
    <section id="about-me">
      <h2>A propos de moi</h2>
      <div className="presentation">
        <div>
          {datas.description.map((descr) => (
            <p key={descr} className="tag">
              {descr}
            </p>
          ))}
        </div>
        <img src={devActivitySVG} alt="développeur entrain de coder" />
      </div>
    </section>
  );
}

export default AboutMe;
