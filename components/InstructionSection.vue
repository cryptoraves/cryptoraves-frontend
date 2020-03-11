<template>
  <div class="container">
    <SectionHeader>
      <span><slot name="title1"/></span><slot name="title2"/>
    </SectionHeader>
    <div class="instruction-header">
      <slot name="header"/>      
    </div>
    <div class="instruction-steps">
      <slot name="step1"/>
      <slot name="step2"/>
      <slot name="step3"/>
      <slot name="step4"/>
      <slot name="step5"/>
      <slot name="step6"/>
      <slot name="step7"/>
      <slot name="step8"/>
    </div>
  </div>
</template>

<script>
import SectionHeader from '../components/SectionHeader'
export default {
  name: 'InstructionSection',
  components: {
    SectionHeader
  }
}
</script>

<style scoped>
span {
  text-decoration: underline;
}
.instruction-header {
  margin-top: 50px;
  margin-bottom: 30px;
  font-size: 20px;
  font-family: 'Montserrat';
  color: rgb(0, 38, 101);
  line-height: 1.4;
  text-align: center;
}
.instruction-steps {
  display: block;
  font-size: 20px;
  font-family: 'Montserrat';
  color: rgb(0, 38, 101);
  line-height: 1.5;
}
</style>
