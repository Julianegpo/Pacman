let pacmanMap = `
WWWWWWWWWWWWWWWWWWWWWWWWWWWW
W............WW............W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W*WWWW.WWWWW.WW.WWWWW.WWWW*W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W..........................W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W.WWWW.WW.WWWWWWWW.WW.WWWW.W
W......WW....WW....WW......W
WWWWWW.WWWWW.WW.WWWWW.WWWWWW
WWWWWW.WWWWW.WW.WWWWW.WWWWWW
WWWWWW.WW..........WW.WWWWWW
WWWWWW.WW.WWW--WWW.WW.WWWWWW
WWWWWW.WW.WooooooW.WW.WWWWWW
..........WooooooW..........
WWWWWW.WW.WooooooW.WW.WWWWWW
WWWWWW.WW.WWWWWWWW.WW.WWWWWW
WWWWWW.WW..........WW.WWWWWW
WWWWWW.WW.WWWWWWWW.WW.WWWWWW
WWWWWW.WW.WWWWWWWW.WW.WWWWWW
W............WW............W
W.WWWW.WWWWW.WW.WWWWW.WWWW.W
W*WWWW.WWWWW.WW.WWWWW.WWWW*W
W...WW................WW...W
WWW.WW.WW.WWWWWWWW.WW.WW.WWW
WWW.WW.WW.WWWWWWWW.WW.WW.WWW
W......WW....WW....WW......W
W.WWWWWWWWWW.WW.WWWWWWWWWW.W
W.WWWWWWWWWW.WW.WWWWWWWWWW.W
W..........................W
WWWWWWWWWWWWWWWWWWWWWWWWWWWW
`
    .split('\n')
    .map((f) => f.split(''));

/* 
* PACMAN MAP
* . -> PATH
* W -> WALL
* O -> GHOSTS SPAWN
 */

class Map {
    constructor(ctx) {}
    keyboard_event() { }
    update() { }
    draw(ctx) {
        /* Fill the code */
        const totalRatio = 1024 / pacmanMap.length;
        //ctx.save();
        for (let y = 0; y < pacmanMap.length; y++) {
          // en el caso de querer ajustar la linea horizontal al canvas
          //let horizontalSize = 1024 / pacmanMap[y].length;
    
          for (let x = 0; x < pacmanMap[y].length; x++) {
            ctx.beginPath();
            const mapCharacter = pacmanMap[y][x];
              if (mapCharacter == 'W') {
                ctx.fillStyle = 'grey';
              ctx.rect(
                x * totalRatio, // x * horizontalSize
                y * totalRatio,
                totalRatio,
                totalRatio
              );
            }
              if (mapCharacter == '.') {
                ctx.fillStyle = "#ff2626";
              ctx.arc(
                x * totalRatio + totalRatio / 2, // x * horizontalSize + horizontalSize / 2
                y * totalRatio + totalRatio / 2,
                7,
                0,
                2 * Math.PI
              );
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
          }
        }
      }
}
