import {createRouteTemplate} from "./components/route.js";
import {createCostTemplate} from "./components/cost";
import {createMenuTemplate} from "./components/menu.js";
import {createFiltersTemplate} from "./components/filters.js";
import {createSortTemplate} from "./components/sort.js";
import {createFormTemplate} from "./components/form.js";
import {createDestinationTemplate} from "./components/destination.js";
const DESTINATION_NUM = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteEventElement = document.querySelector(`.trip-main`);
const siteMenuElementWrapper = document.querySelector(`.trip-main__trip-controls`);
const siteMenuElement = siteMenuElementWrapper.querySelector(`h2`);

const siteMainContainer = document.querySelector(`.page-main`);
const siteTripEventsElement = siteMainContainer.querySelector(`.trip-events`);


render(siteEventElement, createCostTemplate(), `afterbegin`);
render(siteEventElement, createRouteTemplate(), `afterbegin`);
render(siteMenuElement, createMenuTemplate(), `beforeend`);
render(siteMenuElementWrapper, createFiltersTemplate(), `beforeend`);
render(siteTripEventsElement, createSortTemplate(), `beforeend`);
render(siteTripEventsElement, createFormTemplate(), `beforeend`);

for (let i = 0; i < DESTINATION_NUM; i++) {
  render(siteTripEventsElement, createDestinationTemplate(), `beforeend`);
}

