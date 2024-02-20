import { instance } from '@/utils/api'
import { useAppStore } from '~/store'

export const getCoordinates = async (location: string) => {
  const res = await instance.get('/geo/1.0/direct', {
    params: { q: location, limit: 1 }
  })
  const { data } = res
  if (!data.length) useAppStore().setApiError(400)
  const { lat, lon } = data[0]
  return { lat, lon }
}

export const getCurrentWeather = async (lat: number, lon: number) => {
  return instance
    .get('/data/2.5/weather', {
      params: {
        lat: lat,
        lon: lon,
        units: 'metric'
      }
    })
    .then(({ data }) => data)
}

export const getWeatherForecast = async (lat: number, lon: number) => {
  return instance
    .get('/data/2.5/forecast', {
      params: {
        lat: lat,
        lon: lon,
        units: 'metric',
        cnt: 24
      }
    })
    .then(({ data }) => data)
}

export const getWeather = async (location: string) => {
  const { lat, lon } = await getCoordinates(location)
  const [current, forecast] = await Promise.all([getCurrentWeather(lat, lon), getWeatherForecast(lat, lon)])
  return { current, forecast }
}
