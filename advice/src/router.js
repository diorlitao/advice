import Vue from 'vue';
import Router from 'vue-router';

const My = () => import(`./views/MyAdvices.vue`);
const Advices = () => import(`./views/Advices.vue`);
const Add = () => import(`./views/AddAdvice.vue`);

Vue.use(Router);

export default new Router({
  routes: [{
    path: `/`,
    name: `advices`,
    component: Advices,
  },
  {
    path: `/add`,
    name: `add`,
    component: Add,
  }, {
    path: `/my`,
    name: `my`,
    component: My,
  },
  ],
  mode: `history`,
});
