import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#0D7422", // #E53935
        secondary: "#51B747", // #FFCDD2
        accent: "#D9D9D9", // #3F51B5
      },
    },
  },
});
