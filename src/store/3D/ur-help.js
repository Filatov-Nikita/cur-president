import DistrictsData from "src/3D/data.json";
import UrData from "src/3D/ur.json";

const state = {};

const getters = {
  allCenters() {
    return UrData["ur-help"];
  },
  districtsNameMap() {
    return DistrictsData["districts"].reduce((acc, item) => {
      acc[item.Municipal_districts] = item;
      return acc;
    }, {});
  },
  cityCentersMap() {
    return UrData["ur-help"].reduce((acc, item) => {
      acc[item.raion] = [...(acc[item.raion] || []), item];
      return acc;
    }, {});
  },

  cityIdCentersMap() {
    return UrData["ur-help"].reduce((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
  }
};

export default {
  namespaced: true,
  state,
  getters
};
