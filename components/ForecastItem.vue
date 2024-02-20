<template>
  <div class="forecast-item" :style="{ background: createGradientByTemp((weather.maxTemp + weather.minTemp) / 2) }">
    <p class="forecast-item__date">{{ weather.date }}</p>
    <div class="forecast-item__info">
      <div class="forecast-item__info-item">
        <IconsHumidityIcon />
        <p>{{ weather.humidity }}%</p>
      </div>
      <div class="forecast-item__info-item">
        <IconsWindIcon />
        <p>{{ weather.windSpeed }}kmph</p>
      </div>
      <div class="forecast-item__info-item">
        <IconsLowTemp />
        <p>{{ normalizeTemp(weather.minTemp) }}</p>
      </div>
      <div class="forecast-item__info-item">
        <IconsHighTemp />
        <p>{{ normalizeTemp(weather.maxTemp) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ForecastItem } from '~/types'
import { normalizeTemp, createGradientByTemp } from '~/utils'
const props = defineProps<{
  weather: ForecastItem
}>()
</script>

<style scoped src="@/assets/styles/components/WeatherForecast.scss"></style>
