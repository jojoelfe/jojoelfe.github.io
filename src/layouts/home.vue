<script lang="ts" setup>
import { computed } from 'vue'
import { useUserStore } from '~/stores/user'

const user = useUserStore()

const astigmatism_angle = computed(() => {
  // Compute angle from astigx and astigy
  const angle = Math.atan(user.astigy - 100.0 / user.astigx - 100.0) * 180 / Math.PI
  return angle
})

const drop_shadow = computed(() => {
  const astigx = (user.astigx - 100.0) / 3.0
  const astigy = (user.astigy - 100.0) / 3.0
  const drop_shadow = `drop-shadow(${astigx}px ${astigy}px 0px) drop-shadow(${-astigx}px ${-astigy}px 0px)`
  return drop_shadow
})

const blur = computed(() => {
  const blur: number = (user.focus / 20.0 - 5.0) ** 2 + Math.sqrt(((user.astigx - 100.0) / 20.0) ** 2 + ((user.astigy - 100.0) ** 2) / 20.0)
  return `blur(${blur}px)`
})
const mag = computed(() => {
  const mag: number = 10 ** ((user.mag - 100) / 100)
  return `scale(${mag})`
})
</script>

<template>
  <main class="px-4 py-10 text-gray-700 dark:text-gray-200 text-base bg-cover min-h-screen" style="background-image: url('/cover.png'); background-size: 100%; background-attachment: fixed;">
    <Header />
    <div class="m-auto max-w-prose w-full bg-white p-6 rounded-lg shadow-lg mag">
      <div
        class="blur"
      >
        <RouterView />
      </div>div>
    </div>
    <Controls />
  </main>
</template>

<style scoped>

  .blur {
    filter: v-bind(drop_shadow) v-bind(blur);
    -webkit-filter:  v-bind(drop_shadow) v-bind(blur);
  }
  .mag {
    transform: v-bind(mag);
    transform-origin: 50% 0;
  }
</style>
