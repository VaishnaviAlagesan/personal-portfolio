const text=document.querySelector(".sec-text");
const textLoad=()=>{
    setTimeout(()=>{
        text.textContent="Frontend Developer";
    },0);
    setTimeout(()=>{
        text.textContent="Web Developer";
    },4000);
    setTimeout(()=>{
        text.textContent="Python Full Stack Developer";
    },8000);
}
textLoad();
setInterval(textLoad,12000)