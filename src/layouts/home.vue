<script lang="ts" setup>
import { computed } from 'vue'
import { useUserStore } from '~/stores/user'

const user = useUserStore()
const blur = computed(() => {
  const blur: number = (user.focus / 20.0 - 5.0) ** 2
  return `blur(${blur}px)`
})
const mag = computed(() => {
  const mag: number = 10 ** ((user.mag - 100) / 100)
  console.log(`scale(${mag})`)
  return `scale(${mag})`
})
</script>

<template>
  <main class="px-4 py-10  text-gray-700 dark:text-gray-200">
    <Header />
    <div class="blur m-auto max-w-xl w-100%">
      <RouterView />
    </div>
    <Controls />
  </main>
</template>

<style scoped>

  .blur {
    filter: v-bind(blur);
    -webkit-filter: v-bind(blur);
    transform: v-bind(mag);
  }
</style>
