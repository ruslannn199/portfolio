interface BlockScreenProps {
  blocked: boolean;
  unblock: () => void;
}

const BlockScreen: React.FC<BlockScreenProps> = ({ blocked, unblock }) => {
  return <div className="block-screen" style={
    blocked
      ? { width: '100%', opacity: 1 }
      : { width: 0, opacity: 0 }
  } onClick={unblock} />;
}

export default BlockScreen;
