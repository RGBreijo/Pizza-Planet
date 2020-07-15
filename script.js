

let mobileNavBtn = document.querySelector("#mobile-nav-btn").addEventListener('click', mobileNav);

let mobileMenu = Array.from(document.querySelectorAll(".drop-down-header"));


for(i = 0; i < mobileMenu.length; i++)
{
    mobileMenu[i].addEventListener('click', dropDown);
}



function mobileNav()
{
    
    mobileNav = document.querySelector("#mobile-nav");
    mobileNavWidth = mobileNav.offsetWidth;

    mobileNavContent = document.querySelector("#nav-content");


    if (mobileNavWidth === 0)
    {   
        mobileNav.style.visibility = "visible";
        mobileNav.style.width = "60%";
        mobileNav.style.transition = "width 200ms";

    }else
    {
        mobileNav.style.width = "0";
        mobileNavContent.width = "0";
        mobileNav.style.transition = "width 200ms";
    }
}


function dropDown(e)
{   

    let dropDown  = "";

    e = e || window.event;  
    e = e.target || e.srcElement;

    if (e.getAttribute("class") === "drop-down-header") 
    {
        dropDown = e.nextElementSibling.firstElementChild;
    }else
    {
        dropDown = e.parentElement.nextElementSibling.firstElementChild;
    }


    dropDownNavWidth = dropDown.offsetHeight;


    if (dropDownNavWidth === 0)
    {
        dropDown.style.transition = "height 200ms";
        dropDown.style.height = "305px"; 
 
    }else
    {
        dropDown.style.height = "0";
        dropDown.style.transition = "height 200ms";
    }

}












