<script lang="ts" setup>
import vis from '~/data/visualizations.json'
const show_more = ref(false)

const vis_filtered = computed(() => {
  // If show_more return all otherwise only the first 4 papers
  return show_more.value ? vis : vis.slice(0, 4)
})
</script>

<template>
  <div class="flex flex-wrap">
    <VisCard
      v-for="(vis, index) in vis_filtered"
      :key="index" :vis="vis"
    />
  </div>
  <div class="flex justify-center mt-2">
    <button
      v-if="!show_more"
      class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
      @click="show_more = true"
    >
      Show more
    </button>

    <button
      v-if="show_more"
      class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
      @click="show_more = false"
    >
      Show less
    </button>
  </div>
</template>
