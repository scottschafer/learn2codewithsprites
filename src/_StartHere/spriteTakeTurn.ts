import { Sprite } from "../models/Sprite";

const shouldTakeTurns = true;

let turn = 0;
export const spriteTakeTurn = (sprite: Sprite) => {
  if (shouldTakeTurns) {
    sprite.scaling.x = Math.sin(turn) * 2;
    turn += 0.01;
    sprite.location.x = sprite.location.x + 0.02;
    if (sprite.location.x > 100) {
      sprite.location.x = 0;
    }

    // sprite.location.y = sprite.location.y + 0.1;
    // if (sprite.location.y > 100) {
    //   sprite.location.y = 0;
    // }

    // sprite.angle = sprite.angle + 2;

    // sprite.message = "x = " + Math.floor(sprite.location.x);
  }
};
