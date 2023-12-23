
import { globalstate } from "../index.js";

let highlight_state = null;

let movestate = null;

var whitekingmove = null;
var blackkingmove = null;
var whiteleftrookmove = null;
var whiterightrookmove = null;
var blackleftrookmove = null;
var blackrightrookmove = null;

var checkhighlight = true;

var opponentcheck = true;

let checkwhiteorblack = 1;

var greenhighlight = null;

var piecewhiteblack = 1;

var blackkingpos = "e8";

var whitekingpos = "e1";

var checkredhighlightaccept = true;


function mno(element, piece) {
    checkredhighlightaccept = true;
    var chirag = document.getElementById(element).innerHTML;
    const flatarr = globalstate.flat();
    var bhutni = null;
    flatarr.forEach(el => {
        if (el.id === element) {
            bhutni = el.piece;
        }
    });
    checkifmovecheck(piece, element);

    document.getElementById(element).innerHTML = chirag;
    flatarr.forEach(el => {
        if (el.id === element) {
            el.piece = bhutni;
        }
    });
    if (checkhighlight == false) checkredhighlightaccept = false;
}

function xyz(piece) {
    opponentcheck = true;
    const name = piece.piece_name;
    if (name === "White_pawn") {
        const current_pos = piece.current_position;
        const col1 = `${String.fromCharCode(current_pos[0].charCodeAt(0) - 1)}${Number(current_pos[1]) + 1}`;
        if (blackkingpos === col1) {
            opponentcheck = false;
        }
        else {
            const col2 = `${String.fromCharCode(current_pos[0].charCodeAt(0) + 1)}${Number(current_pos[1]) + 1}`;
            if (blackkingpos === col2) {
                opponentcheck = false;
            }
        }
    }
    else if (name === "Black_pawn") {
        const current_pos = piece.current_position;
        const col1 = `${String.fromCharCode(current_pos[0].charCodeAt(0) - 1)}${Number(current_pos[1]) - 1}`;
        if (whitekingpos === col1) {
            opponentcheck = false;
        }
        else {
            const col2 = `${String.fromCharCode(current_pos[0].charCodeAt(0) + 1)}${Number(current_pos[1]) - 1}`;
            if (whitekingpos === col2) {
                opponentcheck = false;
            }
        }
    }
    else if (name === "Black_bishop") {
        const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
        const current_pos = piece.current_position;
        const currentrow = current_pos[1] - 1;
        const currentcol = current_pos[0].charCodeAt(0) - 97;
        const capture_square = [];
        var i = currentcol + 1, j = currentrow + 1;
        for (; i <= 7 && j <= 7;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            i++;
            j++;
        }
        i = currentcol - 1;
        j = currentrow + 1;
        for (; j <= 7 && i >= 0;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            j++;
            i--;
        }
        i = currentcol + 1;
        j = currentrow - 1;
        for (; i <= 7 && j >= 0;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            i++;
            j--;
        }
        i = currentcol - 1;
        j = currentrow - 1;
        for (; j >= 0 && i >= 0;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            j--;
            i--;
        }
        capture_square.forEach(element => {
            if (element === whitekingpos) {
                opponentcheck = false;
            }
        });

    }
    else if (name === "White_bishop") {
        const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
        const current_pos = piece.current_position;
        const currentrow = current_pos[1] - 1;
        const currentcol = current_pos[0].charCodeAt(0) - 97;
        const capture_square = [];
        var i = currentcol + 1, j = currentrow + 1;
        for (; i <= 7 && j <= 7;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            i++;
            j++;
        }
        i = currentcol - 1;
        j = currentrow + 1;
        for (; j <= 7 && i >= 0;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            j++;
            i--;
        }
        i = currentcol + 1;
        j = currentrow - 1;
        for (; i <= 7 && j >= 0;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            i++;
            j--;
        }
        i = currentcol - 1;
        j = currentrow - 1;
        for (; j >= 0 && i >= 0;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            j--;
            i--;
        }
        capture_square.forEach(element => {
            if (element === blackkingpos) {
                opponentcheck = false;
            }
        });
    }
    else if (name === "White_rook") {

        const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const row = ['1', '2', '3', '4', '5', '6', '7', '8'];

        const current_pos = piece.current_position;
        const currenttwo = current_pos[1] - 1;
        const currectone = current_pos[0].charCodeAt(0) - 97;
        const capture_square = [];

        for (var i = currenttwo - 1; i >= 0; i--) {
            const mn = col[currectone] + row[i];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }
        for (var i = (currenttwo + 1); i <= 7; i++) {
            const mn = col[currectone] + row[i];

            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }

        for (var i = currectone + 1; i <= 7; i++) {
            const mn = col[i] + row[currenttwo];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }
        for (var i = currectone - 1; i >= 0; i--) {
            const mn = col[i] + row[currenttwo];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }
        capture_square.forEach(element => {
            if (element === blackkingpos) {
                opponentcheck = false;
            }
        });
    }
    else if (name === "Black_rook") {

        const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const row = ['1', '2', '3', '4', '5', '6', '7', '8'];

        const current_pos = piece.current_position;
        const currenttwo = current_pos[1] - 1;
        const currectone = current_pos[0].charCodeAt(0) - 97;
        const capture_square = [];

        for (var i = currenttwo - 1; i >= 0; i--) {
            const mn = col[currectone] + row[i];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }
        for (var i = (currenttwo + 1); i <= 7; i++) {
            const mn = col[currectone] + row[i];

            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }

        for (var i = currectone + 1; i <= 7; i++) {
            const mn = col[i] + row[currenttwo];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }
        for (var i = currectone - 1; i >= 0; i--) {
            const mn = col[i] + row[currenttwo];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }
        capture_square.forEach(element => {
            if (element === whitekingpos) {
                opponentcheck = false;
            }
        });
    }
    else if (name === "White_queen") {
        const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
        const current_pos = piece.current_position;

        const currenttwo = current_pos[1] - 1;
        const currectone = current_pos[0].charCodeAt(0) - 97;
        const currentrow = current_pos[1] - 1;
        const currentcol = current_pos[0].charCodeAt(0) - 97;
        const capture_square = [];
        var i = currentcol + 1, j = currentrow + 1;

        for (; i <= 7 && j <= 7;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            i++;
            j++;
        }
        i = currentcol - 1;
        j = currentrow + 1;
        for (; j <= 7 && i >= 0;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            j++;
            i--;
        }
        i = currentcol + 1;
        j = currentrow - 1;
        for (; i <= 7 && j >= 0;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            i++;
            j--;
        }
        i = currentcol - 1;
        j = currentrow - 1;
        for (; j >= 0 && i >= 0;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            j--;
            i--;
        }
        for (var i = currenttwo - 1; i >= 0; i--) {
            const mn = col[currectone] + row[i];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }
        for (var i = (currenttwo + 1); i <= 7; i++) {
            const mn = col[currectone] + row[i];

            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }

        for (var i = currectone + 1; i <= 7; i++) {
            const mn = col[i] + row[currenttwo];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }
        for (var i = currectone - 1; i >= 0; i--) {
            const mn = col[i] + row[currenttwo];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }
        capture_square.forEach(element => {
            if (element === blackkingpos) {
                opponentcheck = false;
            }
        });
    }
    else if (name === "Black_queen") {
        const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
        const current_pos = piece.current_position;

        const currenttwo = current_pos[1] - 1;
        const currectone = current_pos[0].charCodeAt(0) - 97;
        const currentrow = current_pos[1] - 1;
        const currentcol = current_pos[0].charCodeAt(0) - 97;
        const capture_square = [];
        var i = currentcol + 1, j = currentrow + 1;

        for (; i <= 7 && j <= 7;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            i++;
            j++;
        }
        i = currentcol - 1;
        j = currentrow + 1;
        for (; j <= 7 && i >= 0;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            j++;
            i--;
        }
        i = currentcol + 1;
        j = currentrow - 1;
        for (; i <= 7 && j >= 0;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            i++;
            j--;
        }
        i = currentcol - 1;
        j = currentrow - 1;
        for (; j >= 0 && i >= 0;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            j--;
            i--;
        }
        for (var i = currenttwo - 1; i >= 0; i--) {
            const mn = col[currectone] + row[i];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }
        for (var i = (currenttwo + 1); i <= 7; i++) {
            const mn = col[currectone] + row[i];

            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }

        for (var i = currectone + 1; i <= 7; i++) {
            const mn = col[i] + row[currenttwo];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }
        for (var i = currectone - 1; i >= 0; i--) {
            const mn = col[i] + row[currenttwo];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }
        capture_square.forEach(element => {
            if (element === whitekingpos) {
                opponentcheck = false;
            }
        });
    }
    else if (name === "Black_knight") {
        const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
        const current_pos = piece.current_position;
        const currentrow = current_pos[1] - 1;
        const currentcol = current_pos[0].charCodeAt(0) - 97;
        var requirecol = [currentcol + 2, currentcol + 2, currentcol + 1, currentcol + 1, currentcol - 1, currentcol - 1, currentcol - 2, currentcol - 2];
        var requirerow = [currentrow + 1, currentrow - 1, currentrow + 2, currentrow - 2, currentrow + 2, currentrow - 2, currentrow - 1, currentrow + 1];


        const hightlight_squareid = [];
        const capture_square = [];
        for (var i = 0; i < 8; i++) {
            if (requirecol[i] < 8 && requirerow[i] < 8 && requirecol[i] >= 0 && requirerow[i] >= 0) {
                var mn = col[requirecol[i]] + row[requirerow[i]];
                if (document.getElementById(mn).innerHTML) {
                    capture_square.push(mn);
                }
                else {
                    hightlight_squareid.push(mn);
                }
            }
        }
        capture_square.forEach(element => {
            if (element === whitekingpos) {
                opponentcheck = false;
            }
        });

    }
    else if (name === "Black_knight") {
        const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
        const current_pos = piece.current_position;
        const currentrow = current_pos[1] - 1;
        const currentcol = current_pos[0].charCodeAt(0) - 97;
        var requirecol = [currentcol + 2, currentcol + 2, currentcol + 1, currentcol + 1, currentcol - 1, currentcol - 1, currentcol - 2, currentcol - 2];
        var requirerow = [currentrow + 1, currentrow - 1, currentrow + 2, currentrow - 2, currentrow + 2, currentrow - 2, currentrow - 1, currentrow + 1];


        const hightlight_squareid = [];
        const capture_square = [];
        for (var i = 0; i < 8; i++) {
            if (requirecol[i] < 8 && requirerow[i] < 8 && requirecol[i] >= 0 && requirerow[i] >= 0) {
                var mn = col[requirecol[i]] + row[requirerow[i]];
                if (document.getElementById(mn).innerHTML) {
                    capture_square.push(mn);
                }
                else {
                    hightlight_squareid.push(mn);
                }
            }
        }
        capture_square.forEach(element => {
            if (element === blackkingpos) {
                opponentcheck = false;
            }
        });

    }
}

