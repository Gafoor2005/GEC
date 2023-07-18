const navs = document.querySelectorAll("nav a");
let spans = document.querySelectorAll("nav a span");
let main = document.querySelector("body > main");
let secs = document.querySelectorAll('main > section');
navs.forEach((e)=>{

    e.addEventListener("click",()=>{
        let i = e.href.split('#')[1];
        let span = e.querySelector('span');
        removeActive();
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
        document.getElementById('schedule').scrollIntoView();
    })
    r.querySelector('.eveDate').addEventListener('click',()=>{
        r.querySelector('.info').style.display = 'flex';
        r.querySelector('.info').classList.add('displayInfo');
        document.getElementById('schedule').scrollIntoView();
        slideDates();
    })
    r.querySelector('.eveTitle').addEventListener('click',()=>{
        r.querySelector('.info').style.display = 'flex';
        r.querySelector('.info').classList.add('displayInfo');
        document.getElementById('schedule').scrollIntoView();
        slideDates();
    })
    
    r.querySelector('.info > .back').addEventListener('click',()=>{
        
        r.querySelector('.info').classList.remove('displayInfo');
        setTimeout(() => {
            if( r.querySelector('.info').style.display != 'none'){
                r.querySelector('.info').style.display = 'none';
            }
        }, 500);
        slideDates();
    })
})
// --------------------------schedule end--------------------------
secs.forEach(s=>{
    let cards = s.querySelectorAll(".card");
    cards.forEach(c => {
        c.querySelector('.cardDisplay').addEventListener("click",()=>{
            // s.scrollIntoView();
            main.style.overflowY = "hidden"
            c.querySelector('.cardPage').style.left = '0%'
            c.querySelector('.cardPage').style.top = main.scrollTop + 'px';
        })
        document.querySelector('header').addEventListener('click',()=>{
            if( c.querySelector('.cardPage').style.left == '0%'){
                main.style.overflowY = "scroll"
                c.querySelector('.cardPage').style.left = '-100%'

            }
        })
        c.querySelector('.cardPage .back').addEventListener('click',()=>{
            main.style.overflowY = "scroll"
            c.querySelector('.cardPage').style.left = '-100%'
        })
    });
})

// --------------------------responsive start--------------------------
if(window.innerWidth <= 976){

    let nav = document.querySelector('nav')
    let navsLis = document.querySelectorAll('nav ul li');
    navs.forEach((n)=>{
        n.addEventListener('click',()=>{
            setTimeout(() => {
                nav.style.opacity = 0;
                nav.classList.remove('dropNav');
                setTimeout(() => {
                    nav.style.display = "none";
                    document.querySelector('header svg').style.opacity = 1;
                }, 300);
            }, 2000);
        })
    })
    document.querySelector('header svg').addEventListener('click',(e)=>{
        e.target.style.opacity = 0;
        nav.style.display = 'block';
        setTimeout(() => {
            nav.style.opacity = 1;
            nav.classList.add('dropNav');
        }, 100);
    })
}
let size;
function setSize(){
    if(window.innerWidth > 1140){
        return 1;
    }
    else if (window.innerWidth > 976){
        return 2;
    }
    else if (window.innerWidth > 875){
        return 3;
    }
}
size = setSize();
window.onresize = ()=>{
    let newSize = setSize();
    if(size != newSize){
        console.log(newSize);
        location.reload();
    }
}