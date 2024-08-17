import { clearErrors, showError } from "./utils/errors.mjs";
import {
  bindEventListeners,
  getElementAttribute,
  getElementValue,
  setElementLoading,
  updateHtmlTarget,
} from "./utils/html.mjs";
import { addPercentageCeiled, divideCeiled } from "./utils/maths.mjs";
import { addToCart } from "./utils/shopify.mjs";
import { openCartDrawer } from "./utils/theme.mjs";
import { transform } from "./utils/transformers.mjs";

const packageCalculatorSelector = "package-calculator";
const cartDrawerSelector = "cart-drawer";

class PackageCalculator extends HTMLElement {
  connectedCallback() {
    super.connectedCallback?.();

    this.addEventListener("input", this.#handleChange.bind(this));
    bindEventListeners(this.querySelector("form"), [
      {
        type: "submit",
        handler: this.#handleSubmit.bind(this),
      },
    ]);
  }

  /**
   * @param {InputEvent} event
   */
  #handleChange(event) {
    event.preventDefault();
    this.setAttribute("aria-expanded", "true");

    const value = event.target.valueAsNumber;

    if (!this.#isValidEventValue(value)) {
      this.#reset(1);
      return;
    }

    const squareMeters = this.#calculateSurfaceWithCutoff(value);

    this.#updateValues(squareMeters);
  }

  async #handleSubmit(event) {
    event.preventDefault();
    clearErrors(this);

    const squareMeters = getElementValue(
      this.querySelector('input[name="square_meters"]'),
      ["parse_int"]
    );
    const variantId = getElementAttribute(this, "productId");
    const quantity = getElementAttribute(
      this.querySelector('input[name="quantity"]'),
      "value",
      ["parse_int"]
    );

    // Validation first.
    if (!squareMeters) {
      showError(this, "missing-fields", "Surface area is required.", {
        squareMeters,
      });
      return;
    }
    if (!variantId) {
      showError(this, "generic", "Product ID not found.");
      return;
    }

    if (!quantity) {
      showError(this, "missing-fields", "Quantity is required.", { quantity });
      return;
    }

    // Add to cart logic.

    setElementLoading(this);
    await addToCart(variantId, quantity);
    setElementLoading(this, false);

    // Open the cart drawer.
    openCartDrawer();
  }

  #calculateSurfaceWithCutoff(squareMeters) {
    return addPercentageCeiled(
      squareMeters,
      getElementAttribute(this, "cutoffPercentage", ["parse_float"])
    );
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

    const packagesNeeded = divideCeiled(squareMeters, squareMetersPerPackage);
    const totalPrice = transform(packagesNeeded * packagePrice, ["to_string"]);

    updateHtmlTarget("selected-packs", packagesNeeded);
    updateHtmlTarget("entered-surface-area", squareMeters);
    updateHtmlTarget("totals", totalPrice);
    updateHtmlTarget("quantity", packagesNeeded);
  }

  #isValidEventValue(value) {
    if (!value) return false;
    if (isNaN(value)) return false;
    if (value < 1) return false;

    return true;
  }

  #reset(toValue = 1) {
    const input = this.querySelector('input[name="square_meters"]');
    input.value = toValue;
    this.#updateValues(toValue);
  }
}

// Define the custom element.
if (!customElements.get(packageCalculatorSelector))
  customElements.define(packageCalculatorSelector, PackageCalculator);
