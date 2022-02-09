///////////////////////////////////////////////////////////
// Changes the year to the current year automatically

const yearEl = document.querySelector(`.year`);
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Open and close navigation on mobile device

const btnNavEl = document.querySelector(`.btn-mobile-nav`);
const headerEl = document.querySelector(`.header`);

btnNavEl.addEventListener(`click`, function () {
  headerEl.classList.toggle(`nav-open`);
});
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Make the scroll feature work in Safari

const allLinks = document.querySelectorAll(`a:link`);
allLinks.forEach(function (link) {
  link.addEventListener(`click`, function (e) {
    e.preventDefault();
    const href = link.getAttribute(`href`);

    //Scroll back to top
    if (href === `#`)
      window.scrollTo({
        top: 0,
        behaviour: `smooth`,
      });

    // Better way of scrolling
    if (href != `#` && href.startsWith(`#`)) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behaviour: "smooth" });
    }

    //Remove navigation when scrolling
    if (link.classList.contains("main-nav-link")) {
      if (headerEl.classList.contains("nav-open")) {
        headerEl.classList.remove("nav-open");
      }
    }

    // //Scroll to cta section
    // if (href === `#cta`)
    //   window.scrollTo({
    //     top: 0,
    //     behaviour: `smooth`,
    //   });

    // //Scroll to how section
    // if (href === `#how`)
    //   window.scrollTo({
    //     top: 0,
    //     behaviour: `smooth`,
    //   });

    // //Scroll to testimonials section
    // if (href === `#testimonials`)
    //   window.scrollTo({
    //     top: 0,
    //     behaviour: `smooth`,
    //   });

    // //Scroll to meals section
    // if (href === `#meals`)
    //   window.scrollTo({
    //     top: 0,
    //     behaviour: `smooth`,
    //   });

    // //Scroll to pricing section
    // if (href === `#pricing`)
    //   window.scrollTo({
    //     top: 0,
    //     behaviour: `smooth`,
    //   });
  });
});
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Make sticky navigation appear after hero section

const sectionHeroEl = document.querySelector(`.section-hero`);

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add(`sticky`);
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove(`sticky`);
    }
  },
  {
    // In the viewport
    root: null,
    // Something happens when the viewport is 0%
    threshold: 0,
    // Why the height was set manually
    rootMargin: `-80px`,
  }
);
obs.observe(sectionHeroEl);
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions by adding margins

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
///////////////////////////////////////////////////////////
