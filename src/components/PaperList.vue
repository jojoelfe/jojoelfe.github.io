<script lang="ts" setup>
import papers from '~/data/papers.json'

</script>

<template>
  <div class="flex flex-wrap">
    <PaperCard v-for="(paper, index) in papers" :key="index" :paper="paper" />
  </div>
</template>
