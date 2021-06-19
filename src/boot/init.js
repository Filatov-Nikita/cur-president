import Vue from "vue";
import PortalVue from "portal-vue";
import * as moment from "moment";
import "moment/locale/ru";

Vue.use(PortalVue);

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

Vue.directive("space-m", function(el, binding, vnode) {
  el.style[`margin-${binding.arg}`] = binding.value;
});

Vue.directive("space-p", function(el, binding, vnode) {
  el.style[`padding-${binding.arg}`] = binding.value;
});
