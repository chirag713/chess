import { globalstate } from "../index.js";
import { renderhighlight } from "../render/main.js";
import { clearHighlight } from "../render/main.js";
import { selfhighlight } from "../render/main.js";
import { clearpreviousselfhighlight } from "../render/main.js";
import { moveelemet } from "../render/main.js";
import { checkpieceofopponentonelement } from "../helper/commonhelper.js";
import { globalstaterenderer } from "../render/main.js";
// highlighted or not
let highlight_state = false;

//current self highlighted square
let selfhighlightstate = null;

//in move state or not
let movestate = null;

//local function that will clear highlight with state
function clearhighlightlocal() {
        clearHighlight();
        highlight_state = false;
}



//move piece from a square to other

function movepiecefromxtoy(from, to) {
        // console.log(from, to);
}


//black pawn
function WhitePawnclick({ piece }) {
        // globalstaterenderer();

        //clear any previous highlight
        clearhighlightlocal();

        clearpreviousselfhighlight(selfhighlightstate);


        //if clicked on same element twice
        if (piece == selfhighlightstate) {
                clearpreviousselfhighlight(selfhighlightstate);
                selfhighlightstate = null;
                return;
        }

        //highlight clicked element
        

        //highlighting logic
        selfhighlight(piece);
        highlight_state = true;

        selfhighlightstate = piece;

        //add pice as move state
        movestate = piece;

        const flatarr = globalstate.flat();

        const current_pos = piece.current_position;

        // for initiating pawn move
        if (current_pos[1] == 2) {
                const hightlight_squareid = [
                        `${current_pos[0]}${Number(current_pos[1]) + 1}`,
                        `${current_pos[0]}${Number(current_pos[1]) + 2}`,
                ];

                hightlight_squareid.forEach(highlight => {
                        globalstate.forEach(row => {
                                row.forEach(element => {
                                        if (element.id == highlight) {
                                                element.highlight = true;
                                        }
                                });
                        });
                        highlight_state = true;
                });
                // globalstaterenderer();
        }
        else {

                const col1 = `${String.fromCharCode(current_pos[0].charCodeAt(0) - 1)}${Number(current_pos[1]) + 1}`;
                const col2 = `${String.fromCharCode(current_pos[0].charCodeAt(0) + 1)}${Number(current_pos[1]) + 1}`;


                const hightlight_squareid = [
                        `${current_pos[0]}${Number(current_pos[1]) + 1}`,
                ];

                const captureids = [col1, col2];
                captureids.forEach(element => {
                        if (checkpieceofopponentonelement(element, "White")) {
                                hightlight_squareid.push(element);

                        }
                });
                // console.log(captureids);

                hightlight_squareid.forEach(highlight => {
                        globalstate.forEach(row => {
                                row.forEach(element => {
                                        if (element.id == highlight) {
                                                element.highlight=true;
                                        }

                                });
                        });
                        highlight_state = true;
                });
        }
        globalstaterenderer();
}

//white pawn
function BlackPawnclick({ piece }) {


        // if (selfhighlightstate) {
        //         movepiecefromxtoy(selfhighlightstate, piece);
        //         return;
        // }

        clearhighlightlocal();

        //if clicked on same element twice
        if (piece == selfhighlightstate) {

                clearpreviousselfhighlight(selfhighlightstate);
                selfhighlightstate = null;
                return;
        }


        // console.log(piece);



        //highlight clicked element
        // let selfhighlightstate=null;
        clearpreviousselfhighlight(selfhighlightstate);
        selfhighlight(piece);
        highlight_state = true;
        selfhighlightstate = piece;

        //add pice as move state

        movestate = piece;
        // console.log(movestate);



        const flatarr = globalstate.flat();

        const current_pos = piece.current_position;

        // for initiating pawn move
        if (current_pos[1] == 7) {
                const hightlight_squareid = [
                        `${current_pos[0]}${Number(current_pos[1]) - 1}`,
                        `${current_pos[0]}${Number(current_pos[1]) - 2}`,
                ];
                //  console.log(hightlight_squareid);


                //clear any highlighted square


                hightlight_squareid.forEach(highlight => {
                        globalstate.forEach(row => {
                                row.forEach(element => {
                                        if (element.id == highlight) {
                                                element.highlight=true;
                                        }

                                });
                        });
                        //      if(highlight_state) clearHighlight();
                        //      renderhighlight(highlight);
                        highlight_state = true;



                });

        }
        else {
                const hightlight_squareid = [
                        `${current_pos[0]}${Number(current_pos[1]) - 1}`,

                ];
                //  console.log(hightlight_squareid);


                //clear any highlighted square



                hightlight_squareid.forEach(highlight => {
                        globalstate.forEach(row => {
                                row.forEach(element => {
                                        if (element.id == highlight) {
                                                element.highlight=true;
                                        }

                                });
                        });
                        //      if(highlight_state) clearHighlight();
                        //      renderhighlight(highlight);
                        highlight_state = true;



                });

        }
        globalstaterenderer();
}

function chiragevent() {
        document.getElementById("root").addEventListener("click", function (event) {
                if (event.target.localName === "img") {
                        const clickedid = event.target.parentNode.id;
                        const flatarr = globalstate.flat();
                        const square = (flatarr.find(el => el.id === clickedid));
                        // console.log(square.piece.piece_name);
                        if (square.piece.piece_name === "White_pawn") {
                                WhitePawnclick(square);
                        }
                        else if (square.piece.piece_name === "Black_pawn") {
                                BlackPawnclick(square);
                        }

                }
                else {
                        const childelementsofclickedel = Array.from(event.target.childNodes);
                        if (childelementsofclickedel.length == 1 || event.target.localName == "span") {
                                if (event.target.localName == "span") {
                                        const id = event.target.parentNode.id;
                                        moveelemet(movestate, id);
                                        
                                }
                                else {
                                        const id = event.target.id;
                                        moveelemet(movestate, id);
                                        
                                }
                        }
                        else {

                                //clear highlights  
                                clearhighlightlocal();
                                clearpreviousselfhighlight(selfhighlightstate);
                                
                        }
                        selfhighlightstate = null;
                }
        });
}



export { chiragevent };