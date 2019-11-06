import { observable } from 'mobx';
export class Point {
  @observable x: number;
  y: number;

  constructor(src1: number | Point = 0, src2: any = 0) {
    if (src1 instanceof Point) {
      this.x = src1.x;
      this.y = src1.y;
    } else {
      this.x = src1;
      this.y = src2;
    }
  }

  clear() {
    this.x = 0.0;
    this.y = 0.0;
  }

  setXY(x: number, y: number) {
    this.x = x;
    this.y = y;
  }


  ////////////////////////////////////////
  // methods that return a new vector
  getDifference(v: Point) {
    return new Point(this.x - v.x, this.y - v.y);
  }

  getSum(v: Point): Point {
    return new Point(this.x + v.x, this.y + v.y);
  }

  getPerpendicular() {
    return new Point(this.y, -this.x);
  }

  getRotated(x: number, y: number) {
    // if (y === undefined) {
    //   // x is a Point
    //   y = x.y;
    //   x = x.x;
    // }
    return new Point(x * this.x - y * this.y, y * this.x + x * this.y);
  }

  getScaled(scale: number) {
    return new Point(this.x * scale, this.y * scale);
  }
  ///////////////////////////////////////////



  // informational methods
  getAngleBetween(v: Point): number {
    let dot = this.dot(v);
    let det = this.cross(v);
    return Math.atan2(det, dot); //# atan2(y, x) or atan2(sin, cos)
  }

  getMagnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }


  getMagnitudeSquared() {
    return this.x * this.x + this.y * this.y;
  }


  dot(v: Point) {
    return this.x * v.x + this.y * v.y;
  }

  cross(v: Point) {
    return this.x * v.y - this.y * v.x;
  }

  getDistanceTo(position: Point) {
    return Math.sqrt(this.getDistanceSquaredTo(position));
  }

  getDistanceSquaredTo(position: Point) {
    let xd = this.x - position.x;
    let yd = this.y - position.y;
    return xd * xd + yd * yd;
  }

  getNormalized(): Point {
    const m = this.getMagnitude();
    return new Point(this.x / m, this.y / m);
  }
  ///////
  // methods that modify the vector

  scaleAngle(factor: number) {

    //  	if (this.x * this.x > .9999 && this.y * this.y < .0001) {
    //  		this.x = 1.0;
    //  		this.y = 0;
    //  		return;
    //  	}
    var angle = Math.atan2(this.y, this.x) * factor;
    this.x = Math.cos(angle);
    this.y = Math.sin(angle);
  }

  setToPerpendicular() {
    var y = -this.x;
    this.x = this.y;
    this.y = y;
  }

  normalize() {

    let m = this.getMagnitude();
    this.x /= m;
    this.y /= m;
    return;

    // https://www.h3xed.com/programming/fast-unit-vector-calculation-for-2d-games    

    // Get absolute value of each vector
    // let ax = Math.abs(this.x);
    // let ay = Math.abs(this.y);

    // // Create a ratio
    // let ratio = 1.00975 / max(ax, ay);
    // ratio = ratio * (1.29289 - (ax + ay) * ratio * 0.29289);

    // // Multiply by ratio
    // this.x *= ratio
    // this.y *= ratio
  }

  rotateByXY(x: number, y: number) {
    var rotX = x * this.x - y * this.y;
    var rotY = y * this.x + x * this.y;
    this.x = rotX;
    this.y = rotY;
  }

  rotateBy(v: Point) {
    this.rotateByXY(v.x, v.y);
  }

  addXY(x: number, y: number) {
    this.x += x;
    this.y += y;
  }

  setToDifference(v1: Point, v2: Point) {
    this.x = v1.x - v2.x;
    this.y = v1.y - v2.y;
  }

  add(v: Point) {
    this.x += v.x;
    this.y += v.y;
  }

  subtract(v: Point) {
    this.x -= v.x;
    this.y -= v.y;
  }


  scale(s: number) {
    this.x *= s;
    this.y *= s;
  }

  addScaled(vectorToAdd: Point, scale: number) {
    this.x += vectorToAdd.x * scale;
    this.y += vectorToAdd.y * scale;
  }
}
