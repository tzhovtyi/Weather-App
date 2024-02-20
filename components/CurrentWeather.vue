<template>
  <div class="current-weather">
    <div class="current-weather__inner" :style="{ background: createGradientByTemp(weather.temp) }">
      <div class="current-weather__location">
        <IconsLocationIcon />
        <p>{{ weather.location }}</p>
      </div>
      <div class="current-weather__main">
        <div class="current-weather__temperature">
          <IconsTemperatureIcon />
          <p>{{ normalizeTemp(weather.temp) }}</p>
        </div>
        <div class="current-weather__conditions">
          <ConditionsImage :code="weather.code" />
          <p>{{ weather.weatherDescription }}</p>
        </div>
      </div>
      <div class="current-weather__stats">
        <div class="current-weather__stats-item">
          <IconsHumidityIcon />
          <p>{{ weather.humidity }}%</p>
        </div>
        <div class="current-weather__stats-item">
          <IconsWindIcon />
          <p>{{ weather.wind }}kmph</p>
        </div>
        <div class="current-weather__stats-item">
          <IconsLowTemp />
          <p>{{ normalizeTemp(weather.tempMin) }}</p>
        </div>
        <div class="current-weather__stats-item">
          <IconsHighTemp />
          <p>{{ normalizeTemp(weather.tempMax) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CurrentWeather } from '~/types'
import { normalizeTemp, createGradientByTemp } from '~/utils'

defineProps<{ weather: CurrentWeather }>()
</script>

<style lang="scss" src="@/assets/styles/components/CurrentWeather.scss" scoped></style>
