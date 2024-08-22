const TEMPLATE_SELECTOR = "#hc_secondary_menu";
const MENU_SELECTOR =
  "drawer-menu drawer-menu-page[data-page-id='Menu'] .drawer-menu__content";
const REMOVE_MENU_SELECTOR = "#hc_secondary_menu_drawer";
const DRAWER_SELECTOR = "drawer-menu";

const getMenuElement = () => document.querySelector(MENU_SELECTOR);
const getTemplateContentNode = () =>
  document.querySelector(TEMPLATE_SELECTOR).content.cloneNode(true);
const getElementToRemove = () => document.querySelector(REMOVE_MENU_SELECTOR);

const init = () => {
  const menuElement = getMenuElement();
  const templateContentNode = getTemplateContentNode();
  getElementToRemove()?.remove();

  if (menuElement && templateContentNode) {
    menuElement.appendChild(templateContentNode);
  }
};

init();

// Create a mutationobserver that triggers init when the drawer classList is changed
const observer = new MutationObserver(init);
observer.observe(document.querySelector(DRAWER_SELECTOR), { attributes: true });
