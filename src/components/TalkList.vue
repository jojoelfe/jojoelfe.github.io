<script lang="ts" setup>
import TalkCard from './TalkCard.vue'
import talks from '~/data/talks.json'
</script>

<template>
  <CardList :cards="talks" :component="TalkCard" />
</template>
