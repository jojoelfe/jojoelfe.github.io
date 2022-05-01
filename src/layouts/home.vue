<script lang="ts" setup>
import { computed } from 'vue'
import { flatten, format } from 'mathjs'
import { useUserStore } from '~/stores/user'

const user = useUserStore()
const blur = computed(() => {
  const blur: number = (user.focus / 20.0) ** 2
  return `blur(${blur}px)`
})
const mag = computed(() => {
  const mag: number = user.mag
  console.log(`scale(${mag})`)
  return `scale(${mag})`
})
const svg_filter = computed(() => {
  return 'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"><filter id="psf">'
    + `<feConvolveMatrix order="11" kernelMatrix="${
      flatten(user.psf).toArray().join(' ')
    }" />`
    + '</filter></svg>#psf\')'
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
  }
</style>
