import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import datas from '../../assets/datas.json';

function Formation() {
  return (
    <section id="my-formation">
      <h2>Mon parcours</h2>
      <VerticalTimeline lineColor="#efe8e6">
        {datas.formation.map((exp, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#48beff', color: '#161412' }}
            contentArrowStyle={{ borderRight: '7px solid  #48beff' }}
            date={exp.date}
            iconStyle={{ background: '#48beff', color: '#fff' }}
            icon={exp.icon}
            key={`${exp} ${index}`}
          >
            <h3 className="vertical-timeline-element-title">{exp.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{exp.level}</h4>
            <p>{exp.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      <button id="cv">Téléchargez mon CV !</button>
    </section>
  );
}

export default Formation;
