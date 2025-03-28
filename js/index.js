var scrollpos = window.scrollY;
var navbar = document.getElementById("navbar");

function add_class_on_scroll() {
    navbar.classList.add("small-navbar");
}

function remove_class_on_scroll() {
    navbar.classList.remove("small-navbar");
}

window.addEventListener("scroll", function () {
    // تحديث قيمة scrollpos عند التمرير
    scrollpos = window.scrollY;

    if (scrollpos > 10) {
        add_class_on_scroll();
    } else {
        remove_class_on_scroll();
    }
});



// print currentYear

  let currentYear=new Date().getFullYear();
  document.getElementById('year').innerHTML=currentYear;