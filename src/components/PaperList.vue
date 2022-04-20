<script lang="ts" setup>
import PaperCard from './PaperCard.vue'
import papers from '~/data/papers.json'
</script>

<template>
  <CardList :cards="papers" :component="PaperCard" />
</template>
