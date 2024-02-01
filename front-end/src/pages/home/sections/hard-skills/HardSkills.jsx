import { PieChart } from 'react-minimal-pie-chart';
import './HardSkills.css';

function HardSkills() {
  const defaultLabelStyle = {
    fontSize: '0.3rem',
    fontFamily: 'Roboto',
  };

  return (
    <section id="hard-skills">
      <h2>Mes compétences</h2>
      <div className="skills-details">
        <div className="front-end-skills">bla</div>
        <PieChart
          style={{ width: '37%' }}
          startAngle={65}
          segmentsShift={2}
          radius={47}
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
        <div className="back-end-skills">bla</div>
      </div>
    </section>
  );
}

export default HardSkills;
