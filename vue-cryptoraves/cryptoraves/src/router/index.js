import Vue from "vue";
import Router from "vue-router";
import Landing from "@/pages/LandingPage/LandingPage";
import TweetDemo from "@/pages/TweetDemoPage/TweetDemoPage";
import ConfirmationPage from "@/pages/ConfirmationPage";
import HistoryPage from "@/pages/HistoryPage";
import PortfolioPage from "@/pages/PortfolioPage";
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
      path: "/tweetdemo/:target?",
      name: "TweetDemo",
      component: TweetDemo
    },
    {
      path: "/faq/:top?",
      name: "Faq",
      component: Faq
    },
    {
      path: "/confirmation/:txnId?",
      name: "ConfirmationPage",
      component: ConfirmationPage
    },
    {
      path: "/portfolio/:user?",
      name: "PortfolioPage",
      component: PortfolioPage
    },
    {
      path: "/history/:user?",
      name: "HistoryPage",
      component: HistoryPage
    }
  ]
});
