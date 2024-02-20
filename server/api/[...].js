import axios from 'axios'

export default defineEventHandler(async event => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.externalApiBaseUrl
  const apiKey = config.apiKey

  // CORS
  event.node.res.setHeader('Access-Control-Allow-Origin', '*')
  event.node.res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  event.node.res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  const queryParams = getQuery(event)

  const endpoint = event.node.req.url.split('/api')[1]

  try {
    const apiRes = await axios({
      method: event.node.req.method,
      url: baseUrl + endpoint,
      params: { ...queryParams, appid: apiKey },
      headers: event.node.req.headers
    })

    event.node.res.statusCode = apiRes.status
    for (const [name, value] of Object.entries(apiRes.headers)) {
      event.node.res.setHeader(name, value)
    }
    const data = JSON.stringify(apiRes.data)
    event.node.res.end(data)
  } catch (error) {
    if (error.response) {
      event.node.res.statusCode = error.response.status
      for (const [name, value] of Object.entries(error.response.headers)) {
        event.node.res.setHeader(name, value)
      }
      const errorData = JSON.stringify(error.response.data)
      event.node.res.end(errorData)
      return
    }
    event.node.res.statusCode = 500
    event.node.res.end('Internal Server Error')
  }
})
