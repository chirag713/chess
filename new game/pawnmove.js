
import { globalstate } from "../index.js";

let highlight_state = null;

let movestate = null;

let checkwhiteorblack = 1;


let blackkingpos = "e8";
let whitekingpos = "e1";


function clearcheck() {
    var xyz = document.getElementById(blackkingpos);

    if (xyz.classList.contains("check")) {
        xyz.classList.remove("check");
    }
    xyz = document.getElementById(whitekingpos);

    if (xyz.classList.contains("check")) {
        xyz.classList.remove("check");
    }
}

function check(piece) {
    const name = piece.piece_name;
    if (name === "White_pawn") {
        const current_pos = piece.current_position;
        const col1 = `${String.fromCharCode(current_pos[0].charCodeAt(0) - 1)}${Number(current_pos[1]) + 1}`;
        if (blackkingpos === col1) {
            document.getElementById(blackkingpos).classList.add("check");
        }
        else {
            const col2 = `${String.fromCharCode(current_pos[0].charCodeAt(0) + 1)}${Number(current_pos[1]) + 1}`;
            if (blackkingpos === col2) {
                document.getElementById(blackkingpos).classList.add("check");
            }
        }
    }
    else if (name === "Black_pawn") {
        const current_pos = piece.current_position;
        const col1 = `${String.fromCharCode(current_pos[0].charCodeAt(0) - 1)}${Number(current_pos[1]) - 1}`;
        if (whitekingpos === col1) {
            document.getElementById(blackkingpos).classList.add("check");
        }
        else {
            const col2 = `${String.fromCharCode(current_pos[0].charCodeAt(0) + 1)}${Number(current_pos[1]) - 1}`;
            if (whitekingpos === col2) {
                document.getElementById(blackkingpos).classList.add("check");
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
            }
        });

    }
}

function blackknight({ piece }) {


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
            highlight_captureid.push(element);
        }
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
        if (highlight_state) {
            clearboard(highlight_state);
        }
        return;
    }
    removered();




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
            highlight_captureid.push(element);
        }
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

function whitequeen({ piece }) {
    cleardot();


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
            highlight_captureid.push(element);
        }
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
    cleardot();


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
            highlight_captureid.push(element);
        }
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
    cleardot();


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
            highlight_captureid.push(element);
        }
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
    cleardot();


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
            highlight_captureid.push(element);
        }
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
    cleardot();
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
            hightlight_squareid.push(mn);
        }
    }



    const highlight_captureid = [];


    capture_square.forEach(element => {
        if (checkpiece(element, "Black")) {
            highlight_captureid.push(element);
        }
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
    cleardot();
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
            hightlight_squareid.push(mn);
        }
    }



    const highlight_captureid = [];


    capture_square.forEach(element => {
        if (checkpiece(element, "White")) {
            highlight_captureid.push(element);
        }
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


function attackpawn(piece, id) {

}
function movepawn(piece, id) {
    checkwhiteorblack=(checkwhiteorblack+1)%2;
    clearcheck();
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
    check(piece);
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
    cleardot();
    const isred = document.getElementById(piece.current_position);

    if (isred.classList.contains("capturecolor")) {
        removered();
        attackpawn(movestate, piece.current_position);

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


        var x = `${current_pos[0]}${Number(current_pos[1]) + 1}`;
        var y = `${current_pos[0]}${Number(current_pos[1]) + 2}`;
        const hightlight_squareid = [];
        if (document.getElementById(x).innerHTML) {
        }
        else {
            hightlight_squareid.push(x);
            if (document.getElementById(y).innerHTML) {
            }
            else {
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
    }
    else {
        var x = `${current_pos[0]}${Number(current_pos[1]) + 1}`;

        const hightlight_squareid = [];
        if (document.getElementById(x).innerHTML) {
        }
        else {
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
    cleardot();
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
        var x = `${current_pos[0]}${Number(current_pos[1]) - 1}`;
        var y = `${current_pos[0]}${Number(current_pos[1]) - 2}`;
        const hightlight_squareid = [];
        if (document.getElementById(x).innerHTML) {
        }
        else {
            hightlight_squareid.push(x);
            if (document.getElementById(y).innerHTML) {
            }
            else {
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

    }
    else {
        var x = `${current_pos[0]}${Number(current_pos[1]) - 1}`;

        const hightlight_squareid = [];
        if (document.getElementById(x).innerHTML) {
        }
        else {
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

function agrawal() {
    document.getElementById("root").addEventListener("click", function (event) {
        if (event.target.localName === "img") {

            const clickedid = event.target.parentNode.id;
            const flatarr = globalstate.flat();
            const square = (flatarr.find(el => el.id === clickedid));
            if (checkwhiteorblack == 1) {
                if (square.piece.piece_name === "White_pawn") {
                    whitepawnclick(square);
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
            }
            else {
                if (square.piece.piece_name === "Black_queen") {
                    blackqueen(square);
                }
                else if (square.piece.piece_name === "Black_rook") {
                    blackrook(square);
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
                highlight_state = null;
                movestate = null;
            }
        }
    })
}

export { agrawal };