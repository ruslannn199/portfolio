import Wrapper from '../Wrapper';

interface skillProps {
  id: string;
  src: string;
  alt: string;
}

const TechStack: React.FC = () => {
  const skills: skillProps[] = [
    {
      id: 'layout', src: 'https://skillicons.dev/icons?i=html,css', alt: 'layout skills'
    },
    {
      id: 'css', src: 'https://skillicons.dev/icons?i=sass,styledcomponents', alt: 'css skills'
    },
    {
      id: 'scripts', src: 'https://skillicons.dev/icons?i=js,ts', alt: 'scripting skills'
    },
    {
      id: 'environment', src: 'https://skillicons.dev/icons?i=git,vite', alt: 'environment skills'
    },
    {
      id: 'framework', src: 'https://skillicons.dev/icons?i=react,redux', alt: 'framework skills'
    }
  ];
  return (
    <div className="tech-stack">
      <Wrapper>
        <h2 className="tech-stack__title">Tech Stack</h2>
        {/* TODO transfer tech-stack__divider to tech-stack__title"::after */}
        <div className="tech-stack__divider"></div>
        <ul className="tech-stack__logos">
          {...(skills.map(({ id, src, alt }) => (
            <li key={id}>
              <img className="tech-stack__icon" src={src} alt={alt} />
            </li>
          )))}
        </ul>
      </Wrapper>
    </div>
  );
}

export default TechStack;
