import PortfolioCard, { PortfolioCardValues } from '../PortfolioCard';
import Wrapper from '../Wrapper';
import BlankImg from '../../../public/images/projects/blank.png';
import RSCSS from '../../../public/images/projects/rs-css.png';
import ReactMovie from '../../../public/images/projects/react-movie.png';
import CozyHouse from '../../../public/images/projects/cozy-house.png';

const Portfolio: React.FC = () => {
  const PortfolioCards: PortfolioCardValues[] = [
    {
      title: 'Fundle-games 🎲',
      img: BlankImg,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ipsa! Voluptate laborum ut adipisci placeat, ex reprehenderit non, odit unde nihil dolorem earum, nobis doloribus vitae dolorum aperiam explicabo quas!',
      techs: ['React', 'Redux', 'Redux Saga', 'Styled-components', 'AntD', 'Typescript', 'React Router'],
      code: 'https://github.com/ruslannn199/fundle-games',
      deploy: 'https://fundle-games.infinityfreeapp.com',
    },
    {
      title: 'CSS Dinner 🍽️',
      img: RSCSS,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ipsa! Voluptate laborum ut adipisci placeat, ex reprehenderit non, odit unde nihil dolorem earum, nobis doloribus vitae dolorum aperiam explicabo quas!',
      techs: ['Typescript', 'Sass', 'Jest'],
      code: 'https://github.com/ruslannn199/',
      deploy: 'https://rolling-scopes-school.github.io/ruslannn199-JSFE2023Q1/rs-css/',
    },
    {
      title: 'React Movie 🎥',
      img: ReactMovie,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ipsa! Voluptate laborum ut adipisci placeat, ex reprehenderit non, odit unde nihil dolorem earum, nobis doloribus vitae dolorum aperiam explicabo quas!',
      techs: ['React', 'Typescript', 'Styled-components', 'React Router'],
      code: 'https://github.com/ruslannn199/react-movie',
      deploy: 'https://react-movie-ruslan-kamenskiy.netlify.app/',
    },
    {
      title: 'Cozy House 🦴',
      img: CozyHouse,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ipsa! Voluptate laborum ut adipisci placeat, ex reprehenderit non, odit unde nihil dolorem earum, nobis doloribus vitae dolorum aperiam explicabo quas!',
      techs: ['Typescript', 'Sass'],
      code: 'https://github.com/ruslannn199/cozy-house',
      deploy: 'https://ruslannn199.github.io/cozy-house/public/main/',
    },
  ];

  return (
    <main id="portfolio" className="portfolio">
      <Wrapper>
        <div className="portfolio__content">
          <h2 className="portfolio__title">portfolio</h2>
          <h3 className="portfolio__subtitle">Each project is a unique piece of development 🧩</h3>
          <section className="portfolio__cards">
            {...(PortfolioCards.map((card, i) => (<PortfolioCard key={i} card={card} reversed={(i % 2 !== 0)} />)))}
          </section>
        </div>
      </Wrapper>
    </main>
  );
}

export default Portfolio;
