const makaze = document.getElementById('makaze');
const papir = document.getElementById('papir');
const kamen = document.getElementById('kamen');
const protivnikRez = document.getElementById('protivnikRez');
const jaRez = document.getElementById('jaRez');
const exitModal = document.getElementById("exit");
const modal = document.getElementById("modal-wrapper");
const play_again = document.getElementById("play_again");
const oznaka = document.getElementById("oznaka");
const text_rezultat = document.getElementById('text-rezultat');
const slika1 = document.getElementById('slika1');
const slika2 = document.getElementById('slika2');


var jaRezBr = 0;
var protivnikRezBr = 0;





function UpdateRezultat (rezultat){
    if(rezultat === 0){
        if(oznaka.classList.contains("pobeda")){
            oznaka.classList.remove("pobeda");
        }
        if(oznaka.classList.contains("gubitak")){
            oznaka.classList.remove("gubitak");
        }
        oznaka.classList.add("nereseno");
        text_rezultat.innerHTML="NERESENO";
    }
    else if(rezultat === 1){
        protivnikRezBr++;
        protivnikRez.innerHTML = protivnikRezBr;
        if(oznaka.classList.contains("nereseno")){
            oznaka.classList.remove("nereseno");
        }
        if(oznaka.classList.contains("pobeda")){
            oznaka.classList.remove("pobeda");
        }
        text_rezultat.innerHTML="IZGUBIO SI";
        oznaka.classList.add("gubitak");
        
    }
    else if( rezultat === 2){
        jaRezBr++;
        jaRez.innerHTML = jaRezBr;
        if(oznaka.classList.contains("nereseno")){
            oznaka.classList.remove("nereseno");
        }
        if(oznaka.classList.contains("gubitak")){
            oznaka.classList.remove("gubitak");
        }
        text_rezultat.innerHTML="POBEDIO SI";
        oznaka.classList.add("pobeda");
    }
    
    modal.style.display="flex";

}


function rezultat (igrac, rez){
    let rezKon;
    if(igrac === rez){
        rezKon = 0;
        return rezKon;
    }
    else if( igrac === 1 && rez === 3 || igrac === 2 && rez ===1 || igrac === 3 && rez === 2){
        rezKon = 1;
        return rezKon;
    }
    else{
        rezKon = 2;
        return rezKon;
    }


}

function igraj(igrac){

    switch (igrac){
        case 1:
            slika1.src = "./slike/icons8-hand-58.png";
            break;
        case 2:
            slika1.src = "./slike/icons8-hand-rock-58.png";
            break;
        case 3:
            slika1.src = "./slike/icons8-scissors-58.png";
            break;
    }
    const rand = Math.random()*100;
    let rez = 0;
    if(rand <=33){
        rez = 1;
        slika2.src = "./slike/icons8-hand-58.png";
    }
    else if( rand > 33 && rand <=66 ){
        rez = 2;
        slika2.src = "./slike/icons8-hand-rock-58.png";
    }
    else{
        rez = 3;
        slika2.src = "./slike/icons8-scissors-58.png";
    }
    return rez;
}


exitModal.addEventListener("click",()=>{
    modal.style.display="none";
})
play_again.addEventListener("click",()=>{
    modal.style.display="none";
})

papir.addEventListener('click',() =>{
    let rez = igraj(1);
    let rezKon = rezultat(1,rez);
    UpdateRezultat(rezKon);
    //1
});
kamen.addEventListener('click',() =>{
    let rez = igraj(2);
    let rezKon = rezultat(2,rez);
    UpdateRezultat(rezKon);
    //2

});
makaze.addEventListener('click',() =>{
    let rez = igraj(3);
    let rezKon = rezultat(3,rez);
    UpdateRezultat(rezKon);
    //3
});
document.addEventListener('keyup',(e)=>{
    if(e.keyCode =='27'|| e.keyCode =='13' || e.keyCode =='32'){
        if(modal.style.display==='flex'){
            modal.style.display='none';
        }
    }
})
