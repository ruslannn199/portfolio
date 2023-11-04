import About from '../../components/About';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Header from '../../components/Header';
import Portfolio from '../../components/Portfolio';
import TechStack from '../../components/TechStack';
import Wrapper from '../../components/Wrapper';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <TechStack />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </Wrapper>
  );
}

export default Home;
