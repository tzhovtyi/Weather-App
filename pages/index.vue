<template>
  <div class="home">
    <div class="home__inner">
      <SearchBar :centered="searchBarCentered" v-model="location" @submit="getWeather" />
      <Transition name="slide-fade">
        <CurrentWeather v-if="currentWeather" :weather="currentWeather" />
      </Transition>
      <Transition name="slide-fade-vertical">
        <WeatherForecast v-if="threeDayForecast" :forecast="threeDayForecast" />
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { api, convertToForecast, pruneCurrent } from '@/utils'
import { ref } from 'vue'
import type { ForecastItem, CurrentWeather } from '~/types'

const searchBarCentered = ref(true)
const location = ref('')
const currentWeather = ref<CurrentWeather | null>(null)
const threeDayForecast = ref<ForecastItem[] | null>(null)

const getWeather = async () => {
  if (!location.value) return
  try {
    currentWeather.value = null
    threeDayForecast.value = null
    searchBarCentered.value = false
    const { current, forecast } = await api.weather.getWeather(location.value)

    currentWeather.value = pruneCurrent(current)

    threeDayForecast.value = convertToForecast(forecast.list)
  } catch (_) {
    // errors are processed through interceptors
    searchBarCentered.value = true
  }
}
</script>

<style lang="scss" src="@/assets/styles/pages/Home.scss"></style>
