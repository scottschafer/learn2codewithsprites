import { Sprite } from "../models/Sprite";
import { Point } from "../models/Point";

/*********************************************
 * Values for the new sprite we will create */
const message = "Hello Rachael";
const x = 0;
const y = 50;
const width = 10;
const height = 10;
const angle = 0;
const opacity = 0.8;
const scaleWidth = 1.5;
const scaleHeight = 2;
const imageUrl = "/assets/heart.png";
const data = {};
/********************************************/

export const createSprites = () => {
  return [
    new Sprite({
      location: new Point(x, y),
      size: new Point(width, height),
      scaling: new Point(scaleWidth, scaleHeight),
      imageUrl: imageUrl,
      angle: angle,
      opacity: opacity,
      message: message,
      data: data
    })
  ];
};
