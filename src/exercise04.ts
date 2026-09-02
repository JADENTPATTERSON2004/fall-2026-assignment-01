export type Circle = {
  kind: "circle";
  radius: number;
};

export type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

export type Square = {
  kind: "square";
  sideLength: number;
};

export type Shape = Circle | Rectangle | Square;

export function calculateArea(shape: Shape): number {
  if (shape.kind == "circle") {
    return Math.PI * shape.radius ** 2;
  } else if (shape.kind == "rectangle") {
    return shape.width * shape.height;
  } else {
    return shape.sideLength ** 2;
  }
}
