import { useState, useEffect } from 'react';
import datas from '../../assets/datas.json';

import SoftSkillBubble from '../../components/soft-skill-bubble/SoftSkillBubble';

function SoftSkills() {
  const softSkills = datas.softSkills.skills;
  const svg = datas.softSkills.logo;

  const [selectedSkill1, setSelectedSkill1] = useState([]);
  const [selectedSkill2, setSelectedSkill2] = useState([]);

  const selectRandomSkills = () => {
    const shuffledSkill = softSkills.sort(() => Math.random() - 0.5);
    const selectedSet1 = shuffledSkill.slice(0, 3);
    const selectedSet2 = shuffledSkill.slice(3, 6);
    setSelectedSkill1(selectedSet1);
    setSelectedSkill2(selectedSet2);
  };

  useEffect(() => {
    selectRandomSkills();
  }, []);

  return (
    <section id="soft-skills">
      <h2>Mon savoir-être</h2>
      <div className="details">
        <div className="bubble-column left">
          {selectedSkill1.map((skill, index) => (
            <SoftSkillBubble color={index} key={index}>
              {skill}
            </SoftSkillBubble>
          ))}
        </div>
        <img
          src={svg}
          alt="illustration de 3 femmes sur un ordinateur qui discutent"
        />
        <div className="bubble-column right">
          {selectedSkill2.map((skill, index) => (
            <SoftSkillBubble color={index + 1} key={index}>
              {skill}
            </SoftSkillBubble>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SoftSkills;
