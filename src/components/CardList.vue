<script lang="ts" setup>
const props = defineProps({
  cards: Object,
  component: Object,
})

const show_more = ref(false)

const cards_filtered = computed(() => {
  // If show_more return all otherwise only the first 4 papers
  return show_more.value ? props.cards : props.cards.slice(0, 4)
})
</script>

<template>
  <div class="flex flex-wrap">
    <component
      :is="component"
      v-for="(card, index) in cards_filtered"
      :key="index" :data="card"
    />
  </div>
  <div class="flex justify-center mt-2">
    <button
      v-if="!show_more && cards.length > 4"
      class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
      @click="show_more = true"
    >
      Show more
    </button>

    <button
      v-if="show_more && cards.length > 4"
      class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
      @click="show_more = false"
    >
      Show less
    </button>
  </div>
</template>
