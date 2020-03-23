<template>
  <div id="app">
    <momo-button type="default">111111</momo-button>
    <momo-button type="primary">111111</momo-button>
    <momo-button type="success">111111</momo-button>
    <momo-button type="warning">111111</momo-button>
    <momo-button type="danger">111111</momo-button>
    <momo-button type="info" round>111111</momo-button>
  </div>
</template>

<script>
import allButton from "./TestButton";
export default {
  name: "App",
  components: {
    allButton
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