function checkifmovecheck(piece, id) {
    checkhighlight = true;
    var previousstate = piece.current_position;
    movepawn(piece, id);
    var chirag = piece;
    chirag.current_position = id;
    const flatarr = globalstate.flat();
    if (piece.piece_name.includes("Black")) {
        flatarr.forEach(el => {
            if (el.piece) {
                if (el.piece.piece_name.includes("White")) {

                    if (checkhighlight === true) {
                        xyz(el.piece);
                        if (opponentcheck === false) {
                            movepawn(chirag, previousstate);
                            movestate = piece;
                            highlight_state = piece;
                            checkhighlight = false;
                        }
                    }
                }

            }
        });
    }
    else {
        flatarr.forEach(el => {
            if (el.piece) {
                if (el.piece.piece_name.includes("Black")) {

                    if (checkhighlight === true) {
                        xyz(el.piece);
                        if (opponentcheck === false) {
                            movepawn(chirag, previousstate);
                            movestate = piece;
                            highlight_state = piece;
                            checkhighlight = false;
                        }
                    }
                }

            }
        });

    }

    if (checkhighlight == true) {
        movepawn(chirag, previousstate);
        highlight_state = piece;
        movestate = piece;
    }
}


function whiteking({ piece }) {
    const isred = document.getElementById(piece.current_position);
    if (isred.classList.contains("capturecolor")) {
        removered();
        cleardot();
        movepawn(highlight_state, piece.current_position, 0);
        if (highlight_state) {
            clearboard(highlight_state);
        }
        cleardot();
        return;
    }
    cleardot();
    removered();

    if (highlight_state) {
        clearboard(highlight_state);
    }
    if (piecewhiteblack == 0) {
        highlight_state = null;
        return;
    }

    if (piece == highlight_state) {
        cleardot();
        clearboard(piece);
        removered();
        highlight_state = null;
        return;
    }
    const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const current_pos = piece.current_position;
    const currentrow = current_pos[1] - 1;
    const currentcol = current_pos[0].charCodeAt(0) - 97;
    const requirecol = [currentcol - 1, currentcol - 1, currentcol - 1, currentcol, currentcol, currentcol + 1, currentcol + 1, currentcol + 1];
    const requirerow = [currentrow + 1, currentrow, currentrow - 1, currentrow + 1, currentrow - 1, currentrow + 1, currentrow, currentrow - 1];
    const hightlight_squareid = [];
    const capture_square = [];
    for (var i = 0; i < 8; i++) {
        if (requirecol[i] < 8 && requirerow[i] < 8 && requirecol[i] >= 0 && requirerow[i] >= 0) {
            var mn = col[requirecol[i]] + row[requirerow[i]];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
            }
            else {
                checkifmovecheck(piece, mn);
                if (checkhighlight === true)
                    hightlight_squareid.push(mn);
            }
        }
    }

    var x = Array.from(document.getElementById(piece.current_position).classList);
    var index = x.indexOf("check");

    if (index === -1) {
        if (whitekingmove === null && whiteleftrookmove === null) {
            const idcheck = ["b1", "c1", "d1"];
            var remind = 1;
            idcheck.forEach(element => {
                if (document.getElementById(element).innerHTML) {
                    remind = 0;
                }
            });
            if (remind == 1) {
                var index = hightlight_squareid.indexOf("d1");
                if (index != -1) {
                    checkifmovecheck(piece, "c1");
                    if (checkhighlight === true)
                        hightlight_squareid.push("c1");
                }

            }
        }
        if (whitekingmove === null && whiterightrookmove === null) {
            const idcheck = ["f1", "g1"];
            var remind = 1;
            idcheck.forEach(element => {

                if (document.getElementById(element).innerHTML) {
                    remind = 0;
                }
            });
            if (remind == 1) {
                var index = hightlight_squareid.indexOf("f1");
                if (index != -1) {
                    checkifmovecheck(piece, "g1");
                    if (checkhighlight === true)
                        hightlight_squareid.push("g1");
                }

            }
        }

    }

    cleardot();
    movestate = piece;
    highlight_state = piece;
    highlight(piece);
    let highlight_captureid = [];

    capture_square.forEach(element => {
        if (checkpiece(element, "White")) {
            mno(element, piece);
            if (checkredhighlightaccept === true) {
                highlight_captureid.push(element);
            }

        }
    });

    highlight_captureid.forEach(element => {
        document.getElementById(element).classList.add("capturecolor");
    });

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
    highlight(piece);

}

