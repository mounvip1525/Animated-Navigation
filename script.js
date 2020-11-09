const menuBars=document.getElementById('menu-bars');
const overlay=document.getElementById('overlay');
const nav1=document.getElementById('nav-1');
const nav2=document.getElementById('nav-2');
const nav3=document.getElementById('nav-3');
const nav4=document.getElementById('nav-4');
const nav5=document.getElementById('nav-5');

const navItems=[nav1,nav2,nav3,nav4,nav5];

//Control Navigation Animation
function navAnimation(flowdirection1,flowdirection2){
    navItems.forEach(item,index){
        item.classList.replace(`slide-${flowdirection1}-${index+1}`,`slide-${flowdirection2}-${index+1}`)
    }
}

function toggleNav(){
    menuBars.classList.toggle('change');
    overlay.classList.toggle('active-menuBar');
    if(overlay.classList.contains('active-menuBar')){
        overlay.classList.replace('overlay-slide-out','overlay-slide-in');
         navAnimation('in','out');
    }
    else{
        overlay.classList.replace('overlay-slide-in','overlay-slide-out');
        navAnimation('out','in');
    }
}
menuBars.addEventListener('click',toggleNav);
navItems.forEach(item=>{
    itemm.addEventListener('click',toggleNav);
});


