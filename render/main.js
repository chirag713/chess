
import * as piece from "../data/pieces.js";

import { ROOT_DIV } from "../helper/constant.js";

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


export { initgamerender };