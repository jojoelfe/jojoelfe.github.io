<script lang="ts" setup>
const props = defineProps({
  vis: Object,
})
console.log(props.vis)
</script>

<template lang="pug">
div.min-h-36.border.rounded-xl.px-3.shadow-lg.min-w-30.w-36rem.max-w-36rem.overflow-hidden.m-1.not-prose
  img.w-36.ml--3.float-left.relative.bottom-0.mr-2(v-if="props.vis.image" :src="props.vis.image" alt="Visualization image")

  p.font-bold.text-sm.leading-5.m-t-2.not-prose {{ props.vis.title }}
  p.not-prose.leading-5.text-xs {{ props.vis.description }}

  a.not-prose(:href="props.vis.url" target="_blank")
    <div class="inline-block" i-gg:website></div>
    span.text-xs.underline Website

  a.not-prose.ml-2(:href="props.vis.github_url" target="_blank")
    <div class="inline-block" i-carbon-logo-github></div>
    span.text-xs.underline Code

</template>
