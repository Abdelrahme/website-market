const input=document.querySelector(".input")

const warning2=document.getElementById("warning2")
input.oninput= function (){
    const codelength=this.value.length;
    const max=14;
    if(codelength > max){
            
            warning2.hidden=false;
         
        }
    else{
     
        warning2.hidden=true;

    }
};

