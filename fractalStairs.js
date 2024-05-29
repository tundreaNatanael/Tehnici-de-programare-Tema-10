let width = 100;
let heigth = 100
const shrinkingSequence = 1;
const rotation = Math.PI/20;
//function
function drawStairs(){
    translate(200,200)
    for (i=0; i<=100; i++){
        fill(0, 0, 0, 0);
        rotate(rotation)
        rect(0,0,width,heigth);
        width = width - shrinkingSequence;
        heigth = heigth - shrinkingSequence;
    }
}