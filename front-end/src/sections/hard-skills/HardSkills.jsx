import { PieChart } from 'react-minimal-pie-chart';

import SkillsCarousel from '../../components/skills-carousel/skills-carousel';
import LogoText from '../../components/LogoText/LogoText';

import datas from '../../assets/datas.json';

function HardSkills() {
  const defaultLabelStyle = {
    fontSize: '0.3rem',
    fontFamily: 'Roboto',
  };

  const OPTIONS = {
    direction: 'backward',
    axis: 'y',
    dragFree: true,
    loop: true,
  };

  const backEndSkills = datas.backEndSkills;
  const frontEndSkills = datas.frontEndSkills;

  return (
    <section id="hard-skills">
      <h2>Mes compétences</h2>
      <div className="skills-details">
        <div className="skills front-end-skills">
          {frontEndSkills.length >= 5 ? (
            <SkillsCarousel
              skills={frontEndSkills}
              options={OPTIONS}
              direction="forward"
              logoTextDirection="horizontal"
            />
          ) : (
            frontEndSkills.map((skill) => (
              <LogoText
                direction="horizontal"
                logo={skill.logo}
                title={skill.title}
                light={skill.light}
                key={skill.title}
                noAutoscroll={true}
                rounded={skill.rounded}
              >
                {skill.title}
              </LogoText>
            ))
          )}
        </div>
        <PieChart
          style={{ width: ' 40%' }}
          startAngle={65}
          segmentsShift={0.5}
          radius={43}
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={{ ...defaultLabelStyle }}
          className="piechart"
          data={[
            {
              title: 'Front-end',
              value: frontEndSkills.length,
              color: 'rgba(72,190,255,0.9)',
            },
            {
              title: 'Back-end',
              value: backEndSkills.length,
              color: 'rgba(225,91,97,0.9)',
            },
          ]}
        />
        <div className="skills back-end-skills">
          {backEndSkills.length >= 5 ? (
            <SkillsCarousel
              skills={backEndSkills}
              options={OPTIONS}
              direction="backward"
              logoTextDirection="horizontal-reverse"
            />
          ) : (
            backEndSkills.map((skill) => (
              <LogoText
                direction="horizontal-reverse"
                logo={skill.logo}
                title={skill.title}
                light={skill.light}
                key={skill.title}
                noAutoscroll={true}
                rounded={skill.rounded}
              >
                {skill.title}
              </LogoText>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default HardSkills;
