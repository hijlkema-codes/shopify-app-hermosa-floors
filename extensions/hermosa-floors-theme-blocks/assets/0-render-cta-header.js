const ownerTag = document.getElementById("cta_header_settings");
const ownerData = {
  display: ownerTag.getAttribute("data-display"),
  has_icon: ownerTag.getAttribute("data-display-icon"),
  label: ownerTag.getAttribute("data-label"),
  href: ownerTag.getAttribute("data-href"),
  id: ownerTag.getAttribute("data-id"),
  target: ownerTag.getAttribute("data-target-replace"),
  icon: ownerTag.getAttribute("data-icon"),
};

/**
 * Override the target element with the CTA button.
 * This method should only be called when the display is set to the string true.
 */
function overrideTarget() {
  const target = document.querySelector(ownerData.target);
  const button = document.createElement("a");

  if (ownerData.has_icon) {
    const icon = document.createElement("img");
    icon.src = ownerData.icon;
    icon.alt = ownerData.label;
    button.appendChild(icon);
  }

  const text = document.createElement("span");
  text.innerText = ownerData.label;
  button.appendChild(text);

  button.id = ownerData.id;
  button.href = ownerData.href;

  if (target) {
    target.replaceWith(button);
  }
}

if (ownerData.display === "true") {
  overrideTarget();
}
