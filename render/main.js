// import { blackpawn,whitebishop,whiteking,whiteknight,whitequeen,whiterook,blackbishop,blackking,blackknight,blackqueen,blackrook,whitepawn } from "../data/pieces.js";

import * as piece from "../data/pieces.js";

import { ROOT_DIV } from "../helper/constant.js";

import { globalstate } from "../index.js";

// const ROOT_DIV=document.getElementById("root");



// function global state renderer

function globalstaterenderer() {
    // clearHighlight();

    globalstate.forEach(row => {
        row.forEach(element => {
            if (element.highlight) {
                const highlightSpan = document.createElement("span");
                highlightSpan.classList.add("highlight");
                document.getElementById(element.id).appendChild(highlightSpan);
            }
            else if (element.highlight === null) {
                const el = document.getElementById(element.id);
                const highlights = Array.from( el.getElementsByTagName("span"));
                highlights.forEach(element => {
                    el.removeChild(element);
                });
                // document.getElementById(element.id).innerHTML="";
            }
            if (element.piece != null) {

            }

        });
    });
}


//move element to square with id

function moveelemet(piece, id) {
    console.log(piece);

    const flatdata = globalstate.flat();
    flatdata.forEach(el => {
        if (el.id === piece.current_position) {
            delete el.piece;
        }
        if (el.id === id) {
            el.piece = piece;
        }
    });
    clearHighlight();
    const previouspiece = document.getElementById(piece.current_position);
    const currentpiece = document.getElementById(id);
    currentpiece.innerHTML = previouspiece.innerHTML;
    previouspiece.innerHTML = "";
    previouspiece.classList.remove("highlightYellow");
    piece.current_position = id;
}


//clear previous self highlight
function clearpreviousselfhighlight(piece) {

    if (piece) {
    
        document.getElementById(piece.current_position).classList.remove("highlightYellow");
    }
}



function selfhighlight(piece) {
    // console.log(piece);
    document.getElementById(piece.current_position).classList.add("highlightYellow");
}


// rendering pieces in real time
function piecerender(data) {
    data.forEach(row => {
        row.forEach(square => {

            // if square has piece
            if (square.piece) {
                const squareEl = document.getElementById(square.id);

                // create piece

                const piece = document.createElement("img");

                piece.src = square.piece.img;
                piece.classList.add("piece");

                // insert piece at square element
                squareEl.appendChild(piece);

            }
        });
    });
}


// initializes the board
function initgamerender(data) {
    data.forEach(element => {
        const rowEl = document.createElement("div");
        element.forEach(square => {
            const squarediv = document.createElement("div");
            squarediv.classList.add(square.color, "square");
            squarediv.id = square.id;

            // render black pawn
            if (square.id[1] == 7) {
                square.piece = piece.blackpawn(square.id);
            }


            // render white pawn
            else if (square.id[1] == 2) {
                square.piece = piece.whitepawn(square.id);
            }

            // rendering black rook
            if (square.id == "h8" || square.id == "a8") {
                square.piece = piece.blackrook(square.id);
            }

            // rendering black knight
            if (square.id == "b8" || square.id == "g8") {
                square.piece = piece.blackknight(square.id);
            }

            // rendering black bishop
            if (square.id == "c8" || square.id == "f8") {
                square.piece = piece.blackbishop(square.id);
            }

            // rendering black king
            if (square.id == "e8") {
                square.piece = piece.blackking(square.id);
            }

            // rendering black queen
            if (square.id == "d8") {
                square.piece = piece.blackqueen(square.id);
            }

            // rendering white rook
            if (square.id == "h1" || square.id == "a1") {
                square.piece = piece.whiterook(square.id);
            }

            // rendering white knight
            if (square.id == "b1" || square.id == "g1") {
                square.piece = piece.whiteknight(square.id);
            }

            // rendering white bishop
            if (square.id == "c1" || square.id == "f1") {
                square.piece = piece.whitebishop(square.id);
            }

            // rendering white queen 
            if (square.id == "d1") {
                square.piece = piece.whitequeen(square.id);
            }

            // rendering white knig
            if (square.id == "e1") {
                square.piece = piece.whiteking(square.id);
            }


            rowEl.appendChild(squarediv);
        });

        rowEl.classList.add("Squarerow");
        ROOT_DIV.appendChild(rowEl);
    });

    piecerender(data);
}

// render highlight circle

function renderhighlight(squareid) {
    const highlightSpan = document.createElement("span");
    highlightSpan.classList.add("highlight");
    document.getElementById(squareid).appendChild(highlightSpan);

}


//clear all highlight from the board

function clearHighlight() {
    const flatdata = globalstate.flat();
    flatdata.forEach(el => {
        if (el.capturehighlight) {
            document.getElementById(el.id).classList.remove("capturecolor");
        }

    });
    flatdata.forEach(el => {
        if (el.highlight) {
            el.highlight = null;
        }
        globalstaterenderer();
    });
}



export { initgamerender, renderhighlight, clearHighlight, selfhighlight, clearpreviousselfhighlight, moveelemet, globalstaterenderer };