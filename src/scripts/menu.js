/**
 * renders menu 
 */

const menuView = (container) => {
  const template = document.getElementById('menu-template');
  const content = template.content.cloneNode(true);

  container.append(content);
}

export default menuView;