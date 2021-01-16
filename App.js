import React from 'react';
import MainProvider from './src/context/MainProvider';
import Route from './src/Route';

function App() {

  return (
    <MainProvider>
      <Route />
    </MainProvider>
  );
};

export default App;
