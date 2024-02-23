# WeatherApp (тестовое задание)

[Деплой на Vercel](https://weather-app-puce-six-35.vercel.app/)

Инструкция по установке (описание важных фичей внизу)

## Установка зависимостей

Рекомендуется использовать yarn, у npm есть баг с разрешением Pinia при использовании Nuxt 3

```bash
# npm
npm install

# yarn
yarn install

```

## Дев сервер

По дефолту запускается на `http://localhost:3000`:

```bash
# npm
npm run dev

# yarn
yarn dev

```

## Билд

```bash
# npm
npm run build

# yarn
yarn build
```

Локальное превью билда

```bash
# npm
npm run preview

# yarn
yarn preview

```

## Фичи, достойные внимания:

- Все запросы к openweathermap осуществляются через Nitro сервер (~server/api) - защищает api ключи, посольку они не хранятся на клиенте (хотя в данном приложении для удобства проверки нет .env, все в nuxt.config.ts), а также предотвращает CORS ошибки

- Иконка для нынешней погоды в зависимости от кода погоды

- Фон виджетов погоды генерируется в зависимости от температуры в локации

- Для обработки ошибок API используются Axios interceptors
