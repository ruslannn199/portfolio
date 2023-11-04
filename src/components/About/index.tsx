import WorkingEmoji from '../../../public/images/working.png';
import AboutImg from '../../../public/images/about.webp';
import RoundedText from '../../../public/images/profession-text.svg';
import Wrapper from '../Wrapper';

const About: React.FC = () => {
  return (
    <section id="about" className="about section">
      <Wrapper>
        <div className="about__content">
          <div className="about__images">
            <img src={WorkingEmoji} alt="working" className="about__working-emoji" />
            <img width={100} src={AboutImg} alt="workplace" className="about__workplace" />
            <span>
              <img width={100} src={RoundedText} alt="frontend web-developer" />
            </span>
          </div>
          <article className="about__article">
            <h3>About me</h3>
            <h4>
              A dedicated Front-end Developer <br /> based in Saint Petersburg, Russia 📍
            </h4>
            <p>
              As a Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, SCSS, JavaScript, Typescript, Vite, React, AntD, Redux and Redux Saga.
              I excel in designing and maintaining responsive websites that
              offer a smooth user experience. My expertise lies in crafting
              dynamic, engaging interfaces through writing clean and optimized
              code and utilizing cutting-edge development tools and
              techniques. I am also a team player who thrives in collaborating
              with cross-functional teams to produce outstanding web
              applications.
            </p>
          </article>
        </div>
      </Wrapper>
    </section>
  );
}

export default About;