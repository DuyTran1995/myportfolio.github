document.addEventListener("DOMContentLoaded",function(){
    // Scroll Menu
    var menu = document.querySelector(".menu");
    var html = document.querySelector(".html");
    var css = document.querySelector(".css");
    var js = document.querySelector(".js");
    var experiences = document.querySelector(".experiences-menu");
    var education = document.querySelector(".education-menu");
    var skills = document.querySelector(".skills-menu");
    var portfolio = document.querySelector(".portfolio-menu");
    var contact = document.querySelector(".contact-menu")
    var scrollMenu = function(){
        if(window.pageYOffset >= 450){
            menu.classList.add("visible");
        }
        else{
            menu.classList.remove("visible");
        }
    }
    window.addEventListener("scroll",scrollMenu);


    // Animation Scroll
    // var skill = document.querySelector(".skills");
    // skill.innerHTML = "X: " + skill.offsetLeft + "Y: " +skill.offsetTop;
    var srollAnimateHTML = function (){
        if(window.pageYOffset >= 100){
            html.classList.add("scrollHTML");
            css.classList.add("scrollCss");
            js.classList.add("scrollJs");
        }
        else{
            html.classList.remove("scrollHTML");
            css.classList.remove("scrollCss");
            js.classList.remove("scrollJs");
        }
    }
    window.addEventListener("scroll",srollAnimateHTML);

    //Scroll HighLine Menu
    var highLight = function(){
        // var experiences = document.querySelector(".experiences-menu");
        // var education = document.querySelector(".education-menu");
        // var skills = document.querySelector(".skills-menu");
        // var portfolio = document.querySelector(".portfolio-menu");
        // var contact = document.querySelector(".contact-menu")
        if(window.pageYOffset <= 50){
            experiences.style.color = "";
            education.style = "";
            skills.style.color = "";
            portfolio.style.color = "";
            contact.style.color = "";
        }
        if(window.pageYOffset >= 200){
            experiences.style.color = "white";
            education.style = "";
            skills.style.color = "";
            portfolio.style.color = "";
            contact.style.color = "";
        }
        if(window.pageYOffset >= 350){
            experiences.style = "";
            education.style.color = "white";
            skills.style.color = "";
            portfolio.style.color = "";
            contact.style.color = "";
        }
        if(window.pageYOffset >= 500){
            experiences.style = "";
            education.style = "";
            skills.style.color = "white";
            portfolio.style.color = "";
            contact.style.color = "";
        }
        if(window.pageYOffset >= 1000){
            experiences.style = "";
            education.style = "";
            skills.style.color = "";
            portfolio.style.color = "white";
            contact.style.color = "";
        }
        if(window.pageYOffset >= 1300){
            experiences.style = "";
            education.style = "";
            skills.style.color = "";
            portfolio.style.color = "";
            contact.style.color = "white";
        }
            
    }
    window.addEventListener("scroll",highLight)



    // Scroll To Menu
    var scrollToEle = function(){
        // Workexperiences Y = 537
        // Education Y = 680
        // Skills Y = 935
        // Portfolio Y = 1145
        // Get posY
        // document.querySelector(".getintouch").innerHTML = "Y: " + document.querySelector(".getintouch").offsetTop;

    }
    experiences.addEventListener("click",scrollToEle)
    // Toggle Button
    var btnTop = document.querySelector(".scrollTop");
    function ToggleBtn(){
        if(window.scrollY >= 800 ){
            btnTop.classList.add("visibleToggle");
        }
        else{
            btnTop.classList.remove("visibleToggle");
        }
    }
    window.addEventListener("scroll",ToggleBtn);

})



window.onload = function(){
    var btnTop = document.querySelector(".scrollTop");
    //Scroll To Top
    btnTop.onclick = function(){
        var length = window.scrollY;
        var posY = length;
        var scrollToTop = function (){
            posY = (posY - length/100).toFixed(0);
            if(posY > 0){
                window.scrollTo(0,posY);
            }
            else{
                clearInterval(loop);
            }
        }
        var loop = setInterval(scrollToTop,1);
    }
    
    var checked = document.querySelectorAll('.checked');
    var animaChecked = function(){
        for(var i=0;i<checked.length;i++){
            if(window.scrollY >= 1200){
                checked[i].style.left = "-10px";
                checked[i].style.visibility = "visible";
                checked[i].style.transitionDelay = 0.2*i +"s";
            }
            if(window.scrollY < 1199){
                checked[i].style = "";
                checked[i].style.visibility = "hidden";
            }
        }
    }
    window.addEventListener('scroll',animaChecked);
}
