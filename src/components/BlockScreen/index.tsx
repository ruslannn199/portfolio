import useWindowDimensions from '../../hooks';

interface BlockScreenProps {
  blocked: boolean;
  unblock: () => void;
}

const BlockScreen: React.FC<BlockScreenProps> = ({ blocked, unblock }) => {
  const { width } = useWindowDimensions();
  return <div className="block-screen" style={
    width < 992 && blocked
      ? { width: '100%', opacity: 1 }
      : { width: 0, opacity: 0 }
  } onClick={unblock} />;
}

export default BlockScreen;
