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
`;

/* 
* PACMAN MAP
* . -> PATH
* W -> WALL
* O -> GHOSTS SPAWN
 */

class Map {
    constructor(ctx) {
        this.canvasWidth = ctx.canvas.width;
        this.canvasHeight = ctx.canvas.height;
        /* Fill the code */
    }

    keyboard_event() { }
    update() { }
    draw(ctx) {
        /* Fill the code */
        let mapArray = pacmanMap.split('')
        mapArray.forEach((element, index) => {
            // pacman path
            if (element === ".") {
                // console.log(element)
                ctx.fillStyle = "#ff2626";
                ctx.beginPath();
                ctx.arc(index * 10, index * 10, 1, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.fill();
            }
            // map walls
            if (element === "W") {
                // console.log(element)
                ctx.moveTo(index*10, index*10);
                ctx.fillStyle = 'grey';
                ctx.beginPath();
                ctx.fillRect(index*10, index*10, 10, 10);
                ctx.closePath();
            }
            // ghosts spawn point
            if (element === "o") {
                // console.log(element)
                ctx.moveTo(index*10, index*10);
                ctx.fillStyle = 'white';
                ctx.beginPath();
                ctx.fillRect(index*10, index*10, 10, 10);
                ctx.closePath();
            }
        });
    }
}
