<script lang="ts" setup>
import { divide, format, max } from 'mathjs'
import { useUserStore } from '~/stores/user'

const user = useUserStore()

function set_focus(event: any) {
  user.focus = event.target.value - 100.0
}

const mag_value = ref(100)

function set_mag(event: any) {
  user.mag = 10 ** ((event.target.value - 100) / 100)
}

onMounted(() => {
  import('input-knob')
})

user.$subscribe((mutation, state) => {
  console.log(format(user.psf, 2))
  const a = divide(user.psf, max(user.psf))
  // fill canvas test with psf
  const canvas = document.getElementById('test') as HTMLCanvasElement
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#000'
  ctx.imageSmoothingEnabled = false
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  for (let i = 0; i < 11 * 11; i++) {
    const x = i % 11
    const y = Math.floor(i / 11)
    const value = a.get([x, y])
    // blue for positive, red for negative
    ctx.fillStyle = value > 0 ? `rgb(0,${value * 255.0},${value * 255.0})` : `rgb(${-value * 255.0},0,0)`
    ctx.fillRect(x * 10, y * 10, 10, 10)
  }
})

</script>

<template>
  <div class="controls flex flex-row flex-gap-20px bg-white p-2 rounded-3xl shadow-xl border">
    <div>
      <div class="label m-auto text-center">
        Focus
      </div>
      <input-knob :value="user.focus + 100.0" class="m-auto" scale="10" min="0" max="200" @knob-move-change="set_focus($event)">
        <div class="mark">
          ⬤
        </div>
      </input-knob>
    </div>
    <div>
      <div class="label">
        Magnification
      </div>
      <input-knob :value="mag_value" class="m-auto" scale="10" min="0" max="200" @knob-move-change="set_mag($event)">
        <div class="mark">
          ⬤
        </div>
      </input-knob>
    </div>
    <div>
      <canvas id="test" width="110" height="110" class="w-100px h-100px" />
    </div>
  </div>
</template>

<style scoped>
.controls {
position: fixed;
bottom: 1rem;
}
.label {

  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}
 input-knob {
    width: 3em;
    height: 3em;
    display: block;
    border-radius: 100%;
    box-shadow: 0 0.3rem 0.3rem rgba(0, 0, 0, 0.5);
    background: #dddddd;
  }

  input-knob::part(rotator) {
    box-sizing: border-box;
    width: 3em;
    height: 3em;
    background: #bebebe;
    border: 0.3rem double #1c1c1c;
    border-radius: 100%;
  }
  .mark {
    width: 100%;
    text-align: center;
    font: bold 50% monospace;
    color: #000000;
    margin-top: 0.2rem;
  }
</style>
