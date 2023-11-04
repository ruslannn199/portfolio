interface WrapperProps {
  className?: string;
}

const Wrapper: React.FC<WrapperProps & React.PropsWithChildren> = ({ children, className }) => (
  <div className={`wrapper${className ? ' ' + className : ''}`}>{children}</div>
);


export default Wrapper;
