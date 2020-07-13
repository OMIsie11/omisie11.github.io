/**
 * Lazy load images on page
 * First project image is loaded in standard way
 */
document.addEventListener("DOMContentLoaded", function () {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to a more compatible method here
  }
});

// Called to show or hide more info about SpaceX project
function showHideSpaceX() {
  let dots = document.getElementById("dots-more-spacex");
  let moreText = document.getElementById("span-more-spacex");
  let btn = document.getElementById("btn-more-spacex");

  showHideInfo(dots, moreText, btn);
}

// Called to show or hide more info about CoronaTracker project
function showHideCoronaTracker() {
  let dots = document.getElementById("dots-more-corona-tracker");
  let moreText = document.getElementById("span-more-corona-tracker");
  let btn = document.getElementById("btn-more-corona-tracker");

  showHideInfo(dots, moreText, btn);
}

// Called to show or hide more info about Dose Calculator project
function showHideDoseCalc() {
  let dots = document.getElementById("dots-more-dose-calc");
  let moreText = document.getElementById("span-more-dose-calc");
  let btn = document.getElementById("btn-more-dose-calc");

  showHideInfo(dots, moreText, btn);
}

// Called to show or hide more info about Coffee Productivity tracker project
function showHideCoffeeProductivity() {
  let dots = document.getElementById("dots-more-coffee-productivity");
  let moreText = document.getElementById("span-more-coffee-productivity");
  let btn = document.getElementById("btn-more-coffee-productivity");

  showHideInfo(dots, moreText, btn);
}

/**
 * Function shows/hides more info about project on "more" button click
 * @param {*} dotsSpan identifies span (...) for project
 * @param {*} moreTextSpan identifies span  with more info about project
 * @param {*} button clicked button connected with project
 */
function showHideInfo(dots, moreText, button) {
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    button.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    button.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}