$(document).ready(function()
{
    $(".heart").on("click", function(){
        $(this).toggleClass("is-active");
    });

// change navbar color when scroll page
    $(window).scroll(function(){
        var scroll= $(window).scrollTop();
        if(scroll > 50 ){
            $(".nav").css("background", "#fff");
            $(".nav").css("box-shadow","rgba(0, 0, 0, 0.1) 0px 4px 12px");
        }
        else
        {
            $(".nav").css("background", "transparent");
            $(".nav").css("box-shadow", "none");

        }
    });

    //mobile Navbar
    const mobile = document.querySelector(".burger-btn");
    const mobileLink= document.querySelector(".nav-menus");

    mobile.addEventListener("click", function(){
        mobile.classList.toggle(".is-active");
        mobile.classList.toggle("active");
    })
    //close menu when click
    mobileLink.addEventListener("click", function(){
        const menubars=document.querySelector(".is-active");
        if(window.innerWidth <= 768 && menubars)
        {
            mobile.classList.toggle("is-active");
            mobileLink.classList.remove("active");
        }
    })


//heart
    $(".heart").on("click", function(){
        $(this).toggleClass("is-active");
    });

//filter
    var mixer= mixitup('.product-list',{
        selectors:{
            target: '.product-card'
        },
        animation: {
            duration: 300
        }
    });


// Swiper
    var swiper= new Swiper(".mySwiper",{
        loop:true,
        autoplay:{
            delay:2500,
            disableOnInteraction:false,
        },
        slidePerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable:true,
        },
        breakpoint: {
            640:{
                slidesPerView: 2,
                spaceBetween: 20,

            },
            768:{
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024:{
                slidesPerView: 3,
                spaceBetween: 50,
            },
        }
    });
})