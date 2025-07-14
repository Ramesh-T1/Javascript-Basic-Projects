const reviews=[
    {
        id:1,
        name:"Pikachu",
        job:"UX Designer",
        img:"./images/jon-geng-4Cb8q7Ld5rs-unsplash.jpg",
        info:"Lorem20"
    },
    {
        id:2,
        name:"Squertel",
        job:"Game Developer",
        img:"./images/karsten-winegeart-KvkM95efjIc-unsplash.jpg",
        info:"Lorem30"
    },
    {
        id:3,
        name:"Charizard",
        job:"Node JS developer",
        img:"./images/max-petrunin-8wLRzTPtwAA-unsplash.jpg",
        info:"Lorem40"
    },
    {
        id:4,
        name:"Dragonite",
        job:"Javascript Developer",
        img:"./images/peter-thomas-ISezKSUL2gk-unsplash.jpg",
        info:"Lorem50"
    }
]
const img=document.querySelector(".image");
const name=document.querySelector(".name");
const job=document.querySelector(".job");
const info=document.querySelector(".info");

const prvbtn=document.querySelector(".prev-btn");
const nxtbtn=document.querySelector(".next-btn");
const rndbtn=document.querySelector(".rndm-btn");

let currentItem=0;

window.addEventListener("DOMContentLoaded",function(){
    showPerson();
})

function showPerson(){
    const item=reviews[currentItem];
    img.src=item.img;
    name.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.info;
}

prvbtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem<0){
      currentItem=reviews.length-1;
    }
    showPerson();
})

nxtbtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
    showPerson();
})

rndbtn.addEventListener("click",function(){
    currentItem=Math.floor(Math.random()*(reviews.length-1));
    console.log(currentItem);
    showPerson();
})
