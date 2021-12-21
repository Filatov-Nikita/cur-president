import Vue from "vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("AppInput2", require("src/core/AppInput").default);
Vue.component("AppLink", require("src/core/AppLink").default);
Vue.component("AppCheckbox2", require("src/core/AppCheckbox").default);
Vue.component("AppButton2", require("src/core/AppButton").default);
