import datas from '../../assets/datas.json';

import LogoText from '../../components/LogoText/LogoText';

function Tools() {
  const tools = datas.tools;
  return (
    <section id="tools">
      <h2>Mes outils</h2>
      <div className="tools-list">
        {tools.map((tool, index) => (
          <a href={tool.link} key={index} title={`Lien vers ${tool.title}`}>
            <LogoText
              direction="vertical"
              logo={tool.logo}
              title={tool.title}
              light={tool.light}
              noAutoscroll={true}
              rounded={tool.rounded}
            >
              {tool.title}
            </LogoText>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Tools;