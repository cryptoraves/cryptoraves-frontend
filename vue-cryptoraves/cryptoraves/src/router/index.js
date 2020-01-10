import Vue from "vue";
import Router from "vue-router";
import Landing from "@/pages/LandingPage/LandingPage";
import TweetDemo from "@/pages/TweetDemoPage/TweetDemoPage";
import ConfirmationPage from "@/pages/ConfirmationPage";
import HistoryPage from "@/pages/HistoryPage";
import PortfolioPage from "@/pages/PortfolioPage";
import HodlerPage from "@/pages/HodlerPage";
import LeaderboardPage from "@/pages/LeaderboardPage";
import Faq from "@/components/Faq";
import NotFound from "@/pages/NotFound";
import PartnershipsPage from "@/pages/PartnershipsPage";

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
      path: "/faq/:target?",
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
      path: "/hodler/:user?",
      name: "HodlerPage",
      component: HodlerPage
    },
    {
      path: "/leaderboard/:page?",
      name: "LeaderboardPage",
      component: LeaderboardPage
    },
    {
      path: "/history/:user?",
      name: "HistoryPage",
      component: HistoryPage
    },
    {
      path: "/partnerships",
      name: "PartnershipsPage",
      component: PartnershipsPage
    },
    {
      path: "/404",
      name: "404Page",
      component: NotFound
    },
    { path: "*", redirect: "/404" }
  ]
});
