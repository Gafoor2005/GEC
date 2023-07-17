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
                    // console.log("nav set active");
                    removeActive();
                    span.classList.add('navActive');
                }
            })
            break;
        }
    }
})
// -------------------nav animation end-----------------------
let rows = document.querySelectorAll(".table > .row");
let table = document.querySelector("#schedule > div > .table");
let topHeight = 0;
function slideDates(){
    rows.forEach((e)=>{
        e.classList.toggle('slideOut');
    })
}
rows.forEach((r)=>{
    r.querySelector('.info').style.top = -topHeight + 'px';
    // r.querySelector('.info').style.maxHeight = table.clientHeight + 'px';
    topHeight += r.clientHeight + 16
    r.querySelector('.next').addEventListener('click',()=>{
        r.querySelector('.info').style.display = 'flex';
        r.querySelector('.info').classList.add('displayInfo');
        slideDates();
    })
    r.querySelector('.eveDate').addEventListener('click',()=>{
        r.querySelector('.info').style.display = 'flex';
        r.querySelector('.info').classList.add('displayInfo');
        slideDates();
    })
    r.querySelector('.eveTitle').addEventListener('click',()=>{
        r.querySelector('.info').style.display = 'flex';
        r.querySelector('.info').classList.add('displayInfo');
        slideDates();
    })
    
    r.querySelector('.info > .back').addEventListener('click',()=>{
        
        r.querySelector('.info').classList.remove('displayInfo');
        setTimeout(() => {
            r.querySelector('.info').style.display = 'none';
        }, 500);
        slideDates();
    })
})