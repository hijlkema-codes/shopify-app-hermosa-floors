/**
 * @typedef {Object} ReviewStars
 * @property {string} score - The string representation of the current score.
 * @property {number} outOf - The highest available score.
 * @property {number} stars - The amount of stars available.
 *
 * @property {boolean} hasLabel - If there should be a label rendered.
 * @property {boolean} hasAnchor - If there should be an achor label.
 *
 * @property {string} label - The HTML label associated with the review stars.
 * @property {string} target - The target element selector to replace.
 * @property {string} className - The parent classname to add to the stars.
 * @property {string} href - The href for the anchor label.
 */

window.viewData = window.viewData || {};

const DRAWER_SELECTOR = "drawer-menu";

window.viewData.reviewStars = new (class {
  /**
   * @param {ReviewStars} config
   * @returns {void}
   */
  init(config) {
    this.config = config;
  }

  /**
   * The initial loop
   */
  loop() {
    const targets = document.querySelectorAll(this.config.target);
    const { hasLabel } = this.config;

    targets.forEach((target) => {
      if (hasLabel) {
        this.#renderStarsAndLabel(target);
      } else {
        this.#renderStarsOnly(target);
      }
    });
  }

  /**
   * Renders a star in place of the target element
   * @param {HTMLElement} target
   */
  #renderStarsOnly(target) {
    const { score, outOf, stars } = this.config;
    // Create a wrapper element to replace the target.
    const wrapperElement = document.createElement("div");
    wrapperElement.className = target.className;
    wrapperElement.classList.add(this.config.className);

    // Create the star element.
    const starElement = document.createElement("z-reviews.stars");
    starElement.setAttribute("score", score);
    starElement.setAttribute("out-of", outOf);
    starElement.setAttribute("stars", stars);

    // Make sure the star element is a child of the wrapper element.
    wrapperElement.append(starElement);

    // Replace the target element with the wrapper element.
    target.replaceWith(wrapperElement);
  }

  /**
   * Renders a star and a label in place of the target element
   * @param {HTMLElement} target
   */
  #renderStarsAndLabel(target) {
    const { score, outOf, stars, label, hasAnchor, href } = this.config;

    // Create a wrapper element to replace the target.
    const wrapperElement = document.createElement("div");
    wrapperElement.className = target.className;
    if (!!this.config.className)
      wrapperElement.classList.add(this.config.className);

    // Create the star element.
    const starElement = document.createElement("z-reviews.stars");
    starElement.setAttribute("rating", parseFloat(score.replace(",", ".")));
    starElement.setAttribute("out-of", outOf);
    starElement.setAttribute("stars", stars);
    starElement.setAttribute("allow-fractional", "true");

    // Create the label element
    const labelElement = document.createElement(hasAnchor ? "a" : "p");
    labelElement.innerHTML = label;
    if (hasAnchor) labelElement.href = href;

    // Make sure the star element is a child of the wrapper element.
    wrapperElement.append(starElement, labelElement);

    // Replace the target element with the wrapper element.
    target.replaceWith(wrapperElement);
  }
})();

const ownerTag = document.getElementById("review_stars_settings");
const ownerData = {
  display: ownerTag.getAttribute("data-display") === "true",
  displayLabel: ownerTag.getAttribute("data-display-label") === "true",
  displayAnchor: ownerTag.getAttribute("data-display-anchor") === "true",

  label: ownerTag.getAttribute("data-label"),
  score: ownerTag.getAttribute("data-score"),
  outOf: ownerTag.getAttribute("data-out-of"),
  stars: ownerTag.getAttribute("data-stars"),

  className: ownerTag.getAttribute("data-classname"),

  href: ownerTag.getAttribute("data-href"),
  targetReplace: ownerTag.getAttribute("data-target-replace"),
};

const handler = () => {
  window.viewData.reviewStars.init({
    score: ownerData.score,
    outOf: ownerData.outOf,
    stars: ownerData.stars,

    hasLabel: ownerData.displayLabel,
    hasAnchor: ownerData.displayAnchor,
    label: ownerData.label,

    target: ownerData.targetReplace,
    className: ownerData.className,
  });

  window.viewData.reviewStars.loop();
};

// Create a mutationobserver that triggers init when the drawer classList is changed
const observer = new MutationObserver(handler);
observer.observe(document.querySelector(DRAWER_SELECTOR), { attributes: true });

handler();
