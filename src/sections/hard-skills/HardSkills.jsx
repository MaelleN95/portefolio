import { useEffect, useState } from 'react';

import { PieChart, pieArcLabelClasses } from '@mui/x-charts';

import SkillsCarousel from '../../components/skills-carousel/skills-carousel';
import LogoText from '../../components/LogoText/LogoText';
import useScreenSize from '../../lib/customHooks';

import datas from '../../assets/datas.json';

function HardSkills() {
  const screenWidth = useScreenSize().width;
  const [OPTIONS, setOPTIONS] = useState({
    direction: 'backward',
    axis: 'y',
    dragFree: true,
    loop: true,
    watchDrag: true,
  });

  useEffect(() => {
    if (screenWidth <= 720) {
      setOPTIONS({ ...OPTIONS, watchDrag: false });
    } else {
      setOPTIONS({ ...OPTIONS, watchDrag: true });
    }
  }, [screenWidth]);

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
            frontEndSkills.map((skill, index) => (
              <LogoText
                direction="horizontal"
                logo={skill.logo}
                title={skill.title}
                light={skill.light}
                key={`${skill.title}-${index}`}
                noAutoscroll={true}
                rounded={skill.rounded}
                link={skill.link}
              >
                {skill.title}
              </LogoText>
            ))
          )}
        </div>

        <PieChart
          series={[
            {
              data: [
                {
                  value: frontEndSkills.length,
                  label: 'Front-end',
                  color: '#48beff',
                },
                {
                  value: backEndSkills.length,
                  label: 'Back-end',
                  color: '#ff5b61',
                },
              ],
              arcLabel: (item) => `${item.label}`,
              innerRadius: 9,
              outerRadius: 225,
              paddingAngle: 5,
              cornerRadius: 10,
              startAngle: -200,
              endAngle: 200,
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { innerRadius: 40, additionalRadius: -20, color: 'grey' },
            },
          ]}
          slotProps={{ legend: { hidden: true } }}
          width={0.1}
          tooltip={null}
          height={500}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: 'white',
            },
          }}
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
            backEndSkills.map((skill, index) => (
              <LogoText
                direction="horizontal-reverse"
                logo={skill.logo}
                title={skill.title}
                light={skill.light}
                key={`${skill.title}-${index}`}
                noAutoscroll={true}
                rounded={skill.rounded}
                link={skill.link}
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
