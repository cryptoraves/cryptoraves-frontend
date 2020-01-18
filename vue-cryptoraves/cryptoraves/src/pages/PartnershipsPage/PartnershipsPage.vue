<template>
  <div>
    <VaylaToken></VaylaToken>
    <PartnershipsSection></PartnershipsSection>
    <WithdrawingToken></WithdrawingToken>
  </div>
</template>

<script>
import VaylaToken from "./VaylaToken";
import PartnershipsSection from "./PartnershipsSection";
import WithdrawingToken from "./WithdrawingToken";
export default {
  name: "LandingPage",
  components: {
    VaylaToken,
    PartnershipsSection,
    WithdrawingToken
  }
};
</script>
