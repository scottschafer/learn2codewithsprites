import { Point } from "./Point";
import { observable } from 'mobx';

let nextSpriteId = 0;

interface SpriteProperties {
  location: Point;
  size: Point;
  scaling: Point;
  imageUrl: string;
  angle: number;
  opacity: number;
  message: string | number;
  data: Object;
}

export class Sprite implements SpriteProperties {
  readonly id: number;
  @observable location: Point = new Point(50, 50);
  @observable size: Point = new Point(10, 10);
  @observable scaling: Point = new Point(1, 1);
  @observable imageUrl: string = '/assets/heart.png';
  @observable angle: number = 0;
  @observable opacity: number = 1;
  @observable message: string | number = '';
  @observable data: Object = {};

  constructor(props?: SpriteProperties) {
    this.id = ++nextSpriteId;
    if (props) {
      this.location.x = props.location.x;
      this.location.y = props.location.y;
      this.size.x = props.size.x;
      this.size.y = props.size.y;
      this.scaling.x = props.scaling.x;
      this.scaling.y = props.scaling.y;
      this.imageUrl = props.imageUrl;
      this.angle = props.angle;
      this.opacity = props.opacity;
      this.message = props.message;
      this.data = props.data;
    }
  }
}
