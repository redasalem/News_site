// تحديد Media Query
const mediaQuery = window.matchMedia("(max-width: 992px)");

// الدالة التي تريد تشغيلها
function handleScreenChange(e) {
  if (e.matches) {
    var swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay:true,
      loop:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  
  } else {
    var swiper = new Swiper(".swiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay:true,
      loop:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  
  }
}

// الاستماع لتغيرات الشاشة
mediaQuery.addEventListener("change", handleScreenChange);

// استدعاء الدالة لأول مرة عند تحميل الصفحة
handleScreenChange(mediaQuery);





// print currentYear

  let currentYear=new Date().getFullYear();
  document.getElementById('year').innerHTML=currentYear;