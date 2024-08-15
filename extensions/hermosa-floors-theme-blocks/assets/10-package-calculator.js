const zippy = {
  rootUrl: window.Shopify.routes.root,
  cartAjax: zippy.rootUrl + "/cart.js",
};

const packageCalculatorSelector = "package-calculator";
const cartDrawerSelector = "cart-drawer";

// Create a new instance of the PackageCalculator class. A custom element wrapping
// the package-calculator element.

class PackageCalculator extends HTMLElement {
  connectedCallback() {
    super.connectedCallback();

    this.init();
  }

  init() {}
}

// Define the custom element.
if (!customElements.get(packageCalculatorSelector))
  customElements.define(packageCalculatorSelector, PackageCalculator);
