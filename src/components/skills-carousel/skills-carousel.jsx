import useEmblaCarousel from 'embla-carousel-react';
import LogoText from '../../components/LogoText/LogoText';
import Autoscroll from 'embla-carousel-auto-scroll';

export function SkillsCarousel(props) {
  const { skills, options, direction, logoTextDirection } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    Autoscroll({
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      speed: 0.8,
      direction: direction,
    }),
  ]);

  return (
    <div className="embla" ref={emblaRef}>
      <ul className="embla__container">
        {skills.map((skill, index) => (
          <li className="embla__slide" key={`${skill.title}-${index}`}>
            <LogoText
              direction={logoTextDirection}
              logo={skill.logo}
              title={skill.title}
              light={skill.light}
              noAutoscroll={false}
              rounded={skill.rounded}
              link={skill.link}
            >
              {skill.title}
            </LogoText>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsCarousel;
