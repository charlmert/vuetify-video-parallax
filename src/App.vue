<template>
  <div id="app" style="height: 5000px">
    <H1> Welcome to the Vuetify Video Prallax Component </H1>
    <VuetifyVideoParallax height="600" src="/assets/slapping.mp4" style="margin-top: 100px">
      <H2> Yes it can run stand alone, so it doesn't need vuetify to be installed but with vuetify great things can be accomplished </H2>
    </VuetifyVideoParallax>
  </div>
</template>

<script>
import VuetifyVideoParallax from './VuetifyVideoParallax';

export default {
  name: 'App',
  components: {
    VuetifyVideoParallax,
  },
}
</script>