function blackking({ piece }) {
    const isred = document.getElementById(piece.current_position);
    if (isred.classList.contains("capturecolor")) {
        removered();
        cleardot();
        movepawn(highlight_state, piece.current_position, 0);
        if (highlight_state) {
            clearboard(highlight_state);
        }
        cleardot();
        return;
    }
    cleardot();
    removered();

    if (highlight_state) {
        clearboard(highlight_state);
    }
    if (piecewhiteblack == 1) {
        highlight_state = null;
        return;
    }

    if (piece == highlight_state) {
        cleardot();
        clearboard(piece);
        removered();
        highlight_state = null;
        return;
    }
    const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const current_pos = piece.current_position;
    const currentrow = current_pos[1] - 1;
    const currentcol = current_pos[0].charCodeAt(0) - 97;
    const requirecol = [currentcol - 1, currentcol - 1, currentcol - 1, currentcol, currentcol, currentcol + 1, currentcol + 1, currentcol + 1];
    const requirerow = [currentrow + 1, currentrow, currentrow - 1, currentrow + 1, currentrow - 1, currentrow + 1, currentrow, currentrow - 1];
    const hightlight_squareid = [];
    const capture_square = [];
    for (var i = 0; i < 8; i++) {
        if (requirecol[i] < 8 && requirerow[i] < 8 && requirecol[i] >= 0 && requirerow[i] >= 0) {
            var mn = col[requirecol[i]] + row[requirerow[i]];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
            }
            else {
                checkifmovecheck(piece, mn);
                if (checkhighlight === true)
                    hightlight_squareid.push(mn);
            }
        }
    }
    var x = Array.from(document.getElementById(piece.current_position).classList);
    var index = x.indexOf("check");
    if (index == -1) {
        if (blackkingmove === null && blackleftrookmove === null) {
            const idcheck = ["b8", "c8", "d8"];
            var remind = 1;
            idcheck.forEach(element => {

                if (document.getElementById(element).innerHTML) {
                    remind = 0;
                }
            });
            if (remind == 1) {
                var index = hightlight_squareid.indexOf("d8");
                if (index != -1) {
                    checkifmovecheck(piece, "c8");
                    if (checkhighlight === true)
                        hightlight_squareid.push("c8");
                }
            }
        }
        if (blackkingmove === null && blackrightrookmove === null) {
            const idcheck = ["f8", "g8"];
            var remind = 1;
            idcheck.forEach(element => {

                if (document.getElementById(element).innerHTML) {
                    remind = 0;
                }
            });
            if (remind == 1) {
                var index = hightlight_squareid.indexOf("f8");
                if (index != -1) {
                    checkifmovecheck(piece, "g8");
                    if (checkhighlight === true)
                        hightlight_squareid.push("g8");
                }
            }
        }
    }

    cleardot();
    movestate = piece;
    highlight_state = piece;
    highlight(piece);
    let highlight_captureid = [];

    capture_square.forEach(element => {
        if (checkpiece(element, "Black")) {
            mno(element, piece);
            if (checkredhighlightaccept === true) {
                highlight_captureid.push(element);
            }
        }
    });

    highlight_captureid.forEach(element => {
        document.getElementById(element).classList.add("capturecolor");
    });

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

    highlight(piece);

}

function clearcheck(piece) {
    if (piece) {
        document.getElementById(piece).classList.remove("check");
        greenhighlight = null;
    }
}

