import Wrapper from '../Wrapper';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Wrapper>
        <h3>
          Copyright © {new Date().getFullYear()}. All rights are reserved
        </h3>
        <div className="footer__socials">
          <a
            aria-label='telegram'
          ></a>
        </div>
      </Wrapper>
    </footer>
  );
}

export default Footer;
