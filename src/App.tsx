import React from 'react'
import { HashRouter } from 'react-router-dom'
import {AppContainer} from 'react-hot-loader'

import { RootStore } from './stores/rootStore';
import { HomeContainer } from './routes/Home/HomeContainer';

export const App = () => {
  const rootStore = new RootStore();
  return (
    <AppContainer>
    <HashRouter>
      <div className="App">

        <HomeContainer rootStore={rootStore}></HomeContainer>
      </div>
    </HashRouter>
    </AppContainer>
  )
};


export default App;
