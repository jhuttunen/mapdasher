import './assetts/App.css';
import React from 'react';
import ErrorBoundary from './components/ErrorHandling/ErrorBoundary';
import { Game } from './components/Game';

function App() {
  return (
    <ErrorBoundary>
      <Game />
    </ErrorBoundary>
  );
}

export default App;
