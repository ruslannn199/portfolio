import { IconBrandGithub, IconBrandTelegram } from '@tabler/icons-react';
import WavingHand from '../../../public/images/avatar/waving.png';
import Wrapper from '../Wrapper';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <Wrapper>
        <div className="hero__content">
          <div className="hero__main">
            <div className="hero__text">
              <h1 className="hero__title">
                Front-End&nbsp;React Developer <img className="hero__hand" src={WavingHand} alt="waving" />
              </h1>
              <h2 className="hero__subtitle">
                Hi, I'm Ruslan Kamenskiy. A passionate Front-end React Developer from Saint Petersburg, Russia.
              </h2>
              <div className="hero__links">
                <a
                  href="https://github.com/ruslannn199"
                  target="_blank"
                  rel="noreferrer"
                  className="hero__link"
                >
                  <IconBrandGithub width={36} height={36} />
                </a>
                <a
                  href="https://t.me/@ruslannn199"
                  target="_blank"
                  rel="noreferrer"
                  className="hero__link"
                >
                  <IconBrandTelegram width={36} height={36} />
                </a>
              </div>
            </div>
            <div className="hero__img" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Hero;
