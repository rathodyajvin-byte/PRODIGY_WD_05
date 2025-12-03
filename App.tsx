import React from 'react';
import WeatherApp from './components/WeatherApp';

const App: React.FC = () => {
  return (
    <div className="antialiased selection:bg-white/30 selection:text-white">
      <WeatherApp />
    </div>
  );
};

export default App;
