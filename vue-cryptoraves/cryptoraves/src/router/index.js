import Vue from "vue";
import Router from "vue-router";
import Landing from "@/pages/LandingPage/LandingPage";
import Confirmation from "@/components/Confirmation";
import Portfolio from "@/components/Portfolio";
import Faq from "@/components/Faq";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Landing",
      component: Landing
    },
    {
      path: "/faq/:top?",
      name: "Faq",
      component: Faq
    },
    {
      path: "/confirmation/:txnId?",
      name: "Confirmation",
      component: Confirmation
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      component: Portfolio
    }
  ]
});
