const num=document.getElementById("speed")
const t="We love programming";
function txt(){
document.getElementById("text").innerHTML+=t
}
let i=1;

function running(){
  
    document.getElementById("text").innerHTML=t.slice(0,i)

    i++;
    if(i>t.length){
        i=1;
        document.getElementById("text").innerHTML+=""
    }
    setTimeout(running,500/num.value)
}
running();
// txt()