function check(piece) {
    const name = piece.piece_name;
    if (name === "White_pawn") {
        const current_pos = piece.current_position;
        const col1 = `${String.fromCharCode(current_pos[0].charCodeAt(0) - 1)}${Number(current_pos[1]) + 1}`;
        if (blackkingpos === col1) {
            document.getElementById(blackkingpos).classList.add("check");
            greenhighlight = blackkingpos;
        }
        else {
            const col2 = `${String.fromCharCode(current_pos[0].charCodeAt(0) + 1)}${Number(current_pos[1]) + 1}`;
            if (blackkingpos === col2) {
                document.getElementById(blackkingpos).classList.add("check");
                greenhighlight = blackkingpos;
            }
        }
    }
    else if (name === "Black_pawn") {
        const current_pos = piece.current_position;
        const col1 = `${String.fromCharCode(current_pos[0].charCodeAt(0) - 1)}${Number(current_pos[1]) - 1}`;
        if (whitekingpos === col1) {
            document.getElementById(whitekingpos).classList.add("check");
            greenhighlight = whitekingpos;

        }
        else {
            const col2 = `${String.fromCharCode(current_pos[0].charCodeAt(0) + 1)}${Number(current_pos[1]) - 1}`;
            if (whitekingpos === col2) {
                document.getElementById(whitekingpos).classList.add("check");
                greenhighlight = whitekingpos;
            }
        }
    }
    else if (name === "Black_bishop") {
        const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
        const current_pos = piece.current_position;
        const currentrow = current_pos[1] - 1;
        const currentcol = current_pos[0].charCodeAt(0) - 97;
        const capture_square = [];
        var i = currentcol + 1, j = currentrow + 1;
        for (; i <= 7 && j <= 7;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            i++;
            j++;
        }
        i = currentcol - 1;
        j = currentrow + 1;
        for (; j <= 7 && i >= 0;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            j++;
            i--;
        }
        i = currentcol + 1;
        j = currentrow - 1;
        for (; i <= 7 && j >= 0;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            i++;
            j--;
        }
        i = currentcol - 1;
        j = currentrow - 1;
        for (; j >= 0 && i >= 0;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            j--;
            i--;
        }
        capture_square.forEach(element => {
            if (element === whitekingpos) {
                document.getElementById(whitekingpos).classList.add("check");
                greenhighlight = whitekingpos;
            }
        });

    }
    else if (name === "White_bishop") {
        const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
        const current_pos = piece.current_position;
        const currentrow = current_pos[1] - 1;
        const currentcol = current_pos[0].charCodeAt(0) - 97;
        const capture_square = [];
        var i = currentcol + 1, j = currentrow + 1;
        for (; i <= 7 && j <= 7;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            i++;
            j++;
        }
        i = currentcol - 1;
        j = currentrow + 1;
        for (; j <= 7 && i >= 0;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            j++;
            i--;
        }
        i = currentcol + 1;
        j = currentrow - 1;
        for (; i <= 7 && j >= 0;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            i++;
            j--;
        }
        i = currentcol - 1;
        j = currentrow - 1;
        for (; j >= 0 && i >= 0;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            j--;
            i--;
        }
        capture_square.forEach(element => {
            if (element === blackkingpos) {
                document.getElementById(blackkingpos).classList.add("check");
                greenhighlight = blackkingpos;
            }
        });
    }
    else if (name === "White_rook") {

        const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const row = ['1', '2', '3', '4', '5', '6', '7', '8'];

        const current_pos = piece.current_position;
        const currenttwo = current_pos[1] - 1;
        const currectone = current_pos[0].charCodeAt(0) - 97;
        const capture_square = [];

        for (var i = currenttwo - 1; i >= 0; i--) {
            const mn = col[currectone] + row[i];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }
        for (var i = (currenttwo + 1); i <= 7; i++) {
            const mn = col[currectone] + row[i];

            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }

        for (var i = currectone + 1; i <= 7; i++) {
            const mn = col[i] + row[currenttwo];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }
        for (var i = currectone - 1; i >= 0; i--) {
            const mn = col[i] + row[currenttwo];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }
        capture_square.forEach(element => {
            if (element === blackkingpos) {
                document.getElementById(blackkingpos).classList.add("check");
                greenhighlight = blackkingpos;
            }
        });
    }
    else if (name === "Black_rook") {

        const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const row = ['1', '2', '3', '4', '5', '6', '7', '8'];

        const current_pos = piece.current_position;
        const currenttwo = current_pos[1] - 1;
        const currectone = current_pos[0].charCodeAt(0) - 97;
        const capture_square = [];

        for (var i = currenttwo - 1; i >= 0; i--) {
            const mn = col[currectone] + row[i];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }
        for (var i = (currenttwo + 1); i <= 7; i++) {
            const mn = col[currectone] + row[i];

            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }

        for (var i = currectone + 1; i <= 7; i++) {
            const mn = col[i] + row[currenttwo];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }
        for (var i = currectone - 1; i >= 0; i--) {
            const mn = col[i] + row[currenttwo];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }
        capture_square.forEach(element => {
            if (element === whitekingpos) {
                document.getElementById(whitekingpos).classList.add("check");
                greenhighlight = whitekingpos;
            }
        });
    }
    else if (name === "White_queen") {
        const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
        const current_pos = piece.current_position;

        const currenttwo = current_pos[1] - 1;
        const currectone = current_pos[0].charCodeAt(0) - 97;
        const currentrow = current_pos[1] - 1;
        const currentcol = current_pos[0].charCodeAt(0) - 97;
        const capture_square = [];
        var i = currentcol + 1, j = currentrow + 1;

        for (; i <= 7 && j <= 7;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            i++;
            j++;
        }
        i = currentcol - 1;
        j = currentrow + 1;
        for (; j <= 7 && i >= 0;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            j++;
            i--;
        }
        i = currentcol + 1;
        j = currentrow - 1;
        for (; i <= 7 && j >= 0;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            i++;
            j--;
        }
        i = currentcol - 1;
        j = currentrow - 1;
        for (; j >= 0 && i >= 0;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            j--;
            i--;
        }
        for (var i = currenttwo - 1; i >= 0; i--) {
            const mn = col[currectone] + row[i];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }
        for (var i = (currenttwo + 1); i <= 7; i++) {
            const mn = col[currectone] + row[i];

            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }

        for (var i = currectone + 1; i <= 7; i++) {
            const mn = col[i] + row[currenttwo];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }
        for (var i = currectone - 1; i >= 0; i--) {
            const mn = col[i] + row[currenttwo];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }
        capture_square.forEach(element => {
            if (element === blackkingpos) {
                document.getElementById(blackkingpos).classList.add("check");
                greenhighlight = blackkingpos;
            }
        });
    }
    else if (name === "Black_queen") {
        const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
        const current_pos = piece.current_position;

        const currenttwo = current_pos[1] - 1;
        const currectone = current_pos[0].charCodeAt(0) - 97;
        const currentrow = current_pos[1] - 1;
        const currentcol = current_pos[0].charCodeAt(0) - 97;
        const capture_square = [];
        var i = currentcol + 1, j = currentrow + 1;

        for (; i <= 7 && j <= 7;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            i++;
            j++;
        }
        i = currentcol - 1;
        j = currentrow + 1;
        for (; j <= 7 && i >= 0;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            j++;
            i--;
        }
        i = currentcol + 1;
        j = currentrow - 1;
        for (; i <= 7 && j >= 0;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            i++;
            j--;
        }
        i = currentcol - 1;
        j = currentrow - 1;
        for (; j >= 0 && i >= 0;) {
            const mn = col[i] + row[j];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
            j--;
            i--;
        }
        for (var i = currenttwo - 1; i >= 0; i--) {
            const mn = col[currectone] + row[i];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }
        for (var i = (currenttwo + 1); i <= 7; i++) {
            const mn = col[currectone] + row[i];

            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }

        for (var i = currectone + 1; i <= 7; i++) {
            const mn = col[i] + row[currenttwo];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }
        for (var i = currectone - 1; i >= 0; i--) {
            const mn = col[i] + row[currenttwo];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
                break;
            }
        }
        capture_square.forEach(element => {
            if (element === whitekingpos) {
                document.getElementById(whitekingpos).classList.add("check");
                greenhighlight = whitekingpos;
            }
        });
    }
    else if (name === "Black_knight") {
        const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
        const current_pos = piece.current_position;
        const currentrow = current_pos[1] - 1;
        const currentcol = current_pos[0].charCodeAt(0) - 97;
        var requirecol = [currentcol + 2, currentcol + 2, currentcol + 1, currentcol + 1, currentcol - 1, currentcol - 1, currentcol - 2, currentcol - 2];
        var requirerow = [currentrow + 1, currentrow - 1, currentrow + 2, currentrow - 2, currentrow + 2, currentrow - 2, currentrow - 1, currentrow + 1];


        const hightlight_squareid = [];
        const capture_square = [];
        for (var i = 0; i < 8; i++) {
            if (requirecol[i] < 8 && requirerow[i] < 8 && requirecol[i] >= 0 && requirerow[i] >= 0) {
                var mn = col[requirecol[i]] + row[requirerow[i]];
                if (document.getElementById(mn).innerHTML) {
                    capture_square.push(mn);
                }
                else {
                    hightlight_squareid.push(mn);
                }
            }
        }
        capture_square.forEach(element => {
            if (element === whitekingpos) {
                document.getElementById(whitekingpos).classList.add("check");
                greenhighlight = whitekingpos;
            }
        });

    }
    else if (name === "Black_knight") {
        const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
        const current_pos = piece.current_position;
        const currentrow = current_pos[1] - 1;
        const currentcol = current_pos[0].charCodeAt(0) - 97;
        var requirecol = [currentcol + 2, currentcol + 2, currentcol + 1, currentcol + 1, currentcol - 1, currentcol - 1, currentcol - 2, currentcol - 2];
        var requirerow = [currentrow + 1, currentrow - 1, currentrow + 2, currentrow - 2, currentrow + 2, currentrow - 2, currentrow - 1, currentrow + 1];


        const hightlight_squareid = [];
        const capture_square = [];
        for (var i = 0; i < 8; i++) {
            if (requirecol[i] < 8 && requirerow[i] < 8 && requirecol[i] >= 0 && requirerow[i] >= 0) {
                var mn = col[requirecol[i]] + row[requirerow[i]];
                if (document.getElementById(mn).innerHTML) {
                    capture_square.push(mn);
                }
                else {
                    hightlight_squareid.push(mn);
                }
            }
        }
        capture_square.forEach(element => {
            if (element === blackkingpos) {
                document.getElementById(blackkingpos).classList.add("check");
                greenhighlight = whitekingpos;
            }
        });

    }
}

function blackknight({ piece }) {
    const isred = document.getElementById(piece.current_position);
    if (isred.classList.contains("capturecolor")) {
        removered();
        cleardot();
        movepawn(highlight_state, piece.current_position, 0);
        if (highlight_state) {
            clearboard(highlight_state);
        }
        cleardot();
        return;
    }
    cleardot();
    removered();

    if (highlight_state) {
        clearboard(highlight_state);
    }
    if (piecewhiteblack == 1) {
        highlight_state = null;
        return;
    }

    if (piece == highlight_state) {
        cleardot();
        clearboard(piece);
        removered();
        highlight_state = null;
        return;
    }



    const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const current_pos = piece.current_position;
    const currentrow = current_pos[1] - 1;
    const currentcol = current_pos[0].charCodeAt(0) - 97;
    var requirecol = [currentcol + 2, currentcol + 2, currentcol + 1, currentcol + 1, currentcol - 1, currentcol - 1, currentcol - 2, currentcol - 2];
    var requirerow = [currentrow + 1, currentrow - 1, currentrow + 2, currentrow - 2, currentrow + 2, currentrow - 2, currentrow - 1, currentrow + 1];


    const hightlight_squareid = [];
    const capture_square = [];
    for (var i = 0; i < 8; i++) {
        if (requirecol[i] < 8 && requirerow[i] < 8 && requirecol[i] >= 0 && requirerow[i] >= 0) {
            var mn = col[requirecol[i]] + row[requirerow[i]];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
            }
            else {
                checkifmovecheck(piece, mn);
                if (checkhighlight === true)
                    hightlight_squareid.push(mn);
            }
        }

    }

    cleardot();
    movestate = piece;
    highlight_state = piece;
    highlight(piece);
    let highlight_captureid = [];

    capture_square.forEach(element => {
        if (checkpiece(element, "Black")) {
            mno(element, piece);
            if (checkredhighlightaccept === true) {
                highlight_captureid.push(element);
            }
        }
    });

    highlight_captureid.forEach(element => {
        document.getElementById(element).classList.add("capturecolor");
    });

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

function whiteknight({ piece }) {
    const isred = document.getElementById(piece.current_position);
    if (isred.classList.contains("capturecolor")) {
        removered();
        cleardot();
        movepawn(highlight_state, piece.current_position, 0);
        if (highlight_state) {
            clearboard(highlight_state);
        }
        cleardot();
        return;
    }
    cleardot();
    removered();

    if (highlight_state) {
        clearboard(highlight_state);
    }
    if (piecewhiteblack == 0) {
        highlight_state = null;
        return;
    }

    if (piece == highlight_state) {
        cleardot();
        clearboard(piece);
        removered();
        highlight_state = null;
        return;
    }



    const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const current_pos = piece.current_position;
    const currentrow = current_pos[1] - 1;
    const currentcol = current_pos[0].charCodeAt(0) - 97;

    var requirecol = [currentcol + 2, currentcol + 2, currentcol + 1, currentcol + 1, currentcol - 1, currentcol - 1, currentcol - 2, currentcol - 2];
    var requirerow = [currentrow + 1, currentrow - 1, currentrow + 2, currentrow - 2, currentrow + 2, currentrow - 2, currentrow - 1, currentrow + 1];


    const hightlight_squareid = [];
    const capture_square = [];
    for (var i = 0; i < 8; i++) {
        if (requirecol[i] < 8 && requirerow[i] < 8 && requirecol[i] >= 0 && requirerow[i] >= 0) {
            var mn = col[requirecol[i]] + row[requirerow[i]];
            if (document.getElementById(mn).innerHTML) {
                capture_square.push(mn);
            }
            else {
                checkifmovecheck(piece, mn);
                if (checkhighlight === true)
                    hightlight_squareid.push(mn);
            }
        }

    }

    cleardot();
    movestate = piece;
    highlight_state = piece;
    highlight(piece);
    let highlight_captureid = [];

    capture_square.forEach(element => {
        if (checkpiece(element, "White")) {
            mno(element, piece);
            if (checkredhighlightaccept === true) {
                highlight_captureid.push(element);
            }
        }
    });

    highlight_captureid.forEach(element => {
        document.getElementById(element).classList.add("capturecolor");
    });

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
    highlight(piece);

}

