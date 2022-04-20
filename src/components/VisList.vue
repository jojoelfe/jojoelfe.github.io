<script lang="ts" setup>
import VisCard from './VisCard.vue'
import vis from '~/data/visualizations.json'
</script>

<template>
  <CardList :cards="vis" :component="VisCard" />
</template>
