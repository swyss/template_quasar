import { store } from "quasar/wrappers";
import { createPinia } from "pinia";

// add a property named `secret` to every store that is created
// after this plugin is installed this could be in a different file
function SecretPiniaPlugin() {
  return { secret: "the cake is a lie" };
}
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(async (/* { ssrContext } */) => {
  const pinia = createPinia();
  // give the plugin to pinia
  pinia.use(SecretPiniaPlugin);

  return pinia;
});
