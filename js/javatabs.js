let tabU = document.querySelector(".tabs-utilidades");
let btnU = tabU.querySelectorAll(".tablinks");
for (i = 0; i < btnU.length; i++) {
    let cityName = btnU[i].id;
    const Opencity = function(e) {
        const tabcontU = tabU.querySelectorAll(".tabcontent");
        for (i = 0; i < tabcontU.length; i++) {
            tabcontU[i].style.display = "none";
            if (tabcontU[i].id == cityName) {
                tabcontU[i].style.display = "block";
            }
        }
        for (i = 0; i < btnU.length; i++) {
            btnU[i].classList.remove("active");
        }

        e.currentTarget.className += " active";
    }
    btnU[i].addEventListener("click", Opencity);
}