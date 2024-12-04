/**
 * @type {string[]}
 */
var horizontal = $0.innerText.split`\n`.slice(0, -1);

var width = horizontal[0].length;
var height = horizontal.length;

var aWidth  = [...Array(width)];
var aHeight = [...Array(height)];
var aTotal  = [...Array(width * height)];

var vertical = aWidth.map((_, x) => aHeight.map((_, y) => horizontal[y][x]).join``);

var northCoords = aWidth.map((_, i) => [i, 0]);
var eastCoords = aHeight.map((_, i) => [width - 1, i]);
var westCoords = aHeight.map((_, i) => [0, i]);

/**
 * @type {[x: number, y: number][]}
 */
var northWestCoords = [...northCoords, ...westCoords.slice(1)];

var northEastCoords = [...northCoords, ...eastCoords.slice(1)];

var northWest = northWestCoords.map(([x, y]) => {
   var out = "";
   while (true) {
      if (x >= width) break;
      if (y >= height) break;
      out += horizontal[y][x];
      x++;
      y++;
   }
   return out;
});

var northEast = northEastCoords.map(([x, y]) => {
   var out = "";
   while (true) {
      if (x < 0) break;
      if (y >= height) break;
      out += horizontal[y][x];
      x--;
      y++;
   }
   return out;
});

var xmas = /XMA(?=S)|SAM(?=X)/g;

/**
 * @param {string} s
 */
var match = s => [...s.matchAll(xmas)].length;
var replace = x => x.replaceAll(xmas, "!!!!");
var count = ary => ary.map(match).reduce((a, v) => a + v, 0);

var everything = [...horizontal, ...vertical, ...northWest, ...northEast];

console.log(count(everything));
