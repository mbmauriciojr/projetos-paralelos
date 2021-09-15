import React, { useState } from 'react';

import wordlist from './resources/words.json';

const MAX_TYPED_KEYS = 30;

const getWord = () => {
  const index = Math.floor(Math.random() * wordlist.length);
  const word = wordlist[index];

  return word.toLowerCase();
};

const App = () => {
  const [ typedKeys, setTypedKeys ] = useState([]);

  const handleKeyDown = (e) => {
    e.preventDefault();

    const { key } = e;

    setTypedKeys((prev) => [...prev, key].slice(MAX_TYPED_KEYS * -1));

    console.log('key', key);
  };

  return(
    <div className="container" tabIndex="0" onKeyDown={ handleKeyDown }>

      <div className="valid-keys">
        <span className="matched">mar</span>
        <span className="remainder">celo</span>
      </div>

      <div className="typed-keys">{ typedKeys ? typedKeys.join(' ') : null }</div>

      <div className="completed-words">

        <ol>
          <li>cidade</li>
          <li>carro</li>
          <li>profissional</li>
        </ol>

      </div>

    </div>
  );
};

export default App;
