<script lang="ts" setup>
import { computed } from 'vue'
import { flatten, format } from 'mathjs'
import { useUserStore } from '~/stores/user'

const user = useUserStore()
const blur = computed(() => {
  const blur: number = (user.focus / 20.0) ** 2
  return `blur(${blur}px)`
})
const blurhalf = computed(() => {
  const blur: number = (user.focus / 40.0) ** 2
  return `blur(${blur}px)`
})
const invert = computed(() => {
  if (user.focus <= 0) return 'brightness(100%)'
  let invert: number = 100 + user.focus * 50
  if (invert > 500) invert = 500
  return `brightness(${invert}%)`
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
    <div class="main back m-auto max-w-xl w-100% absolute">
      <RouterView />
    </div>
    <div class="main front m-auto max-w-xl w-100% absolute">
      <RouterView />
    </div>
    <Controls />
  </main>
</template>

<style scoped>

  .back {
    filter: v-bind(blur)
  }
  .front {
    filter:  v-bind(invert) v-bind(blurhalf);
  }
  .main {
    left:0;
    right:0;
  }
</style>
