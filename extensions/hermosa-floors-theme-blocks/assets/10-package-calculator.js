const zippy = {
  rootUrl: window.Shopify.routes.root,
  cartAjax: window.Shopify.routes.root + "/cart.js",
};

const packageCalculatorSelector = "package-calculator";
const cartDrawerSelector = "cart-drawer";

const TRANSFORMERS = {
  /**
   * @param {string} value The string representation of the price in cents
   * @returns {number} The price as float.
   */
  parse_float: (value) => parseFloat(value),
  /**
   * @param {string} value
   * @returns {boolean}
   */
  parse_boolean: (value) =>
    ["true", "1", "on", "yes"].includes(value.toLowerCase()),

  /**
   * Transform a cents number value into a string representation of the price.
   * @param {number} value The price in cents
   * @returns {string} The price as string.
   */
  to_string: (value) => {
    const formatter = new Intl.NumberFormat(undefined, {
      currency: "EUR",
      style: "currency",
    });

    return formatter.format(value / 100);
  },
};

const transform = (value, transformers) => {
  return transformers.reduce((acc, transformer) => {
    if (TRANSFORMERS[transformer]) {
      return TRANSFORMERS[transformer](acc);
    }
    return acc;
  }, value);
};

const updateHtmlTarget = (target, value) => {
  const element = document.querySelector(`[data-value-target="${target}"]`);
  if (!element) return;

  if (element.hasAttribute("data-value-target-attribute")) {
    const attribute = element.getAttribute("data-value-target-attribute");
    element.setAttribute(attribute, value);
    return;
  } else {
    element.innerHTML = value;
  }
};

const getElementAttribute = (element, name, transformers = []) => {
  let value = "";

  if (element.hasAttribute(name)) value = element.getAttribute(name);
  if (element.dataset[name]) value = element.dataset[name];

  return transform(value, transformers);
};

class PackageCalculator extends HTMLElement {
  connectedCallback() {
    super.connectedCallback?.();

    this.addEventListener("input", this.#handleChange.bind(this));
  }

  /**
   * @param {InputEvent} event
   */
  #handleChange(event) {
    event.preventDefault();

    const value = event.target.valueAsNumber;

    // TODO: Add reset function to call here.
    if (!value) return;
    if (isNaN(value)) return;

    const squareMeters = this.#calculateSurfaceWithCutoff(value);

    this.#updateValues(squareMeters);
  }

  #calculateSurfaceWithCutoff(squareMeters) {
    // Cutoff margin is a percentage that should be added on top of the surface area.
    const cutoffMargin = getElementAttribute(this, "cutoffPercentage", [
      "parse_float",
    ]);
    return Math.ceil(squareMeters * (1 + cutoffMargin / 100));
  }

  #updateValues(squareMeters) {
    const squareMetersPerPackage = getElementAttribute(
      this,
      "squareMetersPerPackage",
      ["parse_float"]
    );
    const packagePrice = getElementAttribute(this, "productPrice", [
      "parse_float",
    ]);

    const packagesNeeded = Math.ceil(squareMeters / squareMetersPerPackage);
    const totalPrice = transform(packagesNeeded * packagePrice, ["to_string"]);

    updateHtmlTarget("selected-packs", packagesNeeded);
    updateHtmlTarget("entered-surface-area", squareMeters);
    updateHtmlTarget("totals", totalPrice);
    updateHtmlTarget("quantity", packagesNeeded);
  }
}

// Define the custom element.
if (!customElements.get(packageCalculatorSelector))
  customElements.define(packageCalculatorSelector, PackageCalculator);
