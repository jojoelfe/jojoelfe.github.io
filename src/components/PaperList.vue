<script lang="ts" setup>
// const papers = ref<object | null>(null)
//
// const fetchPapers = async() => {
//  const response = await fetch('/api/papers')
//  const data = await response.json()
//  papers.value = data
// }
//
// if (!papers.value)
//  fetchPapers()
//
// onServerPrefetch(async() => {
//  fetchPapers()
// })

import papers from '~/data/papers.json'

console.log(papers)
</script>

<template>
  <div class="paper-list">
    <PaperCard v-for="(paper, index) in papers" :key="index" :paper="paper" />
  </div>
</template>
