<script lang="ts" setup>
const props = defineProps({
  paper: Object,
})
console.log(props.paper)
</script>

<template lang="pug">
div.min-h-36.border.rounded-xl.px-3.shadow-lg.min-w-30.w-36rem.max-w-36rem.overflow-hidden.m-1.not-prose
  img.w-36.ml--3.float-left.relative.bottom-0.mr-2(v-if="props.paper.image" :src="props.paper.image" alt="Paper image")

  p.font-bold.text-sm.leading-5.m-t-2.not-prose {{ props.paper.title }}
  p.not-prose.leading-5.text-xs
    span(v-for="(author, index) in props.paper.authors")
      span(v-bind:class="{ 'font-bold': author.includes('Elferich')}") {{author}}
      span(v-if="index < props.paper.authors.length - 1") ,&nbsp;
  p.not-prose.leading-5.text-xs
    span.font-bold {{props.paper.fulljournal}}
    span &nbsp;{{props.paper.date}}
  a.not-prose(:href="'https://pubmed.ncbi.nlm.nih.gov/'+props.paper.pmid" target="_blank")
    <div class="inline-block" i-academicons:pubmed></div>

</template>
