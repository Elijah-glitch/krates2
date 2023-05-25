import axios from 'axios'
import { isDev } from '~/utils/isDev'

export const axiosBase = axios.create({
  baseURL: isDev() ? 'http://192.168.0.150:4000/' :
  timeout: 10000,
})
