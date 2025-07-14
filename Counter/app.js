let count=0;
const value=document.querySelector(".count");
const btns=document.querySelectorAll(".btn");

btns.forEach(function(e1){
    e1.addEventListener("click",function(e2){
        const attr=e2.currentTarget.classList;
        if(attr.contains("inc")){
            count++;
        }
        else if(attr.contains("dec")){
            count--;
        }
        else{
            count=0;
        }
        if(count>0){
            value.style.color='green';
        }else if(count<0){
            value.style.color='red';
        }else{
            value.style.color='orange';
        }
        value.textContent=count;
    })
})