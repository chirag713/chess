
import { globalstate } from "../index.js";

let highlight_state = null;

let movestate = null;




function blackrook({piece}){



    if (piece == highlight_state) {
        cleardot();
        clearboard(piece);
        removered();
        highlight_state = null;
        return;
    }

    cleardot();


    movestate = piece;
    highlight_state=piece;


    highlight(piece);

    const hightlight_squareid = [];
    const current_pos = piece.current_position;
    for(var i=current_pos[1]+1;i<=8;i++){
        const x=`${current_pos[0]+i}`;
        hightlight_squareid.push(x);
    }
    for(var i=current_pos[1]-1;i>0;i--){
        const x=`${current_pos[0]+i}`;
        hightlight_squareid.push(x);
    }

    const currectone=current_pos[0].charCodeAt(0);


    for(var i=currectone+1;i<=104;i++){
        var x=`${String.fromCharCode(i)}${current_pos[1]}`;
        hightlight_squareid.push(x);
    }
    for(var i=currectone-1;i>=97;i--){
        var x=`${String.fromCharCode(i)}${current_pos[1]}`;
        hightlight_squareid.push(x);
    }


    dots(hightlight_squareid);

    
    hightlight_squareid.forEach(highlight => {
        globalstate.forEach(row => {
            row.forEach(element => {
                if (element.id == highlight) {
                    element.highlight = true;
                }
            });
        });
    });
    
  
    

}

function whiterook({piece}){



    if (piece == highlight_state) {
        cleardot();
        clearboard(piece);
        removered();
        highlight_state = null;
        return;
    }

    cleardot();

    highlight(piece);
    movestate = piece;
    highlight_state=piece;


   


    const hightlight_squareid = [];
    const current_pos = piece.current_position;
    console.log(current_pos[1]);

    for(var i=current_pos[1]+1;i<=8;i++){
        console.log(i);
    }

    for(var i=current_pos[1]-1;i>0;i--){
        // const x=`${current_pos[0]}${i}`;
        // hightlight_squareid.push(x);
        console.log(i);
    }


    const currectone=current_pos[0].charCodeAt(0);
    for(var i=currectone+1;i<=104;i++){
        var x=`${String.fromCharCode(i)}${current_pos[1]}`;
        hightlight_squareid.push(x);
    }

    for(var i=currectone-1;i>=97;i--){
        var x=`${String.fromCharCode(i)}${current_pos[1]}`;
        hightlight_squareid.push(x);
    }


    dots(hightlight_squareid);

    
    hightlight_squareid.forEach(highlight => {
        globalstate.forEach(row => {
            row.forEach(element => {
                if (element.id == highlight) {
                    element.highlight = true;
                }
            });
        });
    });
}
















function clearboard(piece) {
    const flatarr = globalstate.flat();
    flatarr.forEach(element => {
        const xyz = document.getElementById(element.id);

        if (xyz.classList.contains("highlightYellow")) {
            xyz.classList.remove("highlightYellow");
        }

    });
}

function removered() {
    const flatarr = globalstate.flat();
    flatarr.forEach(element => {
        const xyz = document.getElementById(element.id);

        if (xyz.classList.contains("capturecolor")) {
            xyz.classList.remove("capturecolor");
        }

    });
}


function checkpiece(id, color) {
    const flatarr = globalstate.flat();
    const opponentcolor = color === "White" ? "Black" : "White";
    for (let index = 0; index < flatarr.length; index++) {
        const element = flatarr[index];
        if (element.id === id) {
            if (element.piece && element.piece.piece_name.includes(opponentcolor)) {
                const el = document.getElementById(id);
                el.classList.add("capturecolor");
                element.capturehighlight = true;
                return true;
            }
            break;
        }
    }
    return false;
}


function cleardot() {
    const flatarr = globalstate.flat();
    flatarr.forEach(element => {
        if (element.highlight) {
            element.highlight = null;
            document.getElementById(element.id).innerHTML = "";
        }
    });
}


function attackpawn(piece,id){

}


function movepawn(piece, id) {
    const flatdata = globalstate.flat();
    flatdata.forEach(el => {
        if (el.id === piece.current_position) {
            delete el.piece;
        }
        if (el.id === id) {
            el.piece = piece;
        }
    });
    cleardot();
    const previouspiece = document.getElementById(piece.current_position);
    const currentpiece = document.getElementById(id);
    currentpiece.innerHTML = previouspiece.innerHTML;
    previouspiece.innerHTML = "";
    previouspiece.classList.remove("highlightYellow");
    piece.current_position = id;
    movestate = null;
    highlight_state = null;
}


function dots(arr) {
    cleardot();
    arr.forEach(element => {
        const highlightSpan = document.createElement("span");
        highlightSpan.classList.add("highlight");
        document.getElementById(element).appendChild(highlightSpan);
    });
}

function highlight(piece) {

    if (highlight_state) {
        clearboard(highlight_state);
    }

    const id = piece.current_position;

    const flatarr = globalstate.flat();
    flatarr.forEach(element => {

        if (element.id === id) {
            document.getElementById(id).classList.add("highlightYellow");
            highlight_state = piece;
        }
    });
}