function whitequeen({ piece }) {
    const isred = document.getElementById(piece.current_position);
    if (isred.classList.contains("capturecolor")) {
        removered();
        cleardot();
        movepawn(highlight_state, piece.current_position, 0);
        if (highlight_state) {
            clearboard(highlight_state);
        }
        cleardot();
        return;
    }
    cleardot();
    removered();

    if (highlight_state) {
        clearboard(highlight_state);
    }
    if (piecewhiteblack == 0) {
        highlight_state = null;
        return;
    }

    if (piece == highlight_state) {
        cleardot();
        clearboard(piece);
        removered();
        highlight_state = null;
        return;
    }

    const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const current_pos = piece.current_position;

    const currenttwo = current_pos[1] - 1;
    const currectone = current_pos[0].charCodeAt(0) - 97;
    const currentrow = current_pos[1] - 1;
    const currentcol = current_pos[0].charCodeAt(0) - 97;
    const hightlight_squareid = [];
    const capture_square = [];
    var i = currentcol + 1, j = currentrow + 1;

    for (; i <= 7 && j <= 7;) {
        const mn = col[i] + row[j];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
        i++;
        j++;
    }
    i = currentcol - 1;
    j = currentrow + 1;
    for (; j <= 7 && i >= 0;) {
        const mn = col[i] + row[j];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
        j++;
        i--;
    }
    i = currentcol + 1;
    j = currentrow - 1;
    for (; i <= 7 && j >= 0;) {
        const mn = col[i] + row[j];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
        i++;
        j--;
    }
    i = currentcol - 1;
    j = currentrow - 1;
    for (; j >= 0 && i >= 0;) {
        const mn = col[i] + row[j];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
        j--;
        i--;
    }
    for (var i = currenttwo - 1; i >= 0; i--) {
        const mn = col[currectone] + row[i];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
    }
    for (var i = (currenttwo + 1); i <= 7; i++) {
        const mn = col[currectone] + row[i];

        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
    }

    for (var i = currectone + 1; i <= 7; i++) {
        const mn = col[i] + row[currenttwo];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }

    }
    for (var i = currectone - 1; i >= 0; i--) {
        const mn = col[i] + row[currenttwo];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
    }


    cleardot();
    movestate = piece;
    highlight_state = piece;
    highlight(piece);
    let highlight_captureid = [];

    capture_square.forEach(element => {
        if (checkpiece(element, "White")) {
            mno(element, piece);
            if (checkredhighlightaccept === true) {
                highlight_captureid.push(element);
            }
        }
    });

    highlight_captureid.forEach(element => {
        document.getElementById(element).classList.add("capturecolor");
    });


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

function blackqueen({ piece }) {
    const isred = document.getElementById(piece.current_position);
    if (isred.classList.contains("capturecolor")) {
        removered();
        cleardot();
        movepawn(highlight_state, piece.current_position, 0);
        if (highlight_state) {
            clearboard(highlight_state);
        }
        cleardot();
        return;
    }
    cleardot();
    removered();

    if (highlight_state) {
        clearboard(highlight_state);
    }
    if (piecewhiteblack == 1) {
        highlight_state = null;
        return;
    }

    if (piece == highlight_state) {
        cleardot();
        clearboard(piece);
        removered();
        highlight_state = null;
        return;
    }
    const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const current_pos = piece.current_position;

    const currenttwo = current_pos[1] - 1;
    const currectone = current_pos[0].charCodeAt(0) - 97;
    const currentrow = current_pos[1] - 1;
    const currentcol = current_pos[0].charCodeAt(0) - 97;
    const hightlight_squareid = [];
    const capture_square = [];
    var i = currentcol + 1, j = currentrow + 1;

    for (; i <= 7 && j <= 7;) {
        const mn = col[i] + row[j];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
        i++;
        j++;
    }
    i = currentcol - 1;
    j = currentrow + 1;
    for (; j <= 7 && i >= 0;) {
        const mn = col[i] + row[j];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
        j++;
        i--;
    }
    i = currentcol + 1;
    j = currentrow - 1;
    for (; i <= 7 && j >= 0;) {
        const mn = col[i] + row[j];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
        i++;
        j--;
    }
    i = currentcol - 1;
    j = currentrow - 1;
    for (; j >= 0 && i >= 0;) {
        const mn = col[i] + row[j];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
        j--;
        i--;
    }
    for (var i = currenttwo - 1; i >= 0; i--) {
        const mn = col[currectone] + row[i];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
    }
    for (var i = (currenttwo + 1); i <= 7; i++) {
        const mn = col[currectone] + row[i];

        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
    }

    for (var i = currectone + 1; i <= 7; i++) {
        const mn = col[i] + row[currenttwo];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }

    }
    for (var i = currectone - 1; i >= 0; i--) {
        const mn = col[i] + row[currenttwo];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
    }


    cleardot();
    movestate = piece;
    highlight_state = piece;
    highlight(piece);
    let highlight_captureid = [];

    capture_square.forEach(element => {
        if (checkpiece(element, "Black")) {
            mno(element, piece);
            if (checkredhighlightaccept === true) {
                highlight_captureid.push(element);
            }
        }
    });

    highlight_captureid.forEach(element => {
        document.getElementById(element).classList.add("capturecolor");
    });

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

