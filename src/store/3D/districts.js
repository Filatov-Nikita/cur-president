import DistData from "src/3D/data.json";

const state = {};

const getters = {
  mapDistricts() {
    const dists = DistData.districts;
    return dists.reduce((acc, item) => {
      acc[item.ID] = item;
      return acc;
    }, {});
  }
};

export default {
  namespaced: true,
  state,
  getters
};
