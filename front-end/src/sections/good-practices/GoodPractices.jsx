/* eslint-disable react/no-unescaped-entities */
import Card from '../../components/card/Card';

import datas from '../../assets/datas.json';

function GoodPractices() {
  return (
    <section id="good-practices">
      <h2>Les bonnes pratiques que j'emploie</h2>
      <div className="cards">
        {datas.goodPractices.map((goodPractice, index) => {
          let state = 'odd';
          if (index === 1 || index === 2) {
            state = 'even';
          }

          return (
            <Card
              key={index}
              logo={goodPractice.logo}
              title={goodPractice.title}
              content={goodPractice.content}
              state={state}
            />
          );
        })}
      </div>
    </section>
  );
}

export default GoodPractices;
