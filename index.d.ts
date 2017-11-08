declare namespace centerNamespace {
  export interface Coord {
      x: number;
      y: number;
  }

  /**
   * Return the center for a given SVG polygon points attribute
   * 
   * @param  {string} points - Points attribute of a SVG <polygon> or <polyline>
   * 
   * @returns {Coord} Center of the polygon which is an object
   * that contains x and y property
   */
  export function center(points: string): Coord;
}