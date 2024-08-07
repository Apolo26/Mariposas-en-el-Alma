import React from 'react';
import { Html, useProgress } from '@react-three/drei';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: 'white', fontSize: '24px' }}>{progress} % loaded</div>
    </Html>
  );
}

export default Loader;