function whitebishop({ piece }) {
    const isred = document.getElementById(piece.current_position);
    if (isred.classList.contains("capturecolor")) {
        removered();
        cleardot();
        movepawn(highlight_state, piece.current_position, 0);
        if (highlight_state) {
            clearboard(highlight_state);
        }
        cleardot();
        return;
    }
    cleardot();
    removered();

    if (highlight_state) {
        clearboard(highlight_state);
    }
    if (piecewhiteblack == 0) {
        highlight_state = null;
        return;
    }

    if (piece == highlight_state) {
        cleardot();
        clearboard(piece);
        removered();
        highlight_state = null;
        return;
    }
    const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const current_pos = piece.current_position;
    const currentrow = current_pos[1] - 1;
    const currentcol = current_pos[0].charCodeAt(0) - 97;
    const hightlight_squareid = [];
    const capture_square = [];
    var i = currentcol + 1, j = currentrow + 1;
    for (; i <= 7 && j <= 7;) {
        const mn = col[i] + row[j];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
        i++;
        j++;
    }
    i = currentcol - 1;
    j = currentrow + 1;
    for (; j <= 7 && i >= 0;) {
        const mn = col[i] + row[j];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
        j++;
        i--;
    }
    i = currentcol + 1;
    j = currentrow - 1;
    for (; i <= 7 && j >= 0;) {
        const mn = col[i] + row[j];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
        i++;
        j--;
    }
    i = currentcol - 1;
    j = currentrow - 1;
    for (; j >= 0 && i >= 0;) {
        const mn = col[i] + row[j];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
        j--;
        i--;
    }

    cleardot();
    movestate = piece;
    highlight_state = piece;
    highlight(piece);
    let highlight_captureid = [];

    capture_square.forEach(element => {
        if (checkpiece(element, "White")) {
            mno(element, piece);
            if (checkredhighlightaccept === true) {
                highlight_captureid.push(element);
            }
        }
    });

    highlight_captureid.forEach(element => {
        document.getElementById(element).classList.add("capturecolor");
    });

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

function blackbishop({ piece }) {
    const isred = document.getElementById(piece.current_position);
    if (isred.classList.contains("capturecolor")) {
        removered();
        cleardot();
        movepawn(highlight_state, piece.current_position, 0);
        if (highlight_state) {
            clearboard(highlight_state);
        }
        cleardot();
        return;
    }
    cleardot();
    removered();

    if (highlight_state) {
        clearboard(highlight_state);
    }
    if (piecewhiteblack == 1) {
        highlight_state = null;
        return;
    }

    if (piece == highlight_state) {
        cleardot();
        clearboard(piece);
        removered();
        highlight_state = null;
        return;
    }
    const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const row = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const current_pos = piece.current_position;
    const currentrow = current_pos[1] - 1;
    const currentcol = current_pos[0].charCodeAt(0) - 97;
    const hightlight_squareid = [];
    const capture_square = [];
    var i = currentcol + 1, j = currentrow + 1;
    for (; i <= 7 && j <= 7;) {
        const mn = col[i] + row[j];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
        i++;
        j++;
    }
    i = currentcol - 1;
    j = currentrow + 1;
    for (; j <= 7 && i >= 0;) {
        const mn = col[i] + row[j];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
        j++;
        i--;
    }
    i = currentcol + 1;
    j = currentrow - 1;
    for (; i <= 7 && j >= 0;) {
        const mn = col[i] + row[j];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
        i++;
        j--;
    }
    i = currentcol - 1;
    j = currentrow - 1;
    for (; j >= 0 && i >= 0;) {
        const mn = col[i] + row[j];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
        j--;
        i--;
    }

    cleardot();
    movestate = piece;
    highlight_state = piece;
    highlight(piece);
    let highlight_captureid = [];

    capture_square.forEach(element => {
        if (checkpiece(element, "Black")) {
            mno(element, piece);
            if (checkredhighlightaccept === true) {
                highlight_captureid.push(element);
            }
        }
    });

    highlight_captureid.forEach(element => {
        document.getElementById(element).classList.add("capturecolor");
    });

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

function blackrook({ piece }) {
    const isred = document.getElementById(piece.current_position);
    if (isred.classList.contains("capturecolor")) {
        removered();
        cleardot();
        movepawn(highlight_state, piece.current_position, 0);
        if (highlight_state) {
            clearboard(highlight_state);
        }
        cleardot();
        return;
    }
    cleardot();
    removered();

    if (highlight_state) {
        clearboard(highlight_state);
    }
    if (piecewhiteblack == 1) {
        highlight_state = null;
        return;
    }
    if (piece == highlight_state) {
        cleardot();
        clearboard(piece);
        removered();
        highlight_state = null;
        return;
    }
    cleardot();
    movestate = piece;
    highlight_state = piece;



    const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const row = ['1', '2', '3', '4', '5', '6', '7', '8'];

    const current_pos = piece.current_position;
    const currenttwo = current_pos[1] - 1;
    const currectone = current_pos[0].charCodeAt(0) - 97;
    const hightlight_squareid = [];
    const capture_square = [];

    for (var i = currenttwo - 1; i >= 0; i--) {
        const mn = col[currectone] + row[i];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
    }
    for (var i = (currenttwo + 1); i <= 7; i++) {
        const mn = col[currectone] + row[i];

        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
    }

    for (var i = currectone + 1; i <= 7; i++) {
        const mn = col[i] + row[currenttwo];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }

    }
    for (var i = currectone - 1; i >= 0; i--) {
        const mn = col[i] + row[currenttwo];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
    }
    highlight(piece);



    const highlight_captureid = [];


    capture_square.forEach(element => {
        if (checkpiece(element, "Black")) {
            mno(element, piece);
            if (checkredhighlightaccept === true) {
                highlight_captureid.push(element);
            }
        }
    });

    highlight_captureid.forEach(element => {
        document.getElementById(element).classList.add("capturecolor");
    });

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

function whiterook({ piece }) {
    const isred = document.getElementById(piece.current_position);
    if (isred.classList.contains("capturecolor")) {
        removered();
        cleardot();
        movepawn(highlight_state, piece.current_position, 0);
        if (highlight_state) {
            clearboard(highlight_state);
        }
        cleardot();
        return;
    }
    cleardot();
    removered();

    if (highlight_state) {
        clearboard(highlight_state);
    }
    if (piecewhiteblack == 0) {
        highlight_state = null;
        return;
    }

    if (piece == highlight_state) {
        cleardot();
        clearboard(piece);
        removered();
        highlight_state = null;
        return;
    }
    cleardot();
    movestate = piece;
    highlight_state = piece;

    highlight(piece);

    const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const row = ['1', '2', '3', '4', '5', '6', '7', '8'];

    const current_pos = piece.current_position;
    const currenttwo = current_pos[1] - 1;
    const currectone = current_pos[0].charCodeAt(0) - 97;
    const hightlight_squareid = [];
    const capture_square = [];

    for (var i = currenttwo - 1; i >= 0; i--) {
        const mn = col[currectone] + row[i];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
    }
    for (var i = (currenttwo + 1); i <= 7; i++) {
        const mn = col[currectone] + row[i];

        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
    }

    for (var i = currectone + 1; i <= 7; i++) {
        const mn = col[i] + row[currenttwo];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }

    }
    for (var i = currectone - 1; i >= 0; i--) {
        const mn = col[i] + row[currenttwo];
        if (document.getElementById(mn).innerHTML) {
            capture_square.push(mn);
            break;
        }
        else {
            checkifmovecheck(piece, mn);
            if (checkhighlight === true)
                hightlight_squareid.push(mn);
        }
    }

    const highlight_captureid = [];
    capture_square.forEach(element => {
        if (checkpiece(element, "White")) {
            mno(element, piece);
            if (checkredhighlightaccept === true) {
                highlight_captureid.push(element);
            }
        }
    });

    highlight_captureid.forEach(element => {
        document.getElementById(element).classList.add("capturecolor");
    });

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
    highlight(piece);
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

function temp({ piece }, id) {
    movepawn(piece, id);
}

function movepawn(piece, id, num) {


    if (num === 0) {
        clearcheck(greenhighlight);
        if (piece.piece_name === "White_king") {
            whitekingmove = true;
            {
                if (id == "c1") {
                    const flatarr = globalstate.flat();
                    const square = (flatarr.find(el => el.id === "a1"));
                    temp(square, "d1");
                    piecewhiteblack = (piecewhiteblack + 1) % 2;
                }
                else if (id == "g1") {
                    const flatarr = globalstate.flat();
                    const square = (flatarr.find(el => el.id === "h1"));
                    temp(square, "f1");
                    piecewhiteblack = (piecewhiteblack + 1) % 2;
                }
            }
        }
        else if (piece.piece_name === "Black_king") {
            blackkingmove = true;
            {
                if (id == "c8") {
                    const flatarr = globalstate.flat();
                    const square = (flatarr.find(el => el.id === "a8"));
                    temp(square, "d8");
                    piecewhiteblack = (piecewhiteblack + 1) % 2;
                }
                else if (id == "g8") {
                    const flatarr = globalstate.flat();
                    const square = (flatarr.find(el => el.id === "h8"));
                    temp(square, "f8");
                    piecewhiteblack = (piecewhiteblack + 1) % 2;
                }
            }
        }
        else if (piece.piece_name == "White_rook") {
            if (piece.current_position === "a1") {
                whiteleftrookmove = true;
            }
            else if (piece.current_position === "h1") {
                whiterightrookmove = true;
            }
        }
        else if (piece.piece_name == "Black_rook") {
            if (piece.current_position === "a8") {
                blackleftrookmove = true;
            }
            else if (piece.current_position === "h8") {
                blackrightrookmove = true;
            }
        }
    }

    piecewhiteblack = (piecewhiteblack + 1) % 2;

    if (piece.current_position === blackkingpos)
        blackkingpos = id;
    if (piece.current_position === whitekingpos)
        whitekingpos = id;
    checkwhiteorblack = (checkwhiteorblack + 1) % 2;

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
    if (num === 0) check(piece);
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
        cleardot();
        movepawn(highlight_state, piece.current_position, 0);
        if (highlight_state) {
            clearboard(highlight_state);
        }
        cleardot();
        return;
    }
    cleardot();
    removered();


    if (piecewhiteblack == 0) {
        highlight_state = null;
        return;
    }
    if (piece == highlight_state) {
        cleardot();
        clearboard(piece);
        removered();
        highlight_state = null;
        return;
    }
    if (highlight_state) {
        clearboard(highlight_state);
    }

    const current_pos = piece.current_position;
    const col1 = `${String.fromCharCode(current_pos[0].charCodeAt(0) - 1)}${Number(current_pos[1]) + 1}`;
    const col2 = `${String.fromCharCode(current_pos[0].charCodeAt(0) + 1)}${Number(current_pos[1]) + 1}`;
    const captureids = [col1, col2];
    let highlight_captureid = [];
    captureids.forEach(element => {
        if (checkpiece(element, "White")) {
            mno(element, piece);
            if (checkredhighlightaccept === true) {
                highlight_captureid.push(element);
            }
        }
    });
    highlight_captureid.forEach(element => {
        document.getElementById(element).classList.add("capturecolor");
    });
    highlight(piece);

    if (current_pos[1] == 2) {


        var x = `${current_pos[0]}${Number(current_pos[1]) + 1}`;
        var y = `${current_pos[0]}${Number(current_pos[1]) + 2}`;
        const hightlight_squareid = [];
        if (document.getElementById(x).innerHTML) {
        }
        else {
            checkifmovecheck(piece, x);
            if (checkhighlight === true)
                hightlight_squareid.push(x);
            if (document.getElementById(y).innerHTML) {
            }
            else {
                checkifmovecheck(piece, y);
                if (checkhighlight === true)
                    hightlight_squareid.push(y);
            }
        }
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
        highlight(piece);
    }
    else {
        var x = `${current_pos[0]}${Number(current_pos[1]) + 1}`;

        const hightlight_squareid = [];
        if (document.getElementById(x).innerHTML) {
        }
        else {
            checkifmovecheck(piece, x);
            if (checkhighlight === true)
                hightlight_squareid.push(x);
        }
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
        movepawn(highlight_state, piece.current_position, 0);
        if (highlight_state) {
            clearboard(highlight_state);
        }
        cleardot();
        return;
    }
    cleardot();
    removered();

    if (piece == highlight_state) {
        cleardot();
        removered();
        clearboard(piece);
        highlight_state = null;
        return;
    }

    if (highlight_state) {
        clearboard(highlight_state);
    }
    if (piecewhiteblack == 1) {
        highlight_state = null;
        return;
    }
    // highlight(piece);
    const current_pos = piece.current_position;
    const col1 = `${String.fromCharCode(current_pos[0].charCodeAt(0) - 1)}${Number(current_pos[1]) - 1}`;
    const col2 = `${String.fromCharCode(current_pos[0].charCodeAt(0) + 1)}${Number(current_pos[1]) - 1}`;
    const captureids = [col1, col2];
    let highlight_captureid = [];
    captureids.forEach(element => {
        if (checkpiece(element, "Black")) {
            mno(element, piece);
            if (checkredhighlightaccept === true) {
                highlight_captureid.push(element);
            }
        }
    });

    highlight_captureid.forEach(element => {
        document.getElementById(element).classList.add("capturecolor");
    });

    highlight(piece);

    if (current_pos[1] == 7) {
        var x = `${current_pos[0]}${Number(current_pos[1]) - 1}`;
        var y = `${current_pos[0]}${Number(current_pos[1]) - 2}`;
        const hightlight_squareid = [];
        if (document.getElementById(x).innerHTML) {
        }
        else {
            checkifmovecheck(piece, x);
            if (checkhighlight === true)
                hightlight_squareid.push(x);
            if (document.getElementById(y).innerHTML) {
            }
            else {
                checkifmovecheck(piece, y);
                if (checkhighlight === true)
                    hightlight_squareid.push(y);
            }
        }
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
        highlight(piece);

    }
    else {
        var x = `${current_pos[0]}${Number(current_pos[1]) - 1}`;

        const hightlight_squareid = [];
        if (document.getElementById(x).innerHTML) {
        }
        else {
            checkifmovecheck(piece, x);
            if (checkhighlight === true)
                hightlight_squareid.push(x);
        }
        dots(hightlight_squareid);
        movestate = piece;
        highlight(piece);

        hightlight_squareid.forEach(highlight => {
            globalstate.forEach(row => {
                row.forEach(element => {
                    if (element.id == highlight) {
                        element.highlight = true;
                    }
                });
            });
        });
        highlight(piece);
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
            else if (square.piece.piece_name === "White_king") {
                whiteking(square);
            }
            else if (square.piece.piece_name === "White_rook") {
                whiterook(square);
            }
            else if (square.piece.piece_name === "White_bishop") {
                whitebishop(square);
            }
            else if (square.piece.piece_name === "White_queen") {
                whitequeen(square);
            }
            else if (square.piece.piece_name === "White_knight") {
                whiteknight(square);
            }


            else if (square.piece.piece_name === "Black_rook") {
                blackrook(square);
            }
            else if (square.piece.piece_name === "Black_queen") {
                blackqueen(square);
            }
            else if (square.piece.piece_name === "Black_knight") {
                blackknight(square);
            }
            else if (square.piece.piece_name === "Black_bishop") {
                blackbishop(square);
            }
            else if (square.piece.piece_name === "Black_pawn") {
                blackpawnclick(square);
            }
            else if (square.piece.piece_name === "Black_king") {
                blackking(square);
            }
        }
        else {
            removered()
            const childelementsofclickedel = Array.from(event.target.childNodes);
            if (childelementsofclickedel.length == 1 || event.target.localName == "span") {
                if (event.target.localName == "span") {
                    const id = event.target.parentNode.id;
                    movepawn(movestate, id, 0);
                }
                else {
                    const id = event.target.id;
                    movepawn(movestate, id, 0);
                }
            }
            else {
                cleardot();
                if (highlight_state) {
                    clearboard(highlight_state);
                }
                highlight_state = null;
                movestate = null;
            }
        }
    })
}

export { agrawal };