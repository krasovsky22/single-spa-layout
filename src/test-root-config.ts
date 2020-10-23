import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
const routes = constructRoutes(document.querySelector("#single-spa-layout"));
console.log(routes);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
constructLayoutEngine({ routes, applications });
applications.forEach(registerApplication);
start();
