<template>
  <button
    class="momo-button"
    :class="[`momo-button--${type}`,{'is-round': round}]"
    @click="handleClick"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "MomoButton",
  props: {
    type: {
      default: "default", //primary success warning/danger /info /text
      type: String
    },
    round: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>
<style lang="scss">

</style>
