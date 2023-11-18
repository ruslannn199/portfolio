import WorkingEmoji from '/images/working.png';
import AboutImg from '/images/about.webp';
import RoundedText from '/images/profession-text.svg';
import Wrapper from '../Wrapper';

const About: React.FC = () => {
  return (
    <section className="about">
      <Wrapper>
        <div className="about__content">
          <div className="about__images">
            <img src={WorkingEmoji} alt="working" className="about__working-emoji" />
            <img width={100} src={AboutImg} alt="workplace" className="about__workplace" />
            <span>
              <img className="about__profession" width={100} src={RoundedText} alt="frontend web-developer" />
            </span>
          </div>
          <article className="about__article">
            <h3 id="about" className="about__title">About me</h3>
            <h4 className="about__subtitle">
              A dedicated Front-end Developer <br /> based in Saint&nbsp;Petersburg,&nbsp;Russia&nbsp;📍
            </h4>
            <p className="about__text">
              As a Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, SCSS, JavaScript, Typescript, Vite, React, AntD, Redux and Redux Saga.
              I excel in designing and maintaining responsive websites that
              offer a smooth user experience. My expertise lies in crafting
              dynamic, engaging interfaces through writing clean and optimized
              code and utilizing cutting-edge development tools and techniques.
              My ability to adapt to different brand voices and styles
              allows me to deliver impactful messaging across various platforms.
              My proactive approach and communication skills
              ensure seamless collaboration and efficient project execution.
            </p>
          </article>
        </div>
      </Wrapper>
    </section>
  );
}

export default About;
