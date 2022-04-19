<script lang="ts" setup>
const props = defineProps({
  paper: Object,
})
console.log(props.paper)
</script>

<template lang="pug">
div.h-64.border.rounded-xl.px-3.shadow-lg.min-w-300px.overflow-hidden.snap-center.m-3(class="not-prose" on:click="goto('https://pubmed.ncbi.nlm.nih.gov/'+props.paper.pmid)")
  p.font-bold.leading-5.m-t-2.not-prose {{ props.paper.title }}
  img.w-48.ml--3.float-left.m-t-auto(v-if="props.paper.image" :src="props.paper.image" alt="Paper image")
  p.not-prose.leading-5
    span(v-for="(author, index) in props.paper.authors")
      span(v-bind:class="{ 'font-bold': author.includes('Elferich')}") {{author}}
      span(v-if="index < props.paper.authors.length - 1") ,&nbsp;
  p.not-prose.leading-5
    span.font-bold {{props.paper.fulljournal}}
    span &nbsp;{{props.paper.date}}
  p.not-prose
    div.inline-block(i-academicons:pubmed)
</template>
