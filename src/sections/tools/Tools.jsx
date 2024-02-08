import datas from '../../assets/datas.json';

import LogoText from '../../components/LogoText/LogoText';

function Tools() {
  const tools = datas.tools;
  return (
    <section id="tools">
      <h2>Mes outils</h2>
      <ul className="tools-list">
        {tools.map((tool, index) => (
          <LogoText
            direction="vertical"
            logo={tool.logo}
            title={tool.title}
            light={tool.light}
            noAutoscroll={true}
            rounded={tool.rounded}
            link={tool.link}
            key={index}
          >
            {tool.title}
          </LogoText>
        ))}
      </ul>
    </section>
  );
}

export default Tools;
