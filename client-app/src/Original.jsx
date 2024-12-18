import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { useState } from 'react';
import './Original.css';

export const Logos = () => {
      return ( <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>);
  }

  export const Card = () => {
    
    const [count, setCount] = useState(0);
    return (
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
            </button>
            <p>
            Edit <code>src/App.jsx</code> and save to test HMR
            </p>
      </div>);
  }

 export const Subtitle = () => {
        <p className="read-the-docs">
            Click on the Vite and React logos to learn more
        </p>
  }

