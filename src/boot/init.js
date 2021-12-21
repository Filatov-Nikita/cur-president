import Vue from "vue";
import PortalVue from "portal-vue";
import * as moment from "moment";
import "moment/locale/ru";
// import 'animate.css'
import "fullpage-vue/src/fullpage.css";
import VueFullpage from "fullpage-vue";
import * as ky from "src/api/helpers/ky";
import { Notify } from "quasar";

Vue.prototype.$ky = ky;


Notify.setDefaults({
  classes: "app-notification",
  timeout: 3000
});

Vue.use(PortalVue);

Vue.use(VueFullpage);
moment.locale("ru");

Vue.component(
  "BoardCover",
  require("src/3D/components/Boards/Helpers/BoardCover").default
);
Vue.component(
  "BoardHead",
  require("src/3D/components/Boards/Helpers/BoardHead").default
);
Vue.component(
  "BoardDevider",
  require("src/3D/components/Boards/Helpers/BoardDevider").default
);
Vue.component(
  "BoardSeparator",
  require("src/3D/components/Boards/Helpers/BoardSeparator").default
);
Vue.component(
  "BoardNumbers",
  require("src/3D/components/Boards/Helpers/BoardNumbers").default
);
Vue.component(
  "BoardMappingNumbers",
  require("src/3D/components/Boards/Helpers/BoardMappingNumbers").default
);
Vue.component(
  "BoardPeriodNumbers",
  require("src/3D/components/Boards/Helpers/BoardPeriodNumbers").default
);
Vue.component(
  "BoardCaption",
  require("src/3D/components/Boards/Helpers/BoardCaption").default
);
// Vue.component(
//   "BoardCaption",
//   require("src/3D/components/Boards/Helpers/BoardCaption").default
// );

Vue.component(
  "BoardOffsets",
  require("src/3D/components/Boards/Helpers/BoardOffsets").default
);

Vue.component(
  "BoardWrapper",
  require("src/3D/components/Boards/Helpers/BoardWrapper").default
);

Vue.component(
  "BoardVitals",
  require("src/3D/components/Boards/Helpers/BoardVitals").default
);

Vue.component(
  "BoardCells",
  require("src/3D/components/Boards/Helpers/BoardCells").default
);

Vue.component("AppSelect", require("src/3D/core/AppSelect").default);
Vue.component("AppButton", require("src/3D/core/AppButton").default);
Vue.component("AppInput", require("src/3D/core/AppInput").default);
Vue.component("AppCheckbox", require("src/3D/core/AppCheckbox").default);

Vue.directive("space-m", function(el, binding, vnode) {
  el.style[`margin-${binding.arg}`] = binding.value;
});

Vue.directive("space-p", function(el, binding, vnode) {
  el.style[`padding-${binding.arg}`] = binding.value;
});

Vue.filter("prettyAmount", function(value) {
  if (typeof value !== "string") return "";
  let [left, right = ""] = value.split(".");
  const sign = left[0] === "-" || left[0] === "+" ? left[0] : "";
  if (sign) left = left.substring(1);
  const clearLeft = left.replace(/[^0-9]/g, "");
  if (!clearLeft) return value;
  const matched = (right || left).match(/[^0-9](.*?)+/);
  const tail = (matched && matched[0]) || "";
  const prettyPart = clearLeft.match(/.{1,3}(?=(.{3})*$)/g).join(" ");
  if (!right) return sign + prettyPart + tail;
  return sign + prettyPart + "," + right.replace(/[^0-9]/g, "") + tail;
});

let init = false;

export default function({ router }) {
  router.beforeEach((from, to, next) => {
    if (!init) {
      init = true;
      if (to.path === "/" && from.path === "/") {
        return next({ name: "videomess.main" });
      }
    }

    return next();
  });
}
