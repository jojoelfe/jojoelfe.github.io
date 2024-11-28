<script lang="ts" setup>
const props = defineProps({
  data: Object,
})
</script>

<template lang="pug">
div.min-h-36.border-2.rounded-xl.px-3.shadow-lg.min-w-30.w-full.overflow-hidden.m-1.not-prose
  img.w-36.ml--3.float-left.relative.bottom-0.mr-2(v-if="props.data.image" :src="props.data.image" alt="Visualization image")

  p.font-bold.text-sm.leading-5.m-t-2.not-prose {{ props.data.title }}
  p.not-prose.leading-5.text-xs
    span {{ props.data.occasion }}
    span &nbsp;{{ props.data.year }}

  a.not-prose.ml-2(:href="props.data.video_url" v-if="props.data.video_url" target="_blank")
    <div class="inline-block" i-carbon-logo-youtube></div>
    span.text-xs.underline Recording

  a.not-prose.ml-2(:href="props.data.slides_url" v-if="props.data.slides_url" target="_blank")
    <div class="inline-block" i-gg:website></div>
    span.text-xs.underline Slides

  a.not-prose.ml-2(:href="props.data.code_url" v-if="props.data.code_url" target="_blank")
    <div class="inline-block" i-carbon-logo-github></div>
    span.text-xs.underline Code

</template>
