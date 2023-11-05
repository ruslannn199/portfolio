import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';

export interface PortfolioCardValues {
  title: string;
  img: string;
  desc: string;
  techs: string[];
  code: string;
  deploy: string;
}

interface PortfolioCardProps {
  card: PortfolioCardValues;
  reversed: boolean;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  card: { title, img, desc, techs, code, deploy }, reversed
}) => {
  return (
    <div className={`portfolio__card${reversed ? ' portfolio__card_reversed' : ''}`}>
      <a className="portfolio__card-link" target="_blank" href={deploy} rel="noreferrer">
        <img className="portfolio__card-img" src={img} alt={title} />
      </a>
      <article className="portfolio__details">
        <h3 className="portfolio__details-title">{title}</h3>
        <h4 className="portfolio__details-subtitle">{desc}</h4>
        <div className="portfolio__stack">
          {...(techs.map((tech, key) => (<p key={key} className="portfolio__stack-item">{tech}</p>)))}
        </div>
        <div className="portfolio__links">
          <a className="portfolio__link" target="_blank" href={code} rel="noreferrer">
            Code <IconBrandGithub />
          </a>
          <a className="portfolio__link" target="_blank" href={deploy} rel="noreferrer">
            Live Demo <IconExternalLink />
          </a>
        </div>
      </article>
    </div>
  );
}

export default PortfolioCard;
