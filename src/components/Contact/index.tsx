import { IconMail, IconMapSearch, IconPhone } from '@tabler/icons-react';
import Wrapper from '../Wrapper';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <Wrapper>
        <div className="contact__content">
          <article className="contact__article">
            <h3 className="contact__article-title">contact</h3>
            <h4 className="contact__article-subtitle">Don't&nbsp;be&nbsp;shy! Hit&nbsp;me&nbsp;up!&nbsp;👇</h4>
          </article>
          <div className="contact__info">
            <div className="contact__box">
              <IconMapSearch className="contact__icon" />
              <div className="contact__details">
                <h3 className="contact__details-title">Location</h3>
                <p className="contact__details-subtitle">Saint Petersburg, Russia</p>
              </div>
            </div>
            <div className="contact__box">
              <IconMail className="contact__icon" />
              <div className="contact__details">
                <h3 className="contact__details-title">Mail</h3>
                <a className="contact__details-subtitle" href="mailto:ruslannn199@gmail.com">ruslannn199@gmail.com</a>
              </div>
            </div>
            <div className="contact__box">
              <IconPhone className="contact__icon" />
              <div className="contact__details">
                <h3 className="contact__details-title">Phone</h3>
                <a className="contact__details-subtitle" href="tel:+79627536191">+7 (962)-753-61-91</a>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Contact;
