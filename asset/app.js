
// selectors:
const boxes = document.querySelectorAll('.wrapper div');

const a1 = document.querySelector('.a1');
const a2 = document.querySelector('.a2');
const a3 = document.querySelector('.a3');
const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');
const c1 = document.querySelector('.c1');
const c2 = document.querySelector('.c2');
const c3 = document.querySelector('.c3');

const players = document.querySelector('.players');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');

const modal = document.querySelector('.modal');
const result = modal.querySelector('h1');

let boxarray = []

// events:
for (let i = 0; i < boxes.length; i++) {


    var turn = 1;
    player1.style.border = "5px solid #960000";
    boxes[i].addEventListener('click', function showico() {
        if (boxes[i].innerHTML == "") {
            if (turn % 2 != 0) {
                setTimeout(function player_2() {
                    player2.style.border = "5px solid #960000";
                    player1.style.border = "5px solid #fff9bf";
                }, 10)
                boxes[i].innerHTML = "x";
                turn++;
                winner();
                boxarray.push(boxes[i]);
                
                
            } else{
                setTimeout(function player_1() {
                    player1.style.border = "5px solid #960000";
                    player2.style.border = "5px solid #fff9bf";
                }, 10)
                boxes[i].innerHTML = "o";
                turn++;
                winner();
                boxarray.push(boxes[i]);
            }
            
        }
       
    })
}
console.log(boxarray)

// restart func:
function restart() {
    for (let j = 0; j < boxes.length; j++) {
        boxes[j].innerHTML = "";
    }
    turn = 1;
    modal.style.display = "none";
    player1.style.border = "5px solid #960000";
    player2.style.border = "5px solid #fff9bf";
}


// winner func:
function winner() {
    if (turn > 4) {
        if (a1.innerHTML == a2.innerHTML && a2.innerHTML == a3.innerHTML && a1.innerHTML != "") {
            modal.style.display = "block";
            result.innerHTML = a1.innerHTML + " won!";
        }
        else if (b1.innerHTML == b2.innerHTML && b2.innerHTML == b3.innerHTML && b1.innerHTML != "") {
            modal.style.display = "block";
            result.innerHTML = b1.innerHTML + " won!";
        }
        else if (c1.innerHTML == c2.innerHTML && c2.innerHTML == c3.innerHTML && c1.innerHTML != "") {
            modal.style.display = "block";
            result.innerHTML = c1.innerHTML + " won!";
        }
        else if (a1.innerHTML == b1.innerHTML && b1.innerHTML == c1.innerHTML && a1.innerHTML != "") {
            modal.style.display = "block";
            result.innerHTML = a1.innerHTML + " won!";
        }
        else if (a2.innerHTML == b2.innerHTML && b2.innerHTML == c2.innerHTML && a2.innerHTML != "") {
            modal.style.display = "block";
            result.innerHTML = a2.innerHTML + " won!";
        }
        else if (a3.innerHTML == b3.innerHTML && b3.innerHTML == c3.innerHTML && a3.innerHTML != "") {
            modal.style.display = "block";
            result.innerHTML = a3.innerHTML + " won!";
        }
        else if (a1.innerHTML == b2.innerHTML && b2.innerHTML == c3.innerHTML && a1.innerHTML != "") {
            modal.style.display = "block";
            result.innerHTML = a1.innerHTML + " won!";
        }
        else if (a3.innerHTML == b2.innerHTML && b2.innerHTML == c1.innerHTML && a3.innerHTML != "") {
            modal.style.display = "block";
            result.innerHTML = a3.innerHTML + " won!";
        }else if(turn >9){
            modal.style.display = "block";
                result.innerHTML = "No one won!";
        }
    }
    
}