import * as weather from './weather'

import axios from 'axios'
import { useAppStore } from '~/store'

// Using Nuxt server, proxying the request to avoid weatherMap cors & secure api key
const instance = axios.create({
  baseURL: '/api'
})

instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.error(error)
    useAppStore().setApiError(error.code)
  }
)

export { instance, weather }
