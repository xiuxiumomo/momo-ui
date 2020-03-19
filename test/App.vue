<template>
  <div id='app'>
    <all-button></all-button>
    <momo-button>111111</momo-button>
  </div>
</template>

<script>
import allButton from './TestButton'
export default {
  name: 'App',
  components: {
      allButton
  },
  data() {
    return {};
  }
};
</script>

<style lang='scss'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  
}
</style>
