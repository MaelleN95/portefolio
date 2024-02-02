import { PieChart } from 'react-minimal-pie-chart';

import SkillsCarousel from '../../components/skills-carousel/skills-carousel';

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

  const SLIDES = Array.from(Array(5).keys());
  const SLIDES2 = Array.from(Array(5).keys());
  return (
    <section id="hard-skills">
      <h2>Mes compétences</h2>
      <div className="skills-details">
        <div
          className="skills front-end-skills"
          height={190 * (SLIDES.length - 1)}
        >
          <SkillsCarousel
            slides={SLIDES}
            options={OPTIONS}
            direction="forward"
          />
        </div>
        <PieChart
          style={{ width: ' 40%' }}
          startAngle={65}
          segmentsShift={5}
          radius={45}
          label={({ dataEntry }) => dataEntry.title}
          labelStyle={{ ...defaultLabelStyle }}
          className="piechart"
          data={[
            {
              title: 'Front-end',
              value: 5,
              color: 'rgba(72,190,255,0.9)',
            },
            { title: 'Back-end', value: 3, color: 'rgba(225,91,97,0.9)' },
          ]}
        />
        <div className="skills back-end-skills">
          <SkillsCarousel
            slides={SLIDES2}
            options={OPTIONS}
            direction="backward"
          />
        </div>
      </div>
    </section>
  );
}

export default HardSkills;
