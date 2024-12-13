<script lang="ts" setup>
import SoftwareCard from './SoftwareCard.vue'
import software from '~/data/software.json'
</script>

<template>
  <CardList :cards="software" :component="SoftwareCard" />
</template>
