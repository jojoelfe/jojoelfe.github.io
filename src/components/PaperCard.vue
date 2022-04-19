<script lang="ts" setup>
const props = defineProps({
  paper: Object,
})
console.log(props.paper)
</script>

<template lang="pug">
div.h-72.border.rounded.px-5.shadow-lg.min-w-400px.overflow-hidden.snap-center.m-3(class="hover:shadow-2xl" on:click="goto('https://pubmed.ncbi.nlm.nih.gov/'+props.paper.pmid)")
  p.font-bold {{ props.paper.title }}
  p
    span(v-for="(author, index) in props.paper.authors")
      span(v-bind:class="{ 'font-bold': author.includes('Elferich')}") {{author}}
      span(v-if="index < props.paper.authors.length - 1") ,&nbsp;
  p
    span.font-bold {{props.paper.fulljournal}}
    span &nbsp;{{props.paper.date}}
    div(i-academicons:pubmed)
</template>
