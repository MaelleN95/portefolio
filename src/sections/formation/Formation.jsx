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
import { Glow, GlowCapture } from '@codaworks/react-glow';

import datas from '../../assets/datas.json';
import CV from '../../assets/CV_Nioche_Maelle.pdf';

function Formation() {
    const iconsTab = {
        0: <FaCode />,
        1: <FaHourglassHalf />,
        2: <FaGraduationCap />,
    };
    return (
        <section id="my-formation">
            <h2>Mon parcours</h2>
            <GlowCapture>
                <VerticalTimeline lineColor="#efe8e6" animate={false}>
                    {datas.formation.map((exp, index) => {
                        let numberStatus = '#48beff';
                        index % 2 ? (numberStatus = '#ff5b61') : null;

                        const icon = iconsTab[index];

                        return (
                            <VerticalTimelineElement
                                className={`vertical-timeline-element--work`}
                                contentStyle={{
                                    background: numberStatus,
                                    color: '#161412',
                                }}
                                contentArrowStyle={{
                                    borderRight: `7px solid  ${numberStatus}`,
                                }}
                                date={exp.date}
                                iconStyle={{
                                    background: numberStatus,
                                    color: '#fff',
                                }}
                                icon={icon}
                                key={`${exp} ${index}`}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    {exp.title}
                                </h3>
                                <span className="vertical-timeline-element-subtitle">
                                    {exp.level}
                                </span>
                                <p>{exp.description}</p>
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>

                <Glow>
                    <a
                        href={CV}
                        target="_blank"
                        rel="noreferrer"
                        className="glowable-button"
                    >
                        Téléchargez mon CV !{' '}
                        <FaFileExport className="download-icon" />
                    </a>
                </Glow>
            </GlowCapture>
        </section>
    );
}

export default Formation;
