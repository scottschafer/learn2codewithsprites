
import * as React from 'react';
import { RootStore } from '../../stores/rootStore';
import { observer } from 'mobx-react-lite';
import { GameContainer } from './GameContainer';


export const HomeContainer = observer(({ rootStore }: { rootStore: RootStore }) => {

  React.useEffect(() => {
    // console.log('HomeContainer was re-rendered');
  });

  return (
    <>
      <GameContainer rootStore={rootStore}></GameContainer>
    </>
  );
})
