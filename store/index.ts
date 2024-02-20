export const useAppStore = defineStore('appStore', {
  state: () => ({
    apiErrorCode: null as number | null
  }),
  actions: {
    setApiError(code: number) {
      this.apiErrorCode = code
      setTimeout(() => {
        this.apiErrorCode = null
      }, 8000)
    }
  }
})
