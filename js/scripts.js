function drawTree(heightTree) {
    for(var i = 0; i <= heightTree; i++) {
        var star = ' ';
            for(var j = 0; j <= i; j++) {
            star += "*";
            }
            console.log(star);
            }
    }
    drawTree(6);