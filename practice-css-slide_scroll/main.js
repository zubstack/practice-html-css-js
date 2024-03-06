function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide(e) {
  sliderImages.forEach((image) => {
    //slideInAt has the exact position when the image is half displayed:
    const slideInAt = window.scrollY + window.innerHeight - image.height / 2;
    // console.log(slideInAt);
    //Has the exact position when the image is full displayed
    const imageBottom = image.offsetTop + image.height;

    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      image.classList.add("active");
    } else {
      image.classList.remove("active");
    }
  });
}
//Debounce function avoids the excessive number of times the other function is executed.
window.addEventListener("scroll", debounce(checkSlide));

// Navigation
const nav = document.querySelector("#navbar-main");
const topOfNav = nav.offsetTop;

const fixNav = () => {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
    console.log("hit");
  } else {
    document.body.classList.remove("fixed-nav");
    document.body.style.paddingTop = 0;
  }
};

window.addEventListener("scroll", fixNav);
