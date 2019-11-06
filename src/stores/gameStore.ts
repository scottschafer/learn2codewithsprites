import { observable, action } from 'mobx';
import { RootStore } from './rootStore';
import { Sprite } from '../models/Sprite';
import { createSprites } from '../_StartHere/createSprites';

export class GameStore {
  readonly sprites = observable<Sprite>([]);

  constructor(public readonly rootStore: RootStore) {
    let newSprites = createSprites();
    this.setSprites(newSprites);
  }

  @action.bound setSprites(value: Array<Sprite>) {
    this.sprites.replace(value);
  }
}

// export const todoStore = new TodoStore();