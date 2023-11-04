import { IconBrandGithub, IconBrandTelegram } from '@tabler/icons-react';
import WavingHand from '../../../public/images/avatar/waving.png';
import Wrapper from '../Wrapper';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <Wrapper>
        <div className="hero__content">
          <h2 className="hero__title">
            Front-End&nbsp;React Developer<img className="hero__hand" src={WavingHand} alt="waving" />
          </h2>
          <p className="hero__text">
            Hi, I'm Ruslan Kamenskiy. A passionate Front-end React Developer from Saint Petersburg, Russia.
          </p>
          <div className="hero__links">
            <a
              href="https://github.com/ruslannn199"
              target="_blank"
              rel="noreferrer"
              className="hero__link"
            >
              <IconBrandGithub />
            </a>
            <a
              href="https://t.me/@ruslannn199"
              target="_blank"
              rel="noreferrer"
              className="hero__link"
            >
              <IconBrandTelegram />
            </a>
          </div>
        </div>
        <div className="hero__img" />
      </Wrapper>
    </section>
  );
}

export default Hero;
