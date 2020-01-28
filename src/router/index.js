import Vue from "vue";
import VueRouter from "vue-router";
import course from "../views/course.vue";
import calculator from "../views/calculator.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "course",
    component: course
  },
  {
    path: "/calculator",
    name: "calculator",
    component: calculator
  }
];

const router = new VueRouter({
  routes
});

export default router;
