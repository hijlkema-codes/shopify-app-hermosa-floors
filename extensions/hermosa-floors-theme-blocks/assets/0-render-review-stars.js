/**
 * @typedef {Object} ReviewStars
 * @property {number} score - The current score.
 * @property {number} outOf - The highest available score.
 * @property {number} stars - The amount of stars available.
 *
 * @property {boolean} hasLabel - If there should be a label rendered.
 *
 * @property {string} label - The HTML label associated with the review stars.
 * @property {string} target - The target element selector to replace.
 * @property {string} className - the parent classname to add to the stars.
 */

window.viewData = window.viewData || {};

window.viewData.reviewStars = new (class {
  /**
   * @param {ReviewStars} config
   * @returns {void}
   */
  constructor(config) {
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
    const { score, outOf, stars, label } = this.config;

    // Create a wrapper element to replace the target.
    const wrapperElement = document.createElement("div");
    wrapperElement.className = target.className;
    wrapperElement.classList.add(this.config.className);

    // Create the star element.
    const starElement = document.createElement("z-reviews.stars");
    starElement.setAttribute("score", score);
    starElement.setAttribute("out-of", outOf);
    starElement.setAttribute("stars", stars);

    // Create the label element
    const labelElement = document.createElement("p");
    labelElement.innerHTML = label;

    // Make sure the star element is a child of the wrapper element.
    wrapperElement.append(starElement, labelElement);

    // Replace the target element with the wrapper element.
    target.replaceWith(wrapperElement);
  }
})();

const loadedEvent = new CustomEvent("loaded:render-review-stars", {
  detail: window.viewData.reviewStars,
});
document.body.dispatchEvent(loadedEvent);
