const navs = document.querySelectorAll("nav a");
let navItems = [];
navs.forEach((e)=>{
    let i = e.href.split('#')[1];
    console.log(i);
    navItems.push(i)
})
navs.forEach((e)=>{

    e.addEventListener("click",()=>{
        let i = e.href.split('#')[1];
        let span = e.querySelector('span');
        removeActive();
        span.classList.add('navActive');
    })
})
function removeActive(){
    let spans = document.querySelectorAll("nav a span");
    spans.forEach((e)=>{
        if(e.classList.contains("navActive")){
            e.classList.remove("navActive");
        }
    })
}
// -------------------nav animation end-----------------------
