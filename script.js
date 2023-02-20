let singleElement = (element)=> document.querySelector(element);
var myNav = document.querySelector('#navbar');
// add background to nav when scroll down
window.onscroll = function () { 
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        myNav.classList.add("nav-colored");
       myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};

// add active class when sections change to navbars
let sections = document.querySelectorAll("section");
let navLists = document.querySelectorAll('ul li');

function activeList(){
    let current_section = sections.length;
    while(--current_section && window.scrollY + 97 < sections[current_section].offsetTop){};
    navLists.forEach((navList)=>{
        navList.classList.remove("active");
    })
    navLists[current_section].classList.add("active");
}
window.addEventListener("scroll", activeList);


// toggle open list on media query

const bar_btn = document.querySelector('.bars');
const nav = document.querySelector('nav');
let backdrop = document.querySelector('.icon-container');
bar_btn.addEventListener('click',()=>{
    bar_btn.classList.toggle('active');
    // backdrop.classList.add('tab-container-active');
    if(backdrop.classList.contains('tab-container-active')){
        backdrop.classList.remove('tab-container-active');
      
    }else{
        backdrop.classList.add('tab-container-active');
    }
    let tab_close = document.querySelector('.icon-container .close');
    tab_close.onclick = function(){
        backdrop.classList.remove('tab-container-active');
    }
})

// show tabs on responsive 
const btn_tabs = document.querySelectorAll('.btns'),
      header = singleElement('header');  

btn_tabs.forEach((tab_item, tab_index , tabs_itself)=>{
    tab_item.addEventListener('click',()=>{
       let activeTabColor = getComputedStyle(tab_item);
       header.style.backgroundColor = activeTabColor.backgroundColor;

       tabs_itself.forEach((tab)=>{
        tab.classList.toggle('active-nav-item', tab ===tab_item);
    })
    });
   
});

