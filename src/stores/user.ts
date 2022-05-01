import { acceptHMRUpdate, defineStore } from 'pinia'
import { abs, add, divide, exp, index, norm, sqrt, subtract, sum, zeros } from 'mathjs'
import bessel from 'bessel'

export const useUserStore = defineStore('user', () => {
  /**
   * Current name of the user.
   */
  const savedName = ref('')
  const previousNames = ref(new Set<string>())

  const usedNames = computed(() => Array.from(previousNames.value))
  const otherNames = computed(() => usedNames.value.filter(name => name !== savedName.value))

  const focus = ref(0)

  // Create a 11x11 matrix
  const start_matrix = zeros(11, 11)
  // Set the central value to 1
  start_matrix.set([5, 5], 1)

  const mag = ref(1.0)
  const psf = computed(() => {
    const m = start_matrix.map((value, index, matrix) => {
      const r = norm(subtract(index, [5, 5])) * mag.value
      const f = focus.value
      return bessel.besselj(r, 0)
    })
    return divide(m, abs(sum(m)))
  })

  /**
   * Changes the current name of the user and saves the one that was used
   * before.
   *
   * @param name - new name to set
   */
  function setNewName(name: string) {
    if (savedName.value)
      previousNames.value.add(savedName.value)

    savedName.value = name
  }

  return {
    setNewName,
    otherNames,
    savedName,
    focus,
    mag,
    psf,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
