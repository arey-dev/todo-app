/**
 * renders how many stats are left
 */
import PubSub from "pubsub-js";

const changeElemText = (data, elem) => {
  // eslint-disable-next-line no-param-reassign
  elem.textContent = data;
};

const statsView = (container) => {
  const template = document.getElementById("stats-template");
  const content = template.content.cloneNode(true);

  const elem = content.querySelector("span.items-left");

  container.append(content);

  PubSub.subscribe("updateStats", (msg, data) => {
    changeElemText(data, elem);
  });
};

export default statsView;
