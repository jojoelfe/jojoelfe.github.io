<script lang="ts" setup>
import papers from '~/data/papers.json'

</script>

<template>
  <div class="flex overflow-x-scroll snap-mandatory snap-x">
    <PaperCard v-for="(paper, index) in papers" :key="index" :paper="paper" />
  </div>
</template>
