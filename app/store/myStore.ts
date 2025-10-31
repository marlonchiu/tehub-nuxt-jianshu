import { defineStore } from 'pinia'
import { persistedState } from '#imports'

export const useMyStore = defineStore('my', {
  state: () => ({
    counter: 1,
    token: 'BB48SNiV98ej5AdB'
  }),
  getters: {
    doubleCounter: state => state.counter * 2
  },
  actions: {
    add() {
      this.counter++
    }
  },
  // persist: true,
  persist: {
    // storage: persistedState.localStorage
    storage: persistedState.cookiesWithOptions(),
    paths: ['token']
  }
})
