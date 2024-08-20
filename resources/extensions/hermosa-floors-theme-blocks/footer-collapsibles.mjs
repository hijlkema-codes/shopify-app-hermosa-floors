import { animateElement } from "./utils/animations.mjs";
import { ensureElementHasId } from "./utils/html.mjs";

const PARENT_SELECTOR = ".footer__container";
const POT_COLLAPSIBLE_SELECTOR = ":scope .footer__card-grid .footer__block ";
const COLLAPSIBLE_TITLE_SELECTOR = ":scope .footer__title";
const COLLAPSIBLE_CONTENT_SELECTOR = ":scope .footer__title + *";

const createCollapsibles = () => {
  // When ready look for the footer collapsibles.
  const footer = document.querySelector(PARENT_SELECTOR);
  const collapsibles = Array.from(
    footer.querySelectorAll(POT_COLLAPSIBLE_SELECTOR)
  ).filter((collapsible) =>
    collapsible.querySelector(COLLAPSIBLE_TITLE_SELECTOR)
  );
  const hasCollapsibles = collapsibles.length > 0;

  // If there are no collapsibles, stop execution.
  if (!hasCollapsibles) {
    return;
  }

  // Create the collapsibles.
  collapsibles.forEach((collapsible) => createCollapsible(collapsible));
};

/**
 * @param {HTMLElement} collapsibleWrapper
 */
const createCollapsible = (collapsibleWrapper) => {
  /**  @type {HTMLElement} */
  const title = collapsibleWrapper.querySelector(COLLAPSIBLE_TITLE_SELECTOR);
  /** @type {HTMLElement} */
  const content = collapsibleWrapper.querySelector(
    COLLAPSIBLE_CONTENT_SELECTOR
  );

  collapsibleWrapper.classList.add("footer__collapsible");

  // Turn the title div HTML into a button using roles and aria attributes to make it accessible.
  title.setAttribute("role", "button");
  title.setAttribute("aria-expanded", "false");
  title.setAttribute("aria-controls", ensureElementHasId(content));

  // Hide the content by default.
  content.setAttribute("aria-hidden", "true");

  const contentShowAnimation = () =>
    animateElement(content, [
      { height: "0px" },
      { height: `${content.scrollHeight}px` },
    ]);
  const contentHideAnimation = () =>
    animateElement(content, [
      { height: `${content.scrollHeight}px` },
      { height: "0px" },
    ]);

  // Add the event listener to the button.
  title.addEventListener("click", () => {
    const expanded = title.getAttribute("aria-expanded") === "true";
    const hidden = content.getAttribute("aria-hidden") === "true";

    title.setAttribute("aria-expanded", !expanded);
    content.setAttribute("aria-hidden", !hidden);

    // If the content is hidden, show it.
    if (hidden) {
      contentShowAnimation();
    } else {
      contentHideAnimation();
    }
  });

  // Set the content height to 0.
  contentHideAnimation();
};

createCollapsibles();
