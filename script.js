const navs = document.querySelectorAll("nav a");
let spans = document.querySelectorAll("nav a span");
let main = document.querySelector("body > main");
let secs = document.querySelectorAll('main > section');
navs.forEach((e)=>{

    e.addEventListener("click",()=>{
        let i = e.href.split('#')[1];
        let span = e.querySelector('span');
        removeActive();
        console.log("rem");
        main.scrollBy(0,10);
        span.classList.add('navActive');
    })
})
function removeActive(){
    spans.forEach((e)=>{
        if(e.classList.contains("navActive")){
            e.classList.remove("navActive");
        }
    })
}
// console.log(main.scrollTop);
main.addEventListener("scroll",()=>{
    for(i=0;i<secs.length;i++){
        let s = secs[i];
        if(main.scrollTop <= (s.scrollHeight + s.offsetTop - main.offsetTop -5)){
            navs.forEach((e)=>{
                let span = e.querySelector('span');
                if(s.id === e.href.split('#')[1]  &&  (!(span.classList.contains("navActive")))){
                    console.log("set active");
                    removeActive();
                    span.classList.add('navActive');
                }
            })
            break;
        }
    }
})
// -------------------nav animation end-----------------------
