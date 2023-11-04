import { IconMail, IconMapSearch, IconPhone } from '@tabler/icons-react';
import Wrapper from '../Wrapper';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact section">
      <Wrapper>
        <div className="contact__content">
          <div className="contact__title">
            <p>contact</p>
            <h3>Don't be shy! Hit me up! 👇</h3>
          </div>
          <div className="contact__box">
            <IconMapSearch className="contact__icon" />
            <div className="contact__info">
              <h3>Location</h3>
              <p>Saint Petersburg, Russia</p>
            </div>
          </div>
          <div className="contact__box">
            <IconMail className="contact__icon" />
            <div className="contact__info">
              <h3>Mail</h3>
              <a href="mailto:ruslannn199@gmail.com">ruslannn199@gmail.com</a>
            </div>
          </div>
          <div className="contact__box">
            <IconPhone className="contact__icon" />
            <div className="contact__info">
              <h3>Phone</h3>
              <a href="tel:+79627536191">+7 (962)-753-61-91</a>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Contact;
