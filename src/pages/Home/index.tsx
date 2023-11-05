import About from '../../components/About';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Header from '../../components/Header';
import Portfolio from '../../components/Portfolio';
import TechStack from '../../components/TechStack';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <TechStack />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
