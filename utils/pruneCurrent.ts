import type { CurrentAllFields, CurrentWeather } from '~/types'

export const pruneCurrent = (current: CurrentAllFields): CurrentWeather => {
  const weatherDescription = current.weather[0].description
  const code = current.weather[0].id
  const wind = current.wind.speed
  const { humidity, temp, temp_max: tempMax, temp_min: tempMin } = current.main
  const location = current.name

  return {
    weatherDescription,
    wind,
    humidity,
    temp,
    code,
    tempMax,
    tempMin,
    location
  }
}
