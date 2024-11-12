import Axios, { InternalAxiosRequestConfig } from 'axios'
import { Config, Effect } from 'effect'

const API_URL = Effect.runSync(Config.string('API_URL'))

export const api = Axios.create({
  baseURL: API_URL,
})

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  console.log('interceptors.request', config)

  if (config.headers) {
    config.headers.Accept = 'application/json'
  }

  config.withCredentials = true

  return config
})

api.interceptors.response.use(
  (response) => {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    return response.data
  },
  (error) => {
    // console.error('Axios Error', error)
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // if (error.response?.status === 401) {
    //   console.log('Axios status 401')
    //   const searchParams = new URLSearchParams()
    //   const redirectTo = searchParams.get('redirectTo')
    //   window.location.href = `/auth/login`
    //   return
    // }

    return Promise.reject(error)
  },
)
