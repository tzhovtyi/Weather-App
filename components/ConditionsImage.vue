<template>
  <component :is="iconComponent" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ThunderStorm from './Icons/ThunderStorm.vue'
import LightRain from './Icons/LightRain.vue'
import HeavyRain from './Icons/HeavyRain.vue'
import SnowFall from './Icons/SnowFall.vue'
import StrongWind from './Icons/StrongWind.vue'
import ClearSky from './Icons/ClearSky.vue'
import CloudyLight from './Icons/CloudyLight.vue'
import DefaultWeather from './Icons/DefaultWeather.vue'

const props = defineProps<{
  code: number
}>()

const iconMap = {
  2: ThunderStorm,
  3: LightRain,
  5: HeavyRain,
  6: SnowFall,
  7: StrongWind,
  8: CloudyLight
}

const iconComponent = computed(() => {
  if (props.code === 800) return ClearSky
  const firstDigit = Math.floor(props.code / 100)
  return iconMap[firstDigit] || DefaultWeather
})
</script>
