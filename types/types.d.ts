export type HourlyForecastItem = {
  dt: number
  main: {
    temp: number
    temp_min: number
    temp_max: number
    humidity: number
  }
  weather: [{ description: string }]
  wind: { speed: number }
}

export type ForecastItem = {
  date: string
  minTemp: number
  maxTemp: number
  weatherDescription: string
  windSpeed: number
  humidity: number
}

export type CurrentAllFields = {
  coord: {
    lon: number
    lat: number
  }
  weather: Array<{
    id: number
    main: string
    description: string
    icon: string
  }>
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
    gust: number
  }
  rain: Record<string, number>
  clouds: {
    all: number
  }
  dt: number
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}

export type CurrentWeather = {
  weatherDescription: string
  wind: number
  humidity: number
  temp: number
  code: number
  tempMin: number
  tempMax: number
  location: string
}
