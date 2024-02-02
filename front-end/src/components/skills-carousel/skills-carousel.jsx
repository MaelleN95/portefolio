import useEmblaCarousel from 'embla-carousel-react';
import LogoText from '../../components/LogoText/LogoText';
import html from '../../assets/icons/skills/html-icon.svg';
import Autoscroll from 'embla-carousel-auto-scroll';

export function SkillsCarousel(props) {
  const { slides, options, direction } = props;
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
      <div className="embla__container">
        {slides.map((index) => (
          <div className="embla__slide" key={index}>
            <LogoText direction="horizontal" logo={html} title="Node.js">
              HTML n°{index + 1}
            </LogoText>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsCarousel;
