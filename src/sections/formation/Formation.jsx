import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  FaCode,
  FaHourglassHalf,
  FaGraduationCap,
  FaFileExport,
} from 'react-icons/fa';

import datas from '../../assets/datas.json';

function Formation() {
  const iconsTab = {
    0: <FaHourglassHalf />,
    1: <FaCode />,
    2: <FaGraduationCap />,
  };
  return (
    <section id="my-formation">
      <h2>Mon parcours</h2>
      <VerticalTimeline lineColor="#efe8e6">
        {datas.formation.map((exp, index) => {
          let numberStatus = '#ff5b61';
          index % 2 ? (numberStatus = '#48beff') : null;

          const icon = iconsTab[index];

          return (
            <VerticalTimelineElement
              className={`vertical-timeline-element--work`}
              contentStyle={{ background: numberStatus, color: '#161412' }}
              contentArrowStyle={{ borderRight: `7px solid  ${numberStatus}` }}
              date={exp.date}
              iconStyle={{ background: numberStatus, color: '#fff' }}
              icon={icon}
              key={`${exp} ${index}`}
            >
              <h3 className="vertical-timeline-element-title">{exp.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {exp.level}
              </h4>
              <p>{exp.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>

      <button id="cv">
        Téléchargez mon CV ! <FaFileExport />
      </button>
    </section>
  );
}

export default Formation;
