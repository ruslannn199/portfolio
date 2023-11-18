import PortfolioCard, { PortfolioCardValues } from '../PortfolioCard';
import Wrapper from '../Wrapper';
import FundleGames from '/images/projects/fundle-games.png';
import RSCSS from '/images/projects/rs-css.png';
import ReactMovie from '/images/projects/react-movie.png';
import CozyHouse from '/images/projects/cozy-house.png';

const Portfolio: React.FC = () => {
  const PortfolioCards: PortfolioCardValues[] = [
    {
      title: 'Fundle-games 🎲',
      img: FundleGames,
      desc: 'With a focus on simplicity and easy design, this store prioritize user experience and performance, making it easy for customers to find and purchase the products they need.',
      techs: ['React', 'Redux', 'Redux Saga', 'Styled-components', 'AntD', 'Typescript', 'React Router'],
      code: 'https://github.com/ruslannn199/fundle-games',
      deploy: 'https://fundle-games.infinityfreeapp.com',
    },
    {
      title: 'CSS Dinner 🍽️',
      img: RSCSS,
      desc: `This is my continuation of the CSS Dinner game, which focuses on extremely complex selectors that can be difficult even for an experienced programmers.`,
      techs: ['Typescript', 'Sass', 'Jest'],
      code: 'https://github.com/ruslannn199/',
      deploy: 'https://rolling-scopes-school.github.io/ruslannn199-JSFE2023Q1/rs-css/',
    },
    {
      title: 'React Movie 🎥',
      img: ReactMovie,
      desc: 'React movie is an app that allows users to search for information about various films in real-time and making their own reviews through API.',
      techs: ['React', 'Typescript', 'Styled-components', 'React Router'],
      code: 'https://github.com/ruslannn199/react-movie',
      deploy: 'https://react-movie-ruslan-kamenskiy.netlify.app/',
      overflow: true,
    },
    {
      title: 'Cozy House 🦴',
      img: CozyHouse,
      desc: `Cozy house is an online website for pets' shelter. It's provides information about pets and various ways to help them.`,
      techs: ['Typescript', 'Sass'],
      code: 'https://github.com/ruslannn199/cozy-house',
      deploy: 'https://ruslannn199.github.io/cozy-house/public/main/',
      overflow: true,
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
