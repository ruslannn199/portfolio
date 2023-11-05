import { IconBrandGithub, IconBrandTelegram } from '@tabler/icons-react';
import Wrapper from '../Wrapper';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Wrapper>
        <div className="footer__content">
          <h3 className="footer__copyright">
            Copyright © {new Date().getFullYear()}. All rights are reserved
          </h3>
          <div className="footer__socials">
            <a
              aria-label="telegram"
              target="_blank"
              rel="noreferrer"
              href="https://t.me/@ruslannn199"
              className="footer__link"
            >
              <IconBrandTelegram width={30} height={30} />
            </a>
            <a
              aria-label="github"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ruslannn199"
              className="footer__link"
            >
              <IconBrandGithub width={30} height={30} />
            </a>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}

export default Footer;