function whitepawnclick({ piece }) {
    const isred = document.getElementById(piece.current_position);

    if (isred.classList.contains("capturecolor")) {

       
        removered();
        attackpawn(movestate,piece.current_position);
        
        cleardot();
        if (highlight_state) {
            clearboard(highlight_state);
        }
        return;
    }
    removered();
    
    const current_pos = piece.current_position;
    const col1 = `${String.fromCharCode(current_pos[0].charCodeAt(0) - 1)}${Number(current_pos[1]) + 1}`;
    const col2 = `${String.fromCharCode(current_pos[0].charCodeAt(0) + 1)}${Number(current_pos[1]) + 1}`;
    const captureids = [col1, col2];
    let highlight_captureid = [];
    captureids.forEach(element => {
        if (checkpiece(element, "White")) {
            highlight_captureid.push(element);
        }
    });

    if (piece == highlight_state) {
        cleardot();
        clearboard(piece);
        removered();
        highlight_state = null;
        return;
    }

    highlight(piece);

    if (current_pos[1] == 2) {
        const hightlight_squareid = [
            `${current_pos[0]}${Number(current_pos[1]) + 1}`,
            `${current_pos[0]}${Number(current_pos[1]) + 2}`,
        ];
        dots(hightlight_squareid);
        movestate = piece;
        hightlight_squareid.forEach(highlight => {
            globalstate.forEach(row => {
                row.forEach(element => {
                    if (element.id == highlight) {
                        element.highlight = true;
                    }
                });
            });
        });
    }
    else {
        const hightlight_squareid = [
            `${current_pos[0]}${Number(current_pos[1]) + 1}`,
        ];
        dots(hightlight_squareid);
        movestate = piece;
        hightlight_squareid.forEach(highlight => {
            globalstate.forEach(row => {
                row.forEach(element => {
                    if (element.id == highlight) {
                        element.highlight = true;
                    }
                });
            });
        });
    }
}

function blackpawnclick({ piece }) {
    const isred = document.getElementById(piece.current_position);
    if (isred.classList.contains("capturecolor")) {
        removered();
        cleardot();
        if (highlight_state) {
            clearboard(highlight_state);
        }
        return;
    }
    removered();

    const current_pos = piece.current_position;
    const col1 = `${String.fromCharCode(current_pos[0].charCodeAt(0) - 1)}${Number(current_pos[1]) - 1}`;
    const col2 = `${String.fromCharCode(current_pos[0].charCodeAt(0) + 1)}${Number(current_pos[1]) - 1}`;
    const captureids = [col1, col2];
    let highlight_captureid = [];
    captureids.forEach(element => {
        if (checkpiece(element, "Black")) {
            highlight_captureid.push(element);
        }
    });

    if (piece == highlight_state) {
        cleardot();
        removered();
        clearboard(piece);
        highlight_state = null;
        return;
    }

    highlight(piece);

    if (current_pos[1] == 7) {
        const hightlight_squareid = [
            `${current_pos[0]}${Number(current_pos[1]) - 1}`,
            `${current_pos[0]}${Number(current_pos[1]) - 2}`,

        ];
        dots(hightlight_squareid);
        movestate = piece;

        hightlight_squareid.forEach(highlight => {
            globalstate.forEach(row => {
                row.forEach(element => {
                    if (element.id == highlight) {
                        element.highlight = true;
                    }
                });
            });
        });

    }
    else {
        const hightlight_squareid = [
            `${current_pos[0]}${Number(current_pos[1]) - 1}`,
        ];
        dots(hightlight_squareid);
        movestate = piece;

        hightlight_squareid.forEach(highlight => {
            globalstate.forEach(row => {
                row.forEach(element => {
                    if (element.id == highlight) {
                        element.highlight = true;
                    }
                });
            });
        });
    }
}

function agrawal() {
    document.getElementById("root").addEventListener("click", function (event) {
        if (event.target.localName === "img") {
            const clickedid = event.target.parentNode.id;
            const flatarr = globalstate.flat();
            
            const square = (flatarr.find(el => el.id === clickedid));
 
            if (square.piece.piece_name === "White_pawn") {
                whitepawnclick(square);
            }
            else if (square.piece.piece_name === "Black_pawn") {
                blackpawnclick(square);
            }
            else if(square.piece.piece_name==="Black_rook"){
                blackrook(square);
            }
            else if(square.piece.piece_name==="White_rook"){
                whiterook(square);
            }
        }
        else {
            removered()
            const childelementsofclickedel = Array.from(event.target.childNodes);
            if (childelementsofclickedel.length == 1 || event.target.localName == "span") {
                if (event.target.localName == "span") {
                    const id = event.target.parentNode.id;
                    movepawn(movestate, id);
                }
                else {
                    const id = event.target.id;
                    movepawn(movestate, id);
                }
            }
            else {
                cleardot();
                if (highlight_state) {
                    clearboard(highlight_state);
                }
            }
        }
    })
}

export { agrawal };