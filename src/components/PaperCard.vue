<script lang="ts" setup>
const props = defineProps({
  data: Object,
})
</script>

<template lang="pug">
div.min-h-36.border.rounded-xl.px-3.shadow-lg.min-w-30.w-36rem.max-w-36rem.overflow-hidden.m-1.not-prose
  div.float-left.h-full.flex
    img.w-36.ml--3.relative.bottom-0.mr-2(v-if="props.data.image" :src="props.data.image" alt="Paper image")

  p.font-bold.text-sm.leading-5.m-t-2.not-prose {{ props.data.title }}
  p.not-prose.leading-5.text-xs
    span(v-for="(author, index) in props.data.authors")
      span(v-bind:class="{ 'font-bold': author.includes('Elferich')}") {{author}}
      span(v-if="index < props.data.authors.length - 1") ,&nbsp;
  p.not-prose.leading-5.text-xs
    span.font-bold {{props.data.fulljournal}}
    span &nbsp;{{props.data.date}}
  a.not-prose(:href="'https://pubmed.ncbi.nlm.nih.gov/'+props.data.pmid" v-if="props.data.pmid" target="_blank")
    <div class="inline-block " i-academicons:pubmed></div>
    span.text-xs.underline Pubmed
  a.not-prose(:href="'https://www.biorxiv.org/content/'+props.data.biorxiv" v-if="props.data.biorxiv" target="_blank")
    <div class="inline-block " i-academicons:biorxiv></div>
    span.text-xs.underline bioRxiv
  a.not-prose.ml-2(:href="props.data.code_url" v-if="props.data.code_url" target="_blank")
    <div class="inline-block" i-carbon-logo-github></div>
    span.text-xs.underline Code
  a.not-prose.ml-2(:href="props.data.code_url2" v-if="props.data.code_url2" target="_blank")
    <div class="inline-block" i-carbon-logo-github></div>
    span.text-xs.underline Code

</template>
