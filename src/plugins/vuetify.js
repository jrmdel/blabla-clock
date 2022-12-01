import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#083D77",
        secondary:"#EBEBD3",
        tertiary: "#152429", //"#192C32",
        quaternary:"#916953",
        accent: "#F9E900",
        warning:"#F6AE2D",
        error:"#96031A",
        background: "#dddfeb"
      }
        
    }
}
});
