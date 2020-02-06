<template>
  <div>
    <HeroSection></HeroSection>
    <GetToken></GetToken>
    <ShareToken></ShareToken>
    <CheckToken></CheckToken>
    <GrowToken></GrowToken>
    <ToolToken></ToolToken>
  </div>
</template>

<script>
import HeroSection from "./HeroSection";
import GetToken from "./GetToken";
import ShareToken from "./ShareToken";
import CheckToken from "./CheckToken";
import GrowToken from "./GrowToken";
import ToolToken from "./ToolToken";

export default {
  name: "LandingPage",
  components: {
    HeroSection,
    GetToken,
    ShareToken,
    CheckToken,
    GrowToken,
    ToolToken
  }
};
</script>