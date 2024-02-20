import type { ForecastItem, HourlyForecastItem } from '~/types'

import dayjs from 'dayjs'

const timestampToDate = (timestamp: number): string => {
  return dayjs.unix(timestamp).format('YYYY-MM-DD')
}
const dateToDayOfWeek = (date: string): string => {
  return dayjs(date).format('MMM D, ddd')
}
const isToday = (date: string): boolean => {
  const today = dayjs()
  return dayjs(date).isSame(today, 'day')
}

const groupDataByDay = (data: HourlyForecastItem[]): Record<string, HourlyForecastItem[]> => {
  return data.reduce((groupedData, item) => {
    const date = timestampToDate(item.dt)
    if (!isToday(date)) {
      groupedData[date] = groupedData[date] || []
      groupedData[date].push(item)
    }
    return groupedData
  }, {} as Record<string, HourlyForecastItem[]>)
}

const convertToForecast = (data: HourlyForecastItem[]): ForecastItem[] => {
  const groupedData = groupDataByDay(data)
  return Object.values(groupedData).map(dailyData => {
    const minTemp = Math.min(...dailyData.map(item => item.main.temp_min))
    const maxTemp = Math.max(...dailyData.map(item => item.main.temp_max))
    const weatherDescription = dailyData[0].weather[0].description
    const windSpeed = dailyData[0].wind.speed
    const humidity = dailyData[0].main.humidity
    const date = dateToDayOfWeek(timestampToDate(dailyData[0].dt))

    return {
      date: date,
      minTemp,
      maxTemp,
      weatherDescription,
      windSpeed,
      humidity
    }
  })
}

export { convertToForecast }
