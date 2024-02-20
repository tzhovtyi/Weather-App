<template>
  <div class="weather-forecast">
    <ForecastItem v-for="(item, i) in forecast" :weather="item" :key="i" />
  </div>
</template>

<script setup lang="ts">
import type { ForecastItem } from '~/types'
defineProps<{
  forecast: ForecastItem[]
}>()
</script>

<style scoped src="@/assets/styles/components/WeatherForecast.scss"></style>
