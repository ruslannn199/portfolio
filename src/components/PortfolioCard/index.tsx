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
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ card: {
  title, img, desc, techs, code, deploy
}}) => {
  return (
    <div className="portfolio__card">
      <a target="_blank" href={deploy} rel="noreferrer">
        <img src={img} alt={title} />
      </a>
      <article className="portfolio__details">
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="portfolio__stack">
          {...(techs.map((tech) => (<p>{tech}</p>)))}
        </div>
        <div className="portfolio__links">
          <a target="_blank" href={code} rel="noreferrer">
            Code <IconBrandGithub />
          </a>
          <a target="_blank" href={deploy} rel="noreferrer">
            Live Demo <IconExternalLink />
          </a>
        </div>
      </article>
    </div>
  );
}

export default PortfolioCard;
