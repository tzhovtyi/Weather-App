<template>
  <div class="error-message">
    <IconsErrorIcon />
    <p>{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  code: number
}>()

const errorMessage = computed(() => {
  return props.code === 400
    ? `Sorry, we don't have this location`
    : `Sorry, a server error occured. Possibly, we are out of api tokens`
})
</script>

<style lang="scss" src="@/assets/styles/components/ErrorMessage.scss" scoped></style>
