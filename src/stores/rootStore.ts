import { GameStore } from './gameStore';

export class RootStore {
  readonly gameStore = new GameStore(this);
};