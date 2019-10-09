<template>
  <div class="animated-arrow">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>
<script>
export default {
  name: "AnimatedArrow"
};
</script>
<style scoped>
.animated-arrow {
  display: flex;
  margin: auto;
}
.animated-arrow span {
  width: 50px;
  height: 50px;
  border-bottom: 10px solid #06a8ff;
  border-right: 10px solid #06a8ff;
  transform: rotate(0deg);
  margin: -10px;
  animation: animate 2s infinite;
  transform: rotate(-45deg);
}
@keyframes animate {
  0% {
    opacity: 0;
    translate: (-20px, -20px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    translate: (20px, 20px);
  }
}
.animated-arrow span:nth-child(1) {
  animation-delay: -1s;
}
.animated-arrow span:nth-child(2) {
  animation-delay: -0.8s;
}
.animated-arrow span:nth-child(3) {
  animation-delay: -0.6s;
}
.animated-arrow span:nth-child(4) {
  animation-delay: -0.4s;
}
.animated-arrow span:nth-child(5) {
  animation-delay: -0.2s;
}
.animated-arrow span:nth-child(6) {
  animation-delay: 0s;
}
@media only screen and (max-width: 767px) {
  .animated-arrow span {
    width: 40px;
    height: 40px;
    border-bottom: 8px solid #06a8ff;
    border-right: 8px solid #06a8ff;
  }
}
@media only screen and (max-width: 410px) {
  .animated-arrow span {
    width: 30px;
    height: 30px;
    border-bottom: 4px solid #06a8ff;
    border-right: 4px solid #06a8ff;
  }
}
</style>