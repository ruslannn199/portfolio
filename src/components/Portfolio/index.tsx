import PortfolioCard, { PortfolioCardValues } from '../PortfolioCard';
import Wrapper from '../Wrapper';

const Portfolio: React.FC = () => {
  const PortfolioCards: PortfolioCardValues[] = [];
  return (
    <section id="portfolio" className="portfolio section">
      <Wrapper>
        <div className="portfolio__content">
          <p>portfolio</p>
          <h3>Each project is a unique piece of development 🧩</h3>
          {...(PortfolioCards.map((card) => (<PortfolioCard card={card} />)))}
        </div>
      </Wrapper>
    </section>
  );
}

export default Portfolio;
