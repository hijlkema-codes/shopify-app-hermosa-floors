const TEMPLATE_SELECTOR = "#hc_secondary_menu";
const MENU_SELECTOR = "drawer-menu drawer-menu-page[data-page-id='Menu']";

const getMenuElement = () => document.querySelector(MENU_SELECTOR);
const getTemplateContentNode = () =>
  document.querySelector(TEMPLATE_SELECTOR).content.cloneNode(true);

const init = () => {
  const menuElement = getMenuElement();
  const templateContentNode = getTemplateContentNode();

  if (menuElement) {
    menuElement.appendChild(templateContentNode);
  }
};

init();
