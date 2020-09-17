import React from 'react';
import pushImage from './public/images/push.png';
import pullImage from './public/images/pull.png';

import { RandomImageBlock } from './components/blocks/RandomImage';

function App() {
  return (
    <div className="App">
      <RandomImageBlock
        images={[
          {
            src: pushImage,
            alt: 'push example',
          },
          {
            src: pullImage,
            alt: 'pull example',
          }
        ]}
      />
    </div>
  );
}

export default App;
