import GetModule from './datos.js';
const getModule = new GetModule();

class Interactive {
    // Botones NAV TABS 
    navtabs() {

        var tabs = $('.tabs');
        var selector = $('.tabs').find('a').length;
        //var selector = $(".tabs").find(".selector");
        var activeItem = tabs.find('.active');
        var activeWidth = activeItem.innerWidth();
        $(".selector").css({
            "left": activeItem.position.left + "px",
            "width": activeWidth + "px"
        });

        $(".tabs").on("click", "a", function(e) {
            e.preventDefault();
            $('.tabs a').removeClass("active");
            $(this).addClass('active');
            var activeWidth = $(this).innerWidth();
            var itemPos = $(this).position();
            $(".selector").css({
                "left": itemPos.left + "px",
                "width": activeWidth + "px"
            });
        });
    }
    // ANIMATION MOUSEOVER

    mouseAnimation() {

        const subMenuBtn = document.querySelectorAll(".drop");
        for (let i = 0; i < subMenuBtn.length; i++) {

            function mouseOver() {
                if (window.innerWidth >= 576) {
                    const subMenu = this.lastElementChild;
                    const height = subMenu.scrollHeight;
                    subMenu.style.height = height + "px";
                }
            }

            function mouseLeave() {
                if (window.innerWidth >= 576) {
                    const subMenu = this.lastElementChild;
                    subMenu.removeAttribute("style");
                }
            }

            subMenuBtn[i].addEventListener("mouseover", mouseOver);
            subMenuBtn[i].addEventListener("mouseleave", mouseLeave);
        }
    }


    // DISPLAY BLOCK TABS

    tabs() {

        const scope = document.querySelector('.gp-productos');
        const btnP = scope.querySelectorAll(".tablinks");

        for (let i = 0; i < btnP.length; i++) {
            let cityname = btnP[i].id;
            const Opencity = function(e) {
                const tabcontP = scope.querySelectorAll(".tabcontent");
                for (i = 0; i < tabcontP.length; i++) {
                    tabcontP[i].style.display = "none";
                    if (tabcontP[i].id == cityname) {
                        tabcontP[i].style.display = "block";
                    }
                }
                for (i = 0; i < btnP.length; i++) {
                    btnP[i].classList.remove("active");
                }

                e.currentTarget.className += " active";
            }
            btnP[i].addEventListener("click", Opencity);
        }
    }
}

export default Interactive;