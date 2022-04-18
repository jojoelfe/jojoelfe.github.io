<script lang="ts" setup>
const props = defineProps({
  paper: Object,
})
</script>

<template lang="pug">
div.card
  p.title {{ props.paper.title }}

</template>
