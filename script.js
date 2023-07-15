const navs = document.querySelectorAll("nav a");
console.log(navs);
let navItems = [];
navs.forEach((e)=>{
    let i = e.href.split('#')[1];
    console.log(i);
    navItems.push(i)
})
console.log(navItems);