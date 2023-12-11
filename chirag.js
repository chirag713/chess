import { ROOT_DIV } from "./helper/constant";

function xyz(chirag){
        console.log(chirag); 
}

function chiragevent(){
        document.getElementById("root").addEventListener("click",xyz(chirag));
}



export{chiragevent};