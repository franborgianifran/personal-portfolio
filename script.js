
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    })
});
document.querySelector('.menu').addEventListener('click', ()=>{
    document.querySelector('.menu').classList.remove('active')
    document.querySelector('.menu-btn i').classList.remove('active');
})
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 200){
        document.querySelector('.scroll-up-btn').classList.add('show');
    }
    else{
        document.querySelector('.scroll-up-btn').classList.remove('show');
    }
})

// Typed JS Animation

var typed = new Typed(".typing", {
    strings: [
       "Freelancer", "Developer", "Engenieer", "Student" 
    ],
    typeSpeed:100,
    backSpeed: 60,
    loop:true
});
var typed2 = new Typed(".typing2", {
    strings: [
       "Freelancer", "Web Developer", "Engenieer", "Student" 
    ],
    typeSpeed:100,
    backSpeed: 60,
    loop:true
});


const loaderElement = document.getElementById('loader');
window.addEventListener('load', ()=>{
    loaderElement.classList.toggle('loader2');
})