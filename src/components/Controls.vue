<script lang="ts" setup>
import { useUserStore } from '~/stores/user'

const user = useUserStore()

function set_focus(event: any) {
  user.focus = event.target.value
}

function set_mag(event: any) {
  user.mag = event.target.value
}

onMounted(() => {
  import('input-knob')
})
</script>

<template>
  <div class="controls flex flex-row flex-gap-20px bg-white p-2 rounded-3xl ">
    <div>
      <div class="label">
        Focus
      </div>
      <input-knob :value="user.focus" scale="10" min="0" max="200" @knob-move-change="set_focus($event)">
        <div class="mark">
          ⬤
        </div>
      </input-knob>
    </div>
    <div>
      <div class="label">
        Magnification
      </div>
      <input-knob :value="user.mag" class="m-auto" scale="10" min="0" max="200" @knob-move-change="set_mag($event)">
        <div class="mark">
          ⬤
        </div>
      </input-knob>
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
