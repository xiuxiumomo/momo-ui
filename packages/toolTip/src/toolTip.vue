<template>
    <div style="position: relative">
        <span ref="trigger"> <slot></slot> </span>
        <div class="toolTip" :class="{ 'top': placement === 'top'}"></div>
    </div>
</template>
<script>
export default {
    name: 'toolTip'
}
</script>