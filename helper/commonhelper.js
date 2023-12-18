import { globalstate } from "../index.js"


//function to check if piece exist of opponent or not
function checkpieceofopponentonelement(id,color){
    const flatarr=globalstate.flat();
    const opponentcolor= color==="White"?"Black":"White"; 
    for (let index = 0; index < flatarr.length; index++) {
        const element = flatarr[index];
        if(element.id===id)
        {
            if(element.piece && element.piece.piece_name.includes(opponentcolor))
            {
               const el= document.getElementById(id);
            //    console.log(el);
               el.classList.add("capturecolor");
               element.capturehighlight=true;
            }
            break;
        }
        
    }
    return false;

}

export{checkpieceofopponentonelement}